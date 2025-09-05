const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');
const Token = require('../models/Token');
const { sendMail } = require('../utils/mailer');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already used' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, role: role || 'candidate' });

    // create email verification token
    const tokenString = crypto.randomBytes(32).toString('hex');
    await Token.create({ userId: user._id, token: tokenString });

    const verifyUrl = `${req.protocol}://${req.get('host')}/api/auth/verify-email?token=${tokenString}&id=${user._id}`;
    await sendMail({
      to: email,
      subject: 'Verify your email',
      html: `<p>Hi ${name},</p><p>Click <a href="${verifyUrl}">here</a> to verify your email.</p>`
    });

    res.json({ message: 'Registered. Check email to verify.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Verify email
router.get('/verify-email', async (req, res) => {
  try {
    const { token, id } = req.query;
    const record = await Token.findOne({ userId: id, token });
    if (!record) return res.status(400).send('Invalid or expired token');
    await User.findByIdAndUpdate(id, { verified: true });
    await Token.deleteOne({ _id: record._id });
    return res.send('<h2>Email verified. You can now close this window and login.</h2>');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
    if (!user.verified) return res.status(403).json({ error: 'Email not verified' });
    const token = jwt.sign({ id: user._id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

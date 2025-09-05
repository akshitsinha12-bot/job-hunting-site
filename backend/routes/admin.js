const express = require('express');
const router = express.Router();
const { auth } = require('../utils/authMiddleware');
const User = require('../models/User');
const Job = require('../models/Job');
const Application = require('../models/Application');

router.get('/stats', auth('admin'), async (req, res) => {
  try {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments();
    const applications = await Application.countDocuments();
    res.json({ users, jobs, applications });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

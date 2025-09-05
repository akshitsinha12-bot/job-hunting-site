const express = require('express');
const router = express.Router();
const multer = require('multer');
const Job = require('../models/Job');
const Application = require('../models/Application');
const { auth } = require('../utils/authMiddleware');

const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, './uploads/resumes'); },
  filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname); }
});
const upload = multer({ storage });

// Create job (recruiter)
router.post('/', auth('recruiter'), async (req, res) => {
  try {
    const { title, company, description, location } = req.body;
    const job = await Job.create({ title, company, description, location, postedBy: req.user.id });
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// List jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Apply to job
router.post('/:id/apply', auth(), upload.single('resume'), async (req, res) => {
  try {
    const jobId = req.params.id;
    const coverLetter = req.body.coverLetter || '';
    const resumePath = req.file ? req.file.path : null;
    const application = await Application.create({ job: jobId, candidate: req.user.id, resumePath, coverLetter });
    res.json({ message: 'Applied', application });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

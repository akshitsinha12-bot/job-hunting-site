# Full Job Hunting Website - Production-grade scaffold

## What you received
- `backend/` - Node.js + Express backend with:
  - Email verification (nodemailer)
  - JWT authentication
  - Roles: candidate, recruiter, admin
  - Job posting and applying (file uploads saved to `uploads/resumes`)
  - Admin stats endpoint
- `frontend/site/` - Your landing page (if you uploaded one) plus:
  - `auth.html` - register & login pages
  - `dashboard.html` - job list, post job (recruiter), apply (candidate demo)
- `.env.example` - environment variables template
- `README.md` - this file
- `uploads/` - folder for uploaded resumes

## Quickstart (development - manually, step-by-step)
1. Install Node.js (v18+ recommended) and npm on your machine.
2. Open terminal and go to the backend folder:
   ```
   cd backend
   npm install
   ```
3. Create a copy of `.env.example` called `.env` in `backend/` and fill values:
   - `MONGO_URI` - use MongoDB Atlas (cloud) or local MongoDB.
   - `JWT_SECRET` - random long string.
   - SMTP vars (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS) - set up a mail provider (SendGrid, Mailgun, Gmail SMTP).
   Example:
   ```
   MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/jobdb?retryWrites=true&w=majority
   JWT_SECRET=supersecretkey
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your_sendgrid_api_key
   EMAIL_FROM="Job Hunter <no-reply@yourdomain.com>"
   ```

4. Create uploads directory if missing:
   ```
   mkdir -p uploads/resumes
   ```

5. Run the server:
   ```
   npm run dev
   ```
   Server will run at http://localhost:5000

6. Open the frontend site:
   - Either serve `frontend/site` using any static server.
   - Quick dev option: from project root run:
     ```
     npx http-server frontend/site -p 3000
     ```
     Then visit http://localhost:3000

## Production and Deployment
- Recommended hosting:
  - Backend: Render, Heroku, Railway, or a VPS. Use the provided `start` script.
  - Frontend: Netlify, Vercel, or serve from the same server (Express static) behind nginx.
- Use environment variables on hosting platform (MONGO_URI, JWT_SECRET, SMTP_*, EMAIL_FROM).
- Make sure uploads directory is persisted (or use cloud storage like AWS S3 for resumes).
- For email sending in production, use SendGrid/Mailgun to avoid Gmail SMTP restrictions.

## Important security notes
- Change `JWT_SECRET` to a long random value.
- Use HTTPS in production.
- Consider rate-limiting login/register endpoints.
- Store uploaded resumes in a secure cloud storage (S3) and validate file types.

## How to create an admin user
- Register a user with role `admin` using the register form (select 'Recruiter' then update in DB) OR
- Directly modify the user in MongoDB and set `role: 'admin'` and `verified: true`.

## Files added/modified
- backend/server.js
- backend/routes/*.js
- backend/models/*.js
- backend/utils/*
- frontend/site/* (auth.html, dashboard.html) + your landing page copied here (if uploaded)

## Next steps I can help with (choose any):
1. Convert frontend to React + Tailwind for a modern UI and preview.
2. Add email templates, password reset flow.
3. Replace local uploads with AWS S3 integration.
4. Prepare Dockerfile and docker-compose for deploy.
5. Walk you through deploying step-by-step to Render or Vercel with screenshots.

-- End of README

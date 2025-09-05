# MongoDB Atlas Setup Guide

Follow these steps to set up your free MongoDB database and connect it to your deployed site.

---

## 1. Create an Atlas Account
1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Sign up for a free account (use Google or email).

---

## 2. Create a Free Cluster
1. Once logged in, click **Build a Database**.
2. Choose the **FREE Shared Cluster**.
3. Select a cloud provider (AWS/GCP/Azure) and region closest to you.
4. Click **Create Cluster**.

---

## 3. Create a Database User
1. In Atlas dashboard → **Database Access** → Add New Database User.
2. Username: `jobuser`
3. Password: *(create a strong password and note it down)*
4. Set Role: **Atlas Admin** (for testing/demo).

---

## 4. Allow Connections
1. Go to **Network Access** → Add IP Address.
2. Choose **Allow access from anywhere** (0.0.0.0/0) for now.
   > ⚠️ In production, restrict to your server IP.

---

## 5. Get Connection String
1. Go to **Clusters** → click **Connect** → **Connect Your Application**.
2. Copy the connection string, it looks like:
   ```
   mongodb+srv://jobuser:<password>@cluster0.abcde.mongodb.net/jobdb?retryWrites=true&w=majority
   ```
3. Replace `<password>` with your actual password.

---

## 6. Update .env in Backend
Inside your `backend/.env` file, set:
```
MONGO_URI=mongodb+srv://jobuser:<password>@cluster0.abcde.mongodb.net/jobdb?retryWrites=true&w=majority
JWT_SECRET=some-random-string
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your-email-password
```

---

## 7. Deploy to Render
- When deploying, add the same environment variables in the Render dashboard under **Environment**.

---

✅ That’s it! Your site will now use MongoDB Atlas as the database.

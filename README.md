# Job Portal – Hirrd

A full-stack job portal web application where users can browse job listings, save jobs, and apply using their resumes. Companies can post jobs, and admin controls allow overall platform management. Built using **React.js**, **Node.js**, **Express**, **Supabase**, and **Clerk Authentication**, the platform is designed for scalability and real-world production readiness.

## 🚀 Features

### 👤 Authentication
- User sign-up and login using Clerk (OAuth-ready)
- Role-based access (admin, company, user)

### 🧑‍💼 Job Listings
- Browse jobs with filters: Location, Company, and Search Query
- Save jobs for future reference
- View detailed job descriptions

### 📄 Application Management
- Upload resume and apply for jobs
- Track applied jobs
- Prevent duplicate applications using row-level security (RLS)

### 🏢 Company Portal
- Companies can post, edit, and manage job listings
- View applicant list for each job

### 🔐 Admin Dashboard
- Manage users and companies
- Monitor platform-wide job statistics

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- ShadCN UI
- React Hook Form + Zod for validations
- Clerk for Auth

### Backend & Database
- Node.js & Express.js (for APIs)
- Supabase (PostgreSQL + Storage + Auth integration)
- RLS (Row-Level Security) Policies

### Tools & Deployment
- Vercel for frontend deployment
- Supabase Hosting for backend & DB
- GitHub for version control

## 🌐 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Shashank2985/Job_Portal_Hirrd.git
   cd Job_Portal_Hirrd

2. Install dependencies:
   ```bash
   npm install
   
3. Create a .env file with:
   ```bash
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   CLERK_PUBLISHABLE_KEY=your_clerk_key

4. Run the project:
   ```bash
    npm run dev

   

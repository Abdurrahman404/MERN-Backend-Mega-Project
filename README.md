# Project Camp Backend

## 📌 Overview
Project Camp Backend is a **RESTful API service** designed to support collaborative project management.  
It enables teams to organize projects, manage tasks with subtasks, maintain project notes, and handle user authentication with **role-based access control**.

## 👥 Target Users
- **Admin**: Create/manage projects, assign roles, and oversee activities.
- **Project Admin**: Manage tasks and content within assigned projects.
- **Team Member**: View/update tasks and access project details.

## 🚀 Core Features
- **Authentication & Authorization**
  - JWT authentication with refresh tokens
  - Role-based access (Admin, Project Admin, Member)
  - Email verification, password reset & change
- **Project Management**
  - Create, update, delete projects
  - Manage project members with role assignment
- **Task & Subtask Management**
  - Create/update/delete tasks and subtasks
  - Assign tasks to members, track status (Todo, In Progress, Done)
  - File attachments support
- **Project Notes**
  - Add, view, update, and delete project notes (Admin only)
- **System Health**
  - API health check endpoint

## 📂 API Endpoints
- **Auth Routes:** `/api/v1/auth/`
- **Project Routes:** `/api/v1/projects/`
- **Task Routes:** `/api/v1/tasks/`
- **Note Routes:** `/api/v1/notes/`
- **Health Check:** `/api/v1/healthcheck/`

## 🔒 Security
- JWT-based authentication with refresh tokens
- Role-based middleware
- Input validation on all endpoints
- Email verification & secure password reset
- File upload security with Multer

## 📑 Tech Stack
- **Node.js** + **Express.js**
- **MongoDB**
- **JWT** for authentication
- **Multer** for file uploads

## ✅ Success Criteria
- Secure user auth & role-based authorization
- Complete project lifecycle management
- Hierarchical task & subtask system
- File attachments for collaboration
- Comprehensive API documentation

---

### ⚡ Getting Started (Setup)
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/project-camp-backend.git

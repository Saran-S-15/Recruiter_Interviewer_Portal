# Recruiter-Interviewer Portal

## Overview
The **Recruiter-Interviewer Portal** is a web-based platform built using **React** that streamlines the interview process. Recruiters can assign candidates to interviewers, and interviewers can evaluate candidates and provide feedback, which is reflected back on the recruiter’s dashboard.

## Features
- **Recruiter Login Page**: Recruiters can log in and manage candidate assignments.
- **Interviewer Page**: Displays assigned candidates, allowing interviewers to submit feedback.
- **Candidate Evaluation**: Interviewers rate candidates on various skills and submit feedback.
- **State Management with Zustand**: Efficiently manages application-wide state.
- **Form Validation with Formik**: Ensures structured data input with validation.
- **UI Components from Material-UI**: Provides a responsive and visually appealing interface.
- **Styling with Tailwind CSS**: Enables rapid and responsive UI development.

## Tech Stack
- **React** (Frontend framework)
- **Zustand** (State management)
- **Formik** (Form handling & validation)
- **Material-UI** (UI components)
- **Tailwind CSS** (Styling framework)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/recruiter-interviewer-portal.git
   cd recruiter-interviewer-portal
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Functionality Breakdown
### 1. **Recruiter Login Page**
- Recruiters log in to assign candidates to interviewers.
- Displays a list of candidates and their assigned interviewers.

### 2. **Interviewer Page**
- Shows a list of assigned candidates.
- Allows interviewers to view candidate details and submit feedback.

### 3. **Candidate Evaluation**
- Interviewers rate candidates based on different criteria using **Material-UI Rating**.
- Comments can be added for better evaluation.
- The feedback updates the recruiter’s view.

### 4. **State Management with Zustand**
- Zustand efficiently manages **candidate assignments** and **feedback submissions**.
- Ensures global state consistency without unnecessary re-renders.

### 5. **Form Validation with Formik**
- Used for validating feedback forms.
- Ensures rating fields are filled and comments are provided.

### 6. **Styling with Material-UI & Tailwind CSS**
- **Material-UI** components enhance UI/UX.
- **Tailwind CSS** ensures a fully responsive layout.

## Future Enhancements
- **Authentication System**: Implement recruiter/interviewer login authentication.
- **Backend Integration**: Connect with an API for persistent data storage.
- **Automated Notifications**: Email alerts for candidate assignments and feedback.

---
Feel free to improve and extend the functionality of the portal!


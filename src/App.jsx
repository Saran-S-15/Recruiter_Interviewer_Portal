import React from 'react'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecruiterPage from './pages/RecruiterPage'
import InterviewerPage from './pages/InterviewerPage'
import { useAuthStore } from './store/useAuthStore'
import TopBar from './components/TopBar'
import AssignInterviewPage from './pages/AssignInterviewPage'
import EvaluateCandidate from './components/interview/EvaluateCandidate'


const App = () => {
  const { AuthUser } = useAuthStore();
  return (
    <>
      <BrowserRouter>
      <TopBar/>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/recruiter' element={<RecruiterPage />} />
          <Route path='/interviewer' element={<InterviewerPage />} />
          <Route path='/candidate/:id' element={<AssignInterviewPage/>}/>
          <Route path='/evaluateCandidate/:id' element={<EvaluateCandidate/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
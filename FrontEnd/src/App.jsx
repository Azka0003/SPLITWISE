import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup"
import Terms from "./pages/terms";
import Dashboard from "./pages/Dashboard";
import AllExpenses from "./pages/AllExpenses";
import RecentActivity from "./pages/RecentActivity";
import Groups from "./pages/groupsNew";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<AllExpenses/>} />
          <Route path="/activity" element={<RecentActivity/>} />
          <Route path="/groups/new" element={<Groups/>} />
        </Routes>
      </BrowserRouter>
    
  )
}
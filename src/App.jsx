import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Employee from "./components/Employee/Employee";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} >
          <Route path="Employee" element={<Employee />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
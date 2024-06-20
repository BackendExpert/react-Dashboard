import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Employee from "./components/Employee/Employee";
import DashHome from "./components/Home/DashHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard /> }> 
           <Route path='Home' element={<DashHome /> } /> 
           <Route path='Employee' element={<Employee /> } /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
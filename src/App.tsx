import React, { useState } from "react";
import "./App.css";
import Employee from "./Components/Employee";
import Jobs from "./Components/Jobs";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Home from "./Components/home/Home";
import Viewjob from "./Components/Viewjob";

function App() {
  const [jobs, setJobs] = useState([]);
  const newJob = (job: any) => {
    let arr: any = [...jobs];
    arr.push(job);
    setJobs(arr);
    console.log(arr);
  };
  console.log(jobs);
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/jobs" element={<Jobs newjob={newJob} />} />
          <Route
            path="/viewjob"
            element={<Viewjob jobs={jobs} setJobs={setJobs} />}
          />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

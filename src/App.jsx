import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Directory from "./pages/Directory";
import Inquiries from "./pages/Inquiries";
import AddMentor from "./pages/AddMentor";
import EditMentor from "./pages/EditMentor";
import Layout from "./components/Layout"

function App(){

    const [mentors, setMentors] = useState([]);
    const [inquiries, setInquiries] = useState([]); 
    const [loading, setLoading] = useState(true);

    const API_URL = "http://localhost:3000";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [mentorsRes, inquiriesRes] = await Promise.all([
                    fetch(`${API_URL}/mentors`),
                    fetch(`${API_URL}/inquiries`)
                ]);

                const mentorsData = await mentorsRes.json();
                const inquiriesData = await inquiriesRes.json();

                setMentors(mentorsData);
                setInquiries(inquiriesData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);     


    const handleAddMentor = async(newMentor) => {
        const response = await fetch(`${API_URL}/mentors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMentor)
    });
    const data = await response.json();
    setMentors([...mentors, data]);
  };

  const handleEditMentor = async (id, updatedMentor) => {
    const response = await fetch(`${API_URL}/mentors/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMentor)
    });
    const data = await response.json();
    setMentors(mentors.map(m => m.id === id ? data : m));
  };

  const handleDeleteMentor = async (id) => {
    await fetch(`${API_URL}/mentors/${id}`, { method: "DELETE" });
    setMentors(mentors.filter(m => m.id !== id));
  };

  const handleResolveInquiry = async (id) => {
    await fetch(`${API_URL}/inquiries/${id}`, { method: "DELETE" });
    setInquiries(inquiries.filter(i => i.id !== id));
  };

  if (loading) {
    return <div className="loading">Loading data...</div>;
  }



    return (
        
         <div className="App">
            <Toaster position="top-right" />

         <Layout>
           <Routes>
            
            <Route path="/" element={<Dashboard mentors={mentors} inquiries={inquiries} />} />
            <Route path="/directory" element={<Directory mentors={mentors} onDelete={handleDeleteMentor} />} />
            <Route path="/add" element={<AddMentor onAdd={handleAddMentor} />} />
            <Route path="/edit/:id" element={<EditMentor mentors={mentors} onUpdate={handleEditMentor} />} />
            <Route path="/inquiries" element={<Inquiries inquiries={inquiries} onResolve={handleResolveInquiry} />} />
            <Route path="/about" element={<About />} />
           </Routes>
         </Layout>
            
         </div>
       


)};

export default App;
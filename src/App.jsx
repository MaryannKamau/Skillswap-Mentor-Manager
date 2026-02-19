import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Directory from "./pages/Directory";
import Inquiries from "./pages/Inquiries";
import AddMentor from "./pages/AddMentor";
import EditMentor from "./pages/EditMentor";
import Layout from "./components/Layout"

function App(){

    return (
        <div className="App">

        <BrowserRouter>
            <Layout>
               <Routes>
                    <Route path="/" element={<Dashboard />} >
                        
                        <Route path="/directory" element={<Directory />} />
                        <Route path="/add" element={<AddMentor />} />
                        <Route path="/inquiries" element={<Inquiries />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/edit/:id" element={<EditMentor />} />
                    </Route>
               </Routes>
            </Layout>
        </BrowserRouter>

            
        </div>


)};

export default App;
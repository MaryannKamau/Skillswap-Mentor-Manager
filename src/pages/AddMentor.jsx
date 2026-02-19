import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import FormField from "../components/FormField";

function AddMentor({ onAdd }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        status: "",
        hourly_rate: "", 
        skills: "",
        Phone: "",
        email: "",
        bio: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        const newMentor = { 
            ...formData, 
            id: Date.now().toString(),
            image: "https://i.pravatar.cc" + Date.now()
        };

        onAdd(newMentor); 
        toast.success("New mentor onboarded!");
        navigate("/directory"); 
    };


    return(
        <form className="add-mentor-form" onSubmit={handleSubmit}>
            <h1>Add New Mentor</h1>
            <FormField 
            label="Name" 
            name="name" 
            type="text" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter mentor's name"
            required
            />
            
            <FormField 
            label="Status" 
            name="status" 
            type="text"
            value={formData.status}
            onChange={handleChange} 
            placeholder="Enter mentor's status (e.g. online/offline)" />
            
            <FormField 
            label="Hourly Rate" 
            name="hourly_rate" 
            type="number" 
            value={formData.hourly_rate}
            onChange={handleChange}
            placeholder="Enter mentor's hourly rate" />
            
            <FormField 
            label="skills" 
            name="skills" 
            type="text" 
            value={formData.skills}
            onChange={handleChange}
            placeholder="Enter mentor's skills" />
            
            <FormField 
            label="Phone" 
            name="Phone" 
            type="tel" 
            value={formData.Phone}
            onChange={handleChange}
            placeholder="Enter mentor's phone number" />
            
            <FormField 
            label="Email" 
            name="email" 
            type="email"
            value={formData.email}
            onChange={handleChange} 
            placeholder="Enter mentor's email address" />
            
            <div className="form-group">
                <label>Bio</label>
                <textarea 
                 name="bio" 
                value={formData.bio}
                onChange={handleChange}
                placeholder="Write a short bio for the mentor" 
                ></textarea>
            
            </div>

            <button type="submit" className="btn-submit">Add Mentor</button>
        </form>

    );
};
export default AddMentor;
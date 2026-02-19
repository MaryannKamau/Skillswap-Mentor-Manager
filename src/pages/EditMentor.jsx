import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import toast from "react-hot-toast";

const EditMentor = ({ mentors, onUpdate }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    hourly_rate: "",
    Phone: "",
    status: "",
    bio: "",
    email: ""
  });

  
  useEffect(() => {
    const mentorToEdit = mentors.find((m) => m.id.toString() === id);
    if (mentorToEdit) {
      setFormData(mentorToEdit);
    }
  }, [id, mentors]);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, formData); 
    toast.success(`${formData.name}'s profile updated!`);
    navigate("/directory"); 
  };

  return (
    <section className="edit-mentor-page">
      <header className="page-header">
        <h1>Edit Expert Profile</h1>
        <p>Updating records for: <strong>{formData.name}</strong></p>
      </header>

      <form onSubmit={handleSubmit} className="mentor-form">
        <FormField label="Full Name" 
          name="name" 
          type="text" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          
        />

        <FormField 
          label="Skills" 
          name="skills" 
          type="text" 
          value={formData.skills} 
          onChange={handleChange} 
        />

        <FormField 
          label="Hourly Rate ($)" 
          name="hourly_rate" 
          type="number" 
          value={formData.hourly_rate} 
          onChange={handleChange} 
        />

        <FormField 
          label="Current Status (online/offline)" 
          name="status" 
          type="text" 
          value={formData.status} 
          onChange={handleChange} 
        />

        <FormField 
          label="Phone Number" 
          name="Phone" 
          type="tel" 
          value={formData.Phone} 
          onChange={handleChange} 
        />

        <FormField 
           label="Email Address" 
           name="email" 
           type="email" 
           value={formData.email} 
           onChange={handleChange} 
        />

        <div className="form-group">
          
          <textarea 
            name="bio" 
            value={formData.bio} 
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">Save Changes</button>
          <button type="button" className="cancel-btn" onClick={() => navigate("/directory")}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditMentor;

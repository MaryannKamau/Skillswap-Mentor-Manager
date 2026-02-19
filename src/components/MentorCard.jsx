import { useEffect,useState} from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

function MentorCard({mentor,onDelete}){

    const handleDelete=() => {
        Swal.fire({
             title: "Are you sure?",
             text: "You won't be able to revert this!",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Yes, delete it!"
        }).then((result) => {
         if (result.isConfirmed) {
            onDelete(mentor.id);
            Swal.fire("Deleted!", "The mentor has been deleted.", "success");
         }
    });
  }

    
    return(
        <div>

        <div className="mentor-card">
            <img src={mentor.image} alt={mentor.name}>Profile</img>
            <span className={`status-dot ${mentor.status === 'online' ? "active-now" : "away"}`}> {mentor.status}</span>
        </div>

        <div className="card-body">
            <h2>Mentor's Details</h2>
            <p>{mentor.name}</p>
            <p>{mentor.email}</p>
            <p>{mentor.bio}</p>
            <p>{mentor.skills}</p>
            <p>{mentor.hourly_rate}</p>
            <p>{mentor.Phone}</p>

        </div>

        <Link to={`/edit/${mentor.id}`} className="btn-edit">Edit</Link>
        <button onClick={handleDelete} className="btn-delete">Delete</button>
    </div>
    )
};

export default MentorCard;


      
    
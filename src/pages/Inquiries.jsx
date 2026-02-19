import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Inquiries = ({ inquiries, onResolve }) => {

  const handleResolve = (id, sender_name) => {
    Swal.fire({
      title: "Resolve Inquiry?",
      text: `Have you responded to ${sender_name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Resolve it"
    }).then((result) => {
      if (result.isConfirmed) {
        onResolve(id); 
        toast.success("Inquiry marked as resolved!");
      }
    });
  };

  return (
    <section className="inquiries-page">
      <h1>Student Messages</h1>
      
      {inquiries.length === 0 ? (
        <p>No pending inquiries. Great job!</p>
      ) : (
        <div className="inquiry-list">
          {inquiries.map((iq) => (
            <div key={iq.id} className="inquiry-card">
              <div className="inquiry-header">
                <strong>From: {iq.sender_name}</strong>
                <span>Date: {iq.date}</span>
              </div>
              <p className="inquiry-email">{iq.sender_email}</p>
              <p className="inquiry-text">"{iq.message}"</p>
              <button 
                onClick={() => handleResolve(iq.id, iq.sender_name)}
                className="btn-resolve"
              >
                Mark as Resolved
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Inquiries;
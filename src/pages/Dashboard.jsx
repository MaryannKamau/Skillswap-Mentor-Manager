import { Link } from 'react-router-dom';

function Dashboard({ mentors, inquiries }) {

    const mentorCount = mentors.length;
    const onlineMentorCount = mentors.filter(m => m.status === 'online').length;

    const totalRate = mentors.reduce((acc, curr) => acc + Number(curr.hourly_rate || 0), 0);
    const avgRate = mentorCount > 0 ? (totalRate / mentorCount).toFixed(2) : 0;
  
    const totalInquiries = inquiries.length;
    return (
    
    <section className="dashboard-container">
      <header className="dashboard-header">
        <h1>Platform Overview</h1>
        <p>Current statistics for the SkillSwap network.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Experts</h3>
          <p className="stat-number">{mentorCount}</p>
        </div>

        <div className="stat-card">
          <h3>Mentors Online</h3>
          <p className="stat-number">{onlineMentorCount}</p>
        </div>

        <div className="stat-card">
          <h3>Avg. Hourly Rate</h3>
          <p className="stat-number">${avgRate}</p>
        </div>

        <div className="stat-card">
          <h3>Pending Inquiries</h3>
          <p className="stat-number">{totalInquiries}</p>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <Link to="/add" className="action-link">Add New Mentor</Link>
        <Link to="/inquiries" className="action-link">View All Messages</Link>
      </div>
    </section>
  );
};

export default Dashboard;

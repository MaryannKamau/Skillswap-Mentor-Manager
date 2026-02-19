import MentorCard from "../components/MentorCard";

function Directory({ mentors, onDelete }) {

    return(

    <section className="directory-container">
        <header className="directory-header">
            <h1>Mentor Directory</h1>
            <p>Browse and connect with our expert mentors.</p>
        </header>

        <div className="mentor-grid">
            {mentors.length === 0 ? (
                <p>No mentors available at the moment. Please check back later.</p>
            ) : (
            mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} onDelete={onDelete} />
            )))}
        </div>
    </section>
    )

};
export default Directory;
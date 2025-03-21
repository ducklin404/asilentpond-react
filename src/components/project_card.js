export default function ProjectCard({ imageUrl, imageAlt, projectTitle, openDescription }) {
    return (
        <div className="project-card" onClick={openDescription}>
            <img className="project-image" alt={imageAlt} src={imageUrl} />
            <div className="project-title">
                {projectTitle}
            </div>
        </div>
    );
}

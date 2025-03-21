import ReactMarkdown from "react-markdown";

export default function ProjectDescription({
  projectTitle,
  projectDescription,
  videoUrl,
  closeDescription,
}) {
  return (
    <div id="project-description">
      <button onClick={closeDescription}>Back</button>

      <h2>{projectTitle}</h2>

      {videoUrl && (
        <>
          <p>If you prefer the video:</p>

          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title={projectTitle}
            frameborder="0"
            allowFullScreen
          ></iframe>
        </>
      )}

      <div className="markdown-content">
        <ReactMarkdown>{projectDescription}</ReactMarkdown>
      </div>
    </div>
  );
}

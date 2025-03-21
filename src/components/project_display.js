import { useState, useEffect } from 'react';
import ProjectCard from './project_card';
import ProjectDescription from './project_description';

export default function ProjectDisplay({
  id,
  imageUrl,
  imageAlt,
  projectTitle,
  videoUrl,
}) {
  const [isSelected, setSelected] = useState(false);
  const [descriptionContent, setDescriptionContent] = useState("");

  useEffect(() => {
    fetch(`/content/${id}.md`)
      .then((res) => res.text())
      .then((text) => setDescriptionContent(text));
  }, [id]);

  function open_description() {
    setSelected(true);
    document.body.classList.add('no-scroll');
  }

  function close_description() {
    setSelected(false);
    document.body.classList.remove('no-scroll');
  }

  return (
    <>
      <ProjectCard
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        projectTitle={projectTitle}
        openDescription={open_description}
      />

      {isSelected && (
        <ProjectDescription
          projectTitle={projectTitle}
          projectDescription={descriptionContent}
          videoUrl={videoUrl}
          closeDescription={close_description}
        />
      )}
    </>
  );
}

import { useTranslation } from "react-i18next";
import data from "../../assets/data.json";

const ProjectItem = () => {
  const { t } = useTranslation();
  return (
    <>
      {data?.projects?.map((project, index) => (
        <div className="project-item" key={index}>
          <div className="project-item-image">
            <img className="img" src={project.image} alt="project" />
          </div>
          <div className="project-item-content">
            <h4>{project.name}</h4>
            <div className="programming-languages">
              {project.languages.map((language) => (
                <div className="programming-language">{language}</div>
              ))}
            </div>
            <p>{t(project.description)}</p>
          </div>
          <div className="project-links">
            <div>
              <a href={project.github} target="_blank" className="github-link">
                <i className="fa-brands fa-github"></i>
                {t("view_in_github")}
              </a>
            </div>
            <div>
              {project.link && (
                <a href={project.link} target="_blank" className="github-link">
                  {t("view_website")}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;

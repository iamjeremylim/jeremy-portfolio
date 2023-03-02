const FRONTEND_SKILLS = [
  ["HTML", "CSS", "JavaScript"],
  ["ReactJS", "NextJS"],
];
const BACKEND_SKILLS = [
  ["NodeJS", "Golang", "PostgreSQL"],
  ["Docker", "Kubernetes"],
];

export default function Skills() {
  return (
    <div className="skills__content grid" data-content id="#skills">
      <div className="skills__area">
        <h3 className="skills__title">Frontend</h3>
        <div className="skills__box">
          <div className="skills__group">
            {FRONTEND_SKILLS[0].map((skill, index) => (
              <div key={index} className="skills__data">
                <i className="ri-checkbox-circle-line"></i>
                <div>
                  <h3 className="skills__name">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__group">
            {FRONTEND_SKILLS[1].map((skill, index) => (
              <div key={index} className="skills__data">
                <i className="ri-checkbox-circle-line"></i>
                <div>
                  <h3 className="skills__name">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="skills__area">
        <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
          <div className="skills__group">
            {BACKEND_SKILLS[0].map((skill, index) => (
              <div key={index} className="skills__data">
                <i className="ri-checkbox-circle-line"></i>
                <div>
                  <h3 className="skills__name">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__group">
            {BACKEND_SKILLS[1].map((skill, index) => (
              <div key={index} className="skills__data">
                <i className="ri-checkbox-circle-line"></i>
                <div>
                  <h3 className="skills__name">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

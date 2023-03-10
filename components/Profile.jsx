import { useContext } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { ThemeContext } from "./ThemeContext";

export default function Profile() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <header className="profile container">
      <i
        className={`${darkMode ? "ri-sun-line" : "ri-moon-line"} change-theme`}
        onClick={handleClick}
      ></i>
      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">
              <img src="/images/profile.png" alt="profile picture" />
            </div>
          </div>
          <h2 className="profile__name">Jeremy Lim</h2>
          <h3 className="profile__profession">Software Engineer</h3>
          <ul className="profile__social">
            <Link
              href="https://www.linkedin.com/in/iamjeremylim/"
              className="profile__social-link"
              target="__blank"
            >
              <i className="ri-linkedin-box-line"></i>
            </Link>
            <Link
              href="https://www.github.com/iamjeremylim"
              className="profile__social-link"
              target="__blank"
            >
              <i className="ri-github-line"></i>
            </Link>
          </ul>
        </div>

        <div className="profile__buttons">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1H0d2Fh-cZhPREBjB3XN61i6xCUiTyaRD/view?usp=sharing"
            className="button"
          >
            Download CV
            <i className="ri-download-line"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

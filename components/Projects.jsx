import Link from "next/link";

export default function Projects() {
  return (
    <div className="projects__content grid">
      <article className="projects__card">
        <img
          src="/images/cat.png"
          alt="pet adoption site"
          className="projects__img"
        />
        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">Web</span>
            <h3 className="projects__title">Pet Adoption</h3>
            <Link
              href="https://adopt-me-pied.vercel.app/"
              className="projects__button button button__small"
              target="_blank"
            >
              <i className="ri-link"></i>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

import Link from "next/link";

export default function Projects() {
  return (
    <div className="projects__content grid" data-content id="#projects">
      <article className="projects__card">
        <img
          src="/images/project1.jpg"
          alt="project 1"
          className="projects__img"
        />
        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">Web</span>
            <h3 className="projects__title">Pet Adoption</h3>
            <Link href="" className="projects__button button button__small">
              <i className="ri-link"></i>
            </Link>
          </div>
        </div>
      </article>
      <article className="projects__card">
        <img
          src="/images/project1.jpg"
          alt="project 2"
          className="projects__img"
        />
        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">Web</span>
            <h3 className="projects__title">Marketplace</h3>
            <Link href="" className="projects__button button button__small">
              <i className="ri-link"></i>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

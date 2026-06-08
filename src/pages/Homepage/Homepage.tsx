import { Button } from '../../components/Button/Button';
import { Logo } from '../../components/Logo/Logo';
import styles from './Homepage.module.css';

import imgHeroBg               from './assets/hero-bg.svg';
import imgSubject1              from './assets/work-ai-companion.png';
import imgSubject3              from './assets/work-shopping-assistant.png';
import imgIpad                  from './assets/work-rag-system.png';
import imgSc1                   from './assets/work-rag-overlay.png';
import imgPolygon7              from './assets/polygon-studio.svg';
import imgPolygon5              from './assets/polygon-ai.svg';

function WorkBadge() {
  return <span className={styles.workBadge}>WORK</span>;
}

const works = [
  {
    bg: '#d6b4f8',
    img: imgSubject1,
    alt: 'Recommendation AI Companion app on phone',
    title: 'Recommendation AI Companion',
  },
  {
    bg: '#bad498',
    img: imgSubject3,
    alt: 'Shopping AI Assistant on tablet',
    title: 'Shopping AI Assistant',
  },
  {
    bg: '#ffdf95',
    img: imgIpad,
    alt: 'RAG System on iPad',
    title: 'RAG System',
    overlay: imgSc1,
  },
];

const pillars = [
  {
    title: 'Aligned',
    body: "We don’t just consult; we integrate. We become a seamless extension of your team to ensure our creative goals perfectly mirror your business needs.",
  },
  {
    title: 'Versatile',
    body: 'Success demands speed and adaptability. Leveraging deep cross-industry expertise, we quickly pivot to translate your vision into a high-impact reality.',
  },
  {
    title: 'Dedicated',
    body: 'We are relentless until your users are satisfied. From initial launch to continuous updates, we stay committed to evolving your product as market needs shift.',
  },
];

const aiFeatures = [
  { title: 'Expert',          body: 'Deep generative AI with RAG product design experience.' },
  { title: 'Human centered',  body: 'Designing human in the center of the product.' },
  { title: 'Relevancy',       body: 'Utilizing AI-tech in the optimum way to help users.' },
];

export function Homepage() {
  return (
    <div className={styles.page}>

      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <nav className={styles.navbar}>
        <Logo color="color" logoStyle="logo+text" theme="light" />
        <div className={styles.navLinks}>
          <a href="#what-we-do" className={styles.navLink}>What we do</a>
          <a href="#our-works" className={styles.navLink}>Our works</a>
          <Button usage="brand" shape="soft">Contact us</Button>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <img src={imgHeroBg} alt="" className={styles.heroBg} />
        <h1 className={styles.heroHeading}>
          <span>We</span>
          <span>Empower</span>
          <span>Creative Minds</span>
        </h1>
      </section>

      {/* ── Studio ──────────────────────────────────────────────────────── */}
      <section className={styles.studio}>
        <div className={styles.studioPolygon} aria-hidden="true">
          <img src={imgPolygon7} alt="" />
        </div>
        <div className={styles.studioContent}>
          <h2 className={styles.studioHeading}>
            <span>A Product Design Studio</span>
            <span>for Start-Ups</span>
          </h2>
          <div className={styles.studioPillars}>
            {pillars.map(({ title, body }) => (
              <div key={title} className={styles.pillar}>
                <p className={styles.pillarTitle}>{title}</p>
                <hr className={styles.pillarDivider} />
                <p className={styles.pillarBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Works ───────────────────────────────────────────────────────── */}
      <section className={styles.works} id="our-works">
        <div className={styles.worksGrid}>
          {works.map(({ bg, img, alt, title, overlay }) => (
            <article key={title} className={styles.workCard}>
              <div className={styles.workCardMedia} style={{ backgroundColor: bg }}>
                <img src={img} alt={alt} className={styles.workCardImg} />
                {overlay && (
                  <img src={overlay} alt="" className={styles.workCardOverlay} />
                )}
              </div>
              <WorkBadge />
              <h3 className={styles.workCardTitle}>{title}</h3>
              <p className={styles.workCardBody}>
                We are more than a design agency. We are problem solvers focused on addressing your unique challenges to strengthen customer relationships.
              </p>
            </article>
          ))}
        </div>
        <div className={styles.worksArrow}>
          <Button usage="primary" shape="round" size="l">→</Button>
        </div>
      </section>

      {/* ── AI Native ───────────────────────────────────────────────────── */}
      <section className={styles.aiNative} id="what-we-do">
        <div className={styles.aiPolygonLeft}  aria-hidden="true"><img src={imgPolygon5} alt="" /></div>
        <div className={styles.aiPolygonRight} aria-hidden="true"><img src={imgPolygon5} alt="" /></div>

        <div className={styles.aiLeft}>
          <p className={styles.aiHeading}>AI Native</p>
          <p className={styles.aiBody}>
            Specialized forged working with top AI companies, we bring technical mastery to your product, ensuring sophisticated tech feels intuitive.
          </p>
        </div>

        <div className={styles.aiRight}>
          {aiFeatures.map(({ title, body }) => (
            <div key={title} className={styles.aiFeature}>
              <p className={styles.aiFeatureTitle}>{title}</p>
              <p className={styles.aiFeatureBody}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About / Contact ─────────────────────────────────────────────── */}
      <section className={styles.about}>
        <div className={styles.aboutIntro}>
          <h2 className={styles.aboutHeading}>
            <span>A collective creative,</span>
            <span>where visions take shape</span>
          </h2>
          <p className={styles.aboutBody}>
            We are more than a design agency. We are problem solvers focused on addressing your unique challenges to strengthen customer relationships.
            <br /><br />
            Our deep expertise in UX/UI enables us to turn insights into outcomes that exceed customer expectations.
          </p>
        </div>

        <div className={styles.aboutContact}>
          <div className={styles.letsTalk}>
            <span className={styles.letsTalkHeading}>Let's talk</span>
            <Button usage="primary" shape="round" size="l">→</Button>
          </div>
          <nav className={styles.footerNav}>
            <a href="#what-we-do">What we do</a>
            <a href="#our-works">Our works</a>
            <a href="#contact">Contact us</a>
          </nav>
        </div>
      </section>

    </div>
  );
}

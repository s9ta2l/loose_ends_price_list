import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { exhibition, artworks } from './content.js';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function Contact() {
  const { text, email, phone, phoneHref } = exhibition.contact;
  return (
    <address className="contact">
      <p>{text}</p>
      <div className="contact-links">
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:${phoneHref}`}>{phone}</a>
      </div>
    </address>
  );
}

function Artwork({ work, index }) {
  return (
    <article className="artwork" aria-labelledby={`${work.id}-title`}>
      <div className="artwork-image">
        <img src={asset(work.image)} alt={work.alt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
      </div>
      <div className="artwork-details">
        <h2 id={`${work.id}-title`}>{work.title}</h2>
        {work.subtitle && <p className="artwork-subtitle">{work.subtitle}</p>}
        <dl className="artwork-meta">
          <div><dt>Medium</dt><dd>{work.medium}</dd></div>
          <div><dt>Dimensions</dt><dd>{work.dimensions}</dd></div>
          <div><dt>Year</dt><dd>{work.year}</dd></div>
          {work.price && <div className="artwork-price"><dt>Price</dt><dd>{work.price}</dd></div>}
        </dl>
      </div>
    </article>
  );
}

function LanguageSection({ label, lang, paragraphs }) {
  return (
    <section className="language-section" lang={lang} aria-label={lang === 'el' ? 'Ελληνικά' : 'English'}>
      <span className="language-label" aria-hidden="true">{label} —</span>
      <div className="language-copy">
        {paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function InfoPanel({ open, panelRef }) {
  return (
    <div id="exhibition-info" className={`info-overlay${open ? ' is-open' : ''}`} ref={panelRef} inert={!open} aria-hidden={!open}>
      <div className="content-width info-content">
        <h1 id="info-title">{exhibition.title}</h1>
        <p className="info-dates">{exhibition.dates}</p>
        <div className="bilingual-copy">
          <LanguageSection label="GR" lang="el" paragraphs={exhibition.descriptionGR} />
          <LanguageSection label="EN" lang="en" paragraphs={exhibition.descriptionEN} />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const shellRef = useRef(null);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const returnToTop = useRef(false);
  const previouslyOpen = useRef(false);

  // Prevent background scroll without moving the page; the overlay scrolls independently.
  useLayoutEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const priorOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    if (panelRef.current) panelRef.current.scrollTop = 0;
    return () => { root.style.overflow = priorOverflow; };
  }, [open]);

  useLayoutEffect(() => {
    if (open || previouslyOpen.current) toggleRef.current?.focus({ preventScroll: true });
    if (!open && returnToTop.current) {
      returnToTop.current = false;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    previouslyOpen.current = open;
  }, [open]);

  // Escape closes the overlay, and Tab stays inside its controls while open.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key !== 'Tab') return;
      const focusables = [...shellRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')];
      const first = focusables[0];
      const last = focusables.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && (document.activeElement === first || !shellRef.current.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !shellRef.current.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function goToTop(event) {
    event.preventDefault();
    if (open) {
      returnToTop.current = true;
      setOpen(false);
    } else {
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  }

  return (
    <>
      <div ref={shellRef} role={open ? 'dialog' : undefined} aria-modal={open ? true : undefined} aria-labelledby={open ? 'info-title' : undefined}>
        <header className={`site-header${open ? ' info-active' : ''}`}>
          <nav className="nav-inner" aria-label="Main navigation">
            <a className="brand" href="#top" onClick={goToTop} aria-label={`${exhibition.title} — return to top`}>
              <img src={asset(exhibition.logo)} alt={exhibition.title} />
            </a>
            <button type="button" className={`info-toggle${open ? ' is-open' : ''}`} aria-label={open ? 'Close exhibition information' : 'Open exhibition information'} aria-expanded={open} aria-controls="exhibition-info" onClick={() => setOpen(v => !v)} ref={toggleRef}>
              <span className="toggle-icon" aria-hidden="true"><span className="icon-ring" /><span className="icon-dot" /><span className="icon-stem" /><span className="icon-cross" /></span>
            </button>
          </nav>
        </header>
        <InfoPanel open={open} panelRef={panelRef} />
      </div>
      <main id="top" className="content-width gallery" inert={open}>
        <div className="gallery-heading"><h1>{exhibition.title}</h1><p>List of works</p></div>
        <div className="artwork-list">
          {artworks.map((work, index) => <Artwork key={work.id} work={work} index={index} />)}
        </div>
        <Contact />
      </main>
      <footer className="site-footer content-width" inert={open}>
        <img src={asset(exhibition.venueLogo)} alt={exhibition.venue} />
        <p>© {exhibition.copyrightYear} {exhibition.venue}</p>
      </footer>
    </>
  );
}

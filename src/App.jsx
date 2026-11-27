import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { exhibition, artworks } from './content.js';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function ExhibitionHeading({ titleId }) {
  return (
    <div className="exhibition-heading">
      <h1 id={titleId}>{exhibition.title}</h1>
      <p className="exhibition-subtitle">{exhibition.artist.name}</p>
      <p className="exhibition-dates">{exhibition.dates} · {exhibition.location}</p>
    </div>
  );
}

function Contact() {
  const { name, email, phone, phoneHref, instagram } = exhibition.artist;
  return (
    <section className="contact" aria-label="Get in touch">
      <h2>Get in touch</h2>
      <address>
        <div className="contact-identity">
          <p className="contact-name">{name}</p>
          <a href={instagram.url} target="_blank" rel="noopener noreferrer">{instagram.handle}</a>
        </div>
        <div className="contact-links">
          <a href={`mailto:${email}`}>{email}</a>
          {phone && <a href={`tel:${phoneHref}`}>{phone}</a>}
        </div>
      </address>
    </section>
  );
}

function SiteFooter({ inert = false }) {
  const { gallery, copyrightYear } = exhibition;
  const [mailbox, domain] = gallery.email.split('@');
  return (
    <footer className="site-footer content-width" inert={inert}>
      <p className="footer-copyright">© {copyrightYear} {gallery.name}</p>
      <img src={asset(gallery.logo)} alt={gallery.name} width="567" height="567" loading="lazy" />
      <address className="footer-contact">
        <a href={`mailto:${gallery.email}`}>{mailbox}<wbr />@{domain}</a>
        <a href={gallery.instagram.url} target="_blank" rel="noopener noreferrer">{gallery.instagram.handle}</a>
      </address>
    </footer>
  );
}

function Artwork({ work, index }) {
  return (
    <article className="artwork" aria-labelledby={`${work.id}-title`}>
      <div className="artwork-image">
        <img src={asset(work.image)} alt={work.alt} width={work.width} height={work.height} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
      </div>
      <div className="artwork-details">
        <h2 id={`${work.id}-title`}>{work.title}</h2>
        {work.subtitle && <p className="artwork-subtitle">{work.subtitle}</p>}
        <dl className="artwork-meta">
          <div><dt>Medium</dt><dd>{work.medium}</dd></div>
          <div><dt>Dimensions</dt><dd>{work.dimensions}</dd></div>
          {work.year && <div><dt>Year</dt><dd>{work.year}</dd></div>}
          {work.price && <div className="artwork-price"><dt>Price</dt><dd>{work.price}</dd></div>}
        </dl>
      </div>
    </article>
  );
}

function ExhibitionDescription() {
  const [language, setLanguage] = useState('el');
  const paragraphs = language === 'el' ? exhibition.descriptionGR : exhibition.descriptionEN;
  return (
    <div className="bilingual-copy">
      <div className="language-toggle" role="group" aria-label="Description language">
        <button type="button" lang="el" aria-label="GR — Ελληνικά" aria-pressed={language === 'el'} aria-controls="exhibition-description" onClick={() => setLanguage('el')}>GR</button>
        <button type="button" lang="en" aria-label="EN — English" aria-pressed={language === 'en'} aria-controls="exhibition-description" onClick={() => setLanguage('en')}>EN</button>
      </div>
      <section id="exhibition-description" className="language-copy" lang={language} aria-label={language === 'el' ? 'Ελληνικά' : 'English'}>
        {paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </section>
    </div>
  );
}

function InfoPanel({ open, panelRef }) {
  return (
    <div id="exhibition-info" className={`info-overlay${open ? ' is-open' : ''}`} ref={panelRef} inert={!open} aria-hidden={!open}>
      <div className="content-width page-content info-content">
        <ExhibitionHeading titleId="info-title" />
        <ExhibitionDescription />
        <Contact />
      </div>
      <SiteFooter />
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
              <img src={asset(exhibition.logo)} alt={exhibition.title} width="2141" height="2141" />
            </a>
            <button type="button" className={`info-toggle${open ? ' is-open' : ''}`} aria-label={open ? 'Close exhibition information' : 'Open exhibition information'} aria-expanded={open} aria-controls="exhibition-info" onClick={() => setOpen(v => !v)} ref={toggleRef}>
              <span className="toggle-icon" aria-hidden="true"><span className="icon-ring" /><span className="icon-dot" /><span className="icon-stem" /><span className="icon-cross" /></span>
            </button>
          </nav>
        </header>
        <InfoPanel open={open} panelRef={panelRef} />
      </div>
      <main id="top" className="content-width page-content gallery" inert={open}>
        <ExhibitionHeading />
        <div className="artwork-list">
          {artworks.map((work, index) => <Artwork key={work.id} work={work} index={index} />)}
        </div>
        <Contact />
      </main>
      <SiteFooter inert={open} />
    </>
  );
}

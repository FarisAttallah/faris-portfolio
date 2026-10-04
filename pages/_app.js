import { useEffect } from 'react';
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import '../styles/globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} app-shell`}>
      <Component {...pageProps} />
    </div>
  );
}

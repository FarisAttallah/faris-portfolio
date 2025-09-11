import 'aos/dist/aos.css';
import 'nprogress/nprogress.css'; // <-- Import nprogress styles
import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true, // Only animate once to prevent layout shifts
      duration: 800, // Shorter duration for better UX
      offset: 50, // Smaller offset to trigger earlier
      easing: 'ease-out',
      disable: false, // Enable on all devices
      startEvent: 'DOMContentLoaded', // Start after DOM is ready
      initClassName: 'aos-init', // Class applied after initialization
      animatedClassName: 'aos-animate', // Class applied on animation
    });

    // nprogress route change events
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleStop);
    Router.events.on('routeChangeError', handleStop);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleStop);
      Router.events.off('routeChangeError', handleStop);
    };
  }, []);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

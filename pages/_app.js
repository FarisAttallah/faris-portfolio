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
      once: false, // <-- Change to false so animations trigger every time on scroll
      duration: 1200,
      offset: 120,
      easing: 'ease-in-out',
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

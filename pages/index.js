import Head from 'next/head';
import Header from '../components/Header';
import Rail from '../components/Rail';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Faris Attallah — Software Engineer</title>
        <meta
          name="description"
          content="Faris Attallah is a Software Engineer II at JPMorgan Chase & Co. building backend systems, cloud infrastructure, and full-stack products."
        />
        <meta property="og:title" content="Faris Attallah — Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer II at JPMorgan Chase & Co. building backend systems, cloud infrastructure, and full-stack products."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <main>
        <div className="page">
          <Rail />
          <div className="content">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

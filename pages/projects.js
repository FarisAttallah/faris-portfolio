import Head from 'next/head'
import Header from '../components/Header'
import VantaBG from '../components/VantaBG'
import Projects from '../components/Projects'

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Faris Attallah</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <VantaBG />
      <Header />
      <main className="page-container">
        <div className="page-header" data-aos="fade-up">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">Showcasing my work and achievements</p>
        </div>
        <section data-aos="fade-up" data-aos-delay="200">
          <Projects />
        </section>
      </main>
    </>
  )
}

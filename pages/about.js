import Head from 'next/head'
import Header from '../components/Header'
import VantaBG from '../components/VantaBG'
import About from '../components/About'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Faris Attallah</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <VantaBG />
      <Header />
      <main className="page-container">
        <div className="page-header" data-aos="fade-up">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">My journey and experience</p>
        </div>
        <section data-aos="fade-up" data-aos-delay="200">
          <About />
        </section>
      </main>
    </>
  )
}

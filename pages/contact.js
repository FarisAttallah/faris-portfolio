import Head from 'next/head'
import Header from '../components/Header'
import VantaBG from '../components/VantaBG'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Faris Attallah</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <VantaBG />
      <Header />
      <main className="page-container">
        <div className="page-header" data-aos="fade-up">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's work together</p>
        </div>
        <section data-aos="fade-up" data-aos-delay="200">
          <Contact />
        </section>
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutSection from '../Components/AboutSection'
import Banner from '../Components/Banner'
import Brands from '../Components/Brands'
// our-domain.com/Home
export default function About({brands, about}) {
  // console.log(about)
  return (
    <div className={styles.container}>
      <Head>
      <title>Mass Interact</title>
      <meta name="title" content="Mass Interact"/>
      <meta name="description" content="Mass Interact is a Google-trusted agency that creates virtual and interactive tours. We help you optimize, differentiate, and convey your business through an immersive, one-of-a-kind experience. "/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Banner heading="About Us"/>
          <AboutSection About={about} />
          <Brands data={brands} />
      </main>
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/about')
  const about = await res.json()
  // const ress = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/latest_blogs')
  // const jsons = await ress.json()
  // console.log(json)
  return {
    props: {
      about
    },
  }
}


import Head from 'next/head'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Main/>
      <Footer/>
    </div>
    </>
  )
}

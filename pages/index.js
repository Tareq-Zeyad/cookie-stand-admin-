import CookieStandAdmin from './components/cookiestandadmin'
import Head from 'next/head'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieStandAdmin/>
      
    </div>
  )
}
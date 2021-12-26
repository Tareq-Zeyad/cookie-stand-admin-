import LoginForm from '../components/LoginForm'
import CookieStandAdmin from '../components/cookiestandadmin'
import Head from 'next/head'
import React from 'react'
import {useAuth} from '../contexts/auth'

export default function Home() {
  const {user} = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? <CookieStandAdmin/> : <LoginForm/>}
    </div>
  )
}
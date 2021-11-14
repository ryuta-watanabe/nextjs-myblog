import NextLink from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'

import Layout from '@/components/Layout'
import MyProfile from '@/components/MyProfile'

const About: NextPage = () => (
  <Layout>
    <Head>
      <title>About | Ryuta Watanabe&apos;s Blog</title>
      <meta name="description" content="渡邉竜太の紹介" />
    </Head>
    <MyProfile />
  </Layout>
)

export default About

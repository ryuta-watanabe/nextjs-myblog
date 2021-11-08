import Head from 'next/head'
import type { NextPage } from 'next'

import Layout from '@/components/Layout'
import Posts from '@/components/organisms/Posts'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ryuta Watanabe&apos;s Blog</title>
        <meta name="description" content="渡辺竜太のテックブログ" />
      </Head>
      <Posts />
    </Layout>
  )
}

export default Home

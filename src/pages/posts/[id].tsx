import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { client } from '@/lib/client'

import Layout from '@/components/Layout'

type Article = {
  id: string
  title: string
  publishedAt: string
  mainVisual?: MainVisual
  contentBody: string
}
type MainVisual = {
  url: string
  height: string
  width: string
}
type Contents = {
  contents: Article[]
}

const PostDetail: NextPage<{ blog: Article }> = ({ blog }) => (
  <Layout>
    <Head>
      <title>{blog.title}｜Ryuta Watanabe&apos;s Blog</title>
      <meta name="description" content="hogehoge" />
    </Head>
    <article>
      <Box>
        <Heading as="h1" mb="2" fontSize={['3xl', '4xl']} lineHeight="wide">
          {blog.title}
        </Heading>
        <Box my="2">
          <Text>{blog.publishedAt}</Text>
        </Box>
        <Box
          my="4"
          maxH={['200px', '240px', '400px', '560px']}
          overflow="hidden"
        >
          <Image
            src={blog.mainVisual?.url}
            alt=""
            objectFit="cover"
            width={blog.mainVisual?.width}
            height={blog.mainVisual?.height}
          />
        </Box>
        <Box
          dangerouslySetInnerHTML={{
            __html: `${blog.contentBody}`,
          }}
        />
      </Box>
    </article>
  </Layout>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/posts/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.id as string
  const data = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}

export default PostDetail

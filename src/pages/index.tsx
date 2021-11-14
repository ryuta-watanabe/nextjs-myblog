import NextLink from 'next/link'
import Head from 'next/head'
import type { NextPage, GetStaticProps } from 'next'
import {
  Grid,
  Box,
  Image,
  Flex,
  Badge,
  Heading,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { client } from '@/lib/client'

import Layout from '@/components/Layout'

type Article = {
  id: string
  title: string
  publishedAt: string
  mainVisual?: MainVisual
}
type MainVisual = {
  url: string
  height: string
  width: string
}
type Contents = {
  contents: Article[]
}

const Home: NextPage<{ blog: Article[] }> = ({ blog }): JSX.Element => {
  return (
    <Layout home>
      <Head>
        <title>Ryuta Watanabe&apos;s Blog</title>
        <meta name="description" content="渡辺竜太のテックブログ" />
      </Head>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap="6"
      >
        {blog.map((item) => (
          <LinkBox
            key={item.id}
            as="article"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box height={['180px', '200px']} overflow="hidden">
              <Image
                src={item.mainVisual?.url}
                objectFit="cover"
                alt=""
                width={item.mainVisual?.width}
                height={item.mainVisual?.height}
              />
            </Box>
            <Box p="6">
              <Flex alignItems="center">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {item.publishedAt}
                </Box>
              </Flex>
              <Box mt="1">
                <NextLink href={`/posts/${item.id}`} passHref>
                  <LinkOverlay>
                    <Heading
                      as="h2"
                      fontSize="2xl"
                      fontWeight="normal"
                      lineHeight="tight"
                      isTruncated
                    >
                      {item.title}
                    </Heading>
                  </LinkOverlay>
                </NextLink>
              </Box>
            </Box>
          </LinkBox>
        ))}
      </Grid>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}

export default Home

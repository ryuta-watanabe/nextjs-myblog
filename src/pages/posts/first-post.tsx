import NextLink from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'
import {
  Box,
  Stack,
  Image,
  Text,
  Heading,
  Badge,
  Flex,
  Link,
} from '@chakra-ui/react'

import Layout from '@/components/Layout'

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>First Post｜Ryuta Watanabe&apos;s Blog</title>
      </Head>
      <Box maxW="container.lg" mx="auto">
        <Stack>
          <Text
            color="gray.500"
            fontWeight="normal"
            letterSpacing="wide"
            fontSize="xl"
            textTransform="uppercase"
          >
            2021.11.4
          </Text>
        </Stack>
        <Heading as="h1" fontSize="3xl" fontWeight="semibold" my="6">
          【オンラインMeetup イベントレポート】After DroidKaigi 2021
        </Heading>
        <Flex mt="6" mb="10" ml="-1.5" flexWrap="wrap">
          <Badge
            borderRadius="6px"
            mt="1.5"
            ml="1.5"
            px="2"
            py="1"
            bgColor="black"
          >
            <Text color="white">Android</Text>
          </Badge>
          <Badge
            borderRadius="6px"
            mt="1.5"
            ml="1.5"
            px="2"
            py="1"
            bgColor="black"
          >
            <Text color="white">イベントレポート</Text>
          </Badge>
          <Badge
            borderRadius="6px"
            mt="1.5"
            ml="1.5"
            px="2"
            py="1"
            bgColor="black"
          >
            <Text color="white">オンラインイベント</Text>
          </Badge>
        </Flex>
        <Box align="center">
          <Image
            src="/images/akanesayaIMGL0759_TP_V.jpg"
            alt="First Post"
            objectFit="cover"
            width="100%"
            maxH="lg"
          />
        </Box>
        <Box my="10" px="10" fontSize="xl">
          <Text>こんにちは、ZOZO CTOブロックの光野（@kotatsu360）です。</Text>
          <Text>ZOZOでは、10/28にAfter DroidKaigi 2021を開催しました。</Text>
        </Box>
        <NextLink href="/">
          <Link as="button">トップページへ戻る</Link>
        </NextLink>
      </Box>
    </Layout>
  )
}

export default FirstPost

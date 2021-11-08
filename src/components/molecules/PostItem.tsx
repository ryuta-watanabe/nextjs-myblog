import NextLink from 'next/link'
import type { NextPage } from 'next'
import {
  Box,
  Image,
  Flex,
  Badge,
  Text,
  Heading,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'

const PostItem: NextPage = () => (
  <LinkBox
    as="article"
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
  >
    <Image src="/images/profile.jpg" objectFit="cover" alt="First Post" />
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
          2021.11.4
        </Box>
      </Flex>
      <Box mt="1">
        <NextLink href="/posts/first-post" passHref>
          <LinkOverlay>
            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="normal"
              lineHeight="tight"
              isTruncated
            >
              First post
            </Heading>
          </LinkOverlay>
        </NextLink>
      </Box>
      <Flex mt="1.5" ml="-1.5" flexWrap="wrap">
        <Badge
          borderRadius="6px"
          mt="1.5"
          ml="1.5"
          px="2"
          py="1"
          bgColor="black"
        >
          <Text color="white">タグ名</Text>
        </Badge>
        <Badge
          borderRadius="6px"
          mt="1.5"
          ml="1.5"
          px="2"
          py="1"
          bgColor="black"
        >
          <Text color="white">タグ名</Text>
        </Badge>
        <Badge
          borderRadius="6px"
          mt="1.5"
          ml="1.5"
          px="2"
          py="1"
          bgColor="black"
        >
          <Text color="white">タグ名</Text>
        </Badge>
        <Badge
          borderRadius="6px"
          mt="1.5"
          ml="1.5"
          px="2"
          py="1"
          bgColor="black"
        >
          <Text color="white">タグ名</Text>
        </Badge>
        <Badge
          borderRadius="6px"
          mt="1.5"
          ml="1.5"
          px="2"
          py="1"
          bgColor="black"
        >
          <Text color="white">タグ名</Text>
        </Badge>
        <Badge
          borderRadius="6px"
          mt="1.5"
          ml="1.5"
          px="2"
          py="1"
          bgColor="black"
        >
          <Text color="white">タグ名</Text>
        </Badge>
      </Flex>
    </Box>
  </LinkBox>
)

export default PostItem

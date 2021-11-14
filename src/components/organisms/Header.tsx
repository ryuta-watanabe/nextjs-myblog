import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Container, Flex, Box, HStack, Heading, Link } from '@chakra-ui/react'

const Header: NextPage = () => (
  <Box borderBottom="1px" borderColor="gray.200">
    <Container maxW="container.xl">
      <Flex as="nav" py="4" alignItems="center">
        <Box>
          <Heading as="h1" size="md">
            Ryuta Watanabe
          </Heading>
        </Box>
        <HStack pl="6">
          <NextLink href="/">
            <Link
              display="block"
              fontSize="xs"
              px="4"
              py="1.5"
              color="white"
              bgColor="teal.700"
              borderRadius="3xl"
              _hover={{ textDecoration: 'none', opacity: 0.8 }}
            >
              Home
            </Link>
          </NextLink>
          <NextLink href="/about">
            <Link
              display="block"
              fontSize="xs"
              px="4"
              py="1.5"
              color="white"
              bgColor="teal.700"
              borderRadius="3xl"
              _hover={{ textDecoration: 'none', opacity: 0.8 }}
            >
              About
            </Link>
          </NextLink>
        </HStack>
      </Flex>
    </Container>
  </Box>
)

export default Header

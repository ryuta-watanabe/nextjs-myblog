import { useEffect } from 'react'
import type { NextPage } from 'next'
import { Container, Flex, Box, Heading, Spacer } from '@chakra-ui/react'

import InputSearch from '@/components/atoms/InputSearch'

const Header: NextPage = () => (
  <Box bgColor="gray.50" borderBottom="1px" borderColor="gray.200">
    <Container maxW="container.xl">
      <Flex as="nav" py="3" align="center">
        <Box p="2">
          <Heading as="h1" size="lg">
            Nabe Tech Blog
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <InputSearch />
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Header

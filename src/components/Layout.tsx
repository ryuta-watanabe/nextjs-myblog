import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react'

import Header from '@/components/organisms/Header'

type Props = {
  children: React.ReactNode
  home: boolean
}

const Layout: NextPage<Props> = ({ children }) => (
  <>
    <Header />
    <Container maxW="container.xl" py="10">
      <main>{children}</main>
    </Container>
  </>
)

export default Layout

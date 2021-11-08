import type { NextPage } from 'next'
import { Box, Image } from '@chakra-ui/react'

const MyProfile: NextPage = () => (
  <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Ryuta Watanabe"
  />
)

export default MyProfile

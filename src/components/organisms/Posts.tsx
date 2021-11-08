import type { NextPage } from 'next'
import { Grid } from '@chakra-ui/react'

import PostItem from '@/components/molecules/PostItem'

const Posts: NextPage = () => (
  <Grid
    templateColumns={[
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'repeat(4, 1fr)',
    ]}
    gap="6"
  >
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </Grid>
)

export default Posts

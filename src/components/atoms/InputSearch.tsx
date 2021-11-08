import type { NextPage } from 'next'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const InputSearch: NextPage = () => (
  <InputGroup>
    <Input placeholder="記事を探す" />
    <InputRightElement>
      <Search2Icon color="gray.500" />
    </InputRightElement>
  </InputGroup>
)

export default InputSearch

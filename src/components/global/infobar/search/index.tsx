import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div
      className='flex overflow-hidden gap-x-2 border-[1px] border-[#3352cc] rounded-full px-4 items-center flex-1'
    >
        <SearchIcon color='#3352cc' />
        <Input
          placeholder='Pesquisar por nome, email ou status'
          className='border-none outline-none ring-0 focus:ring-0 flex-1'
        />
    </div>
  )
}

export default Search
import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { Radio } from 'lucide-react'

type Props = {}

const ActivateAutomationButton = (props: Props) => {
  //WIP: Setup optimistic ui
  // WIP: Getch some automation data
  return (
    <Button
      className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium
      to-[#1c2d70] ml-4'
    >
      {/* WIP: Set the loading state */}
      <Loader state={false}>
        <Radio />
        <p className='lg:inline hidden'>Ativar</p>
      </Loader>
    </Button>
  )
}

export default ActivateAutomationButton
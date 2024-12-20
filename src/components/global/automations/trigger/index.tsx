'use client'

import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'
import ActiveTrigger from './active'
import { Separator } from '@/components/ui/separator'
import ThenAction from '../then/then-action'

type Props = {
  id: string
}

const Trigger = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)

  //if (data?.data && data?.data?.trigger.length > 0) {
  return (
    <div className="flex flex-col gap-y-6 items-center">
      <ActiveTrigger
        type={'COMMENT'}
        keywords={[
          {
            id: 'asdsad454sadsa',
            word: 'getstarted',
            automationId: id,
          },
        ]}
      />
      {/* data?.data?.trigger.length>1 && <></> */}
      <>
        <div className="relative w-6/12 ">
          <p className="text-xs absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
            ou
          </p>
          <Separator
            orientation="horizontal"
            className="border-muted border-[#1px]"
          />
        </div>
        <ActiveTrigger
          type={'MESSAGE'}
          keywords={[
            {
              id: 'asdsad454sadsa',
              word: 'Meplease',
              automationId: id,
            },
          ]}
        />
      </>
      <ThenAction />
    </div>
  )
  //}
}

export default Trigger

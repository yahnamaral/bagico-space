'use client'

import { ChevronRight, SquarePen } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activate-automation-button'
import { useQueryAutomation } from '@/hooks/user-queries'
import { useEditAutomation } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { Input } from '@/components/ui/input'

type Props = {
  id: string
}

const AutomationsBreadCrumb = ({ id }: Props) => {
  //WIP: get the automation data
  const { data } = useQueryAutomation(id)
  const { edit, enableEdit, disableEdit, inputRef, isPending } =
    useEditAutomation(id)

  const { latestVariable } = useMutationDataState(['update-automation'])

  // User mutation stuff to update the automations
  return (
    <div className="rounded-full w-full p-5 bg-[#18181b1a] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9b9ca0] truncate">Automações</p>
        <ChevronRight className="flex-shrink-0" color="#9b9ca0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                isPending ? latestVariable.variables : 'Add a new name'
              }
              className="bg-transparent h-auto outline-none text-base border-none p-0"
            />
          ) : (
            <p className="text-[#9b9ca0] truncate">
              {latestVariable?.variables
                ? latestVariable?.variables.name
                : data?.data?.name}
            </p>
          )}
          {edit ? (
            <></>
          ) : (
            <span
              className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
              onClick={enableEdit}
            >
              <SquarePen color="#9b9ca0" size={15} />
            </span>
          )}
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          Todas alterações são salvas automaticamente
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Alteraçõs Salvas
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  )
}

export default AutomationsBreadCrumb

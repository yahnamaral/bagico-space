import { useListener } from '@/hooks/use-automations'
import React from 'react'
import TriggerButton from '../trigger-button'

type Props = {
  id: string
}

const ThenAction = ({ id }: Props) => {
  const { onSetListener, register, onFormSubmit, listener, isPending } =
    useListener(id)

  return <TriggerButton label="Então">child</TriggerButton>
}

export default ThenAction

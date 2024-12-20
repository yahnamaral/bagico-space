import { InstagramBlue, PlaneBlue } from '@/icons'
import React from 'react'

type Props = {
  type: string
  keywords: {
    id: string
    word: string
    automationId: string | null
  }[]
}

const ActiveTrigger = ({ type, keywords }: Props) => {
  return (
    <div className="bg-background-80 p-3 rounded-xl w-full">
      <div className="flex gap-x-2 items-center">
        {type === 'COMMENT' ? <InstagramBlue /> : <PlaneBlue />}
        <p className="text-sm">
          {type === 'COMMENT'
            ? 'Usuário comenta no meu post.'
            : 'Usuário me envia uma DM.'}
        </p>
      </div>
      <p className="text-text-secondary text-xs">
        {type === 'COMMENT'
          ? 'Se o usuário comentar em um vídeo com palavras-chave configuradas, a automação será acionada.'
          : 'Se o usuário enviar uma mensagem que contenha uma palavra-chave, esta automação será acionada.'}
      </p>
      <div className="flex gap-2 mt-5 flex-wrap">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-br from-[#3352cc] to-[#1c2d70] flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full"
          >
            <p className="text-sm">{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActiveTrigger

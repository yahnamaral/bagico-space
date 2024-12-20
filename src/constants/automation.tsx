import { Pen } from 'lucide-react'
import { v4 } from 'uuid'

export type AutomationListenerProps = {
  id: string
  label: string
  icon: JSX.Element
  description: string
  type: 'SMARTAI' | 'MESSAGE'
}

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
  {
    id: v4(),
    label: 'Enviar mensagem ao usuário',
    icon: <Pen color="#3352cc" />,
    description: 'Digite a mensagem que você deseja enviar ao usuário.',
    type: 'MESSAGE',
  },
  {
    id: v4(),
    label: 'Deixe a IA Inteligente assumir o controle',
    icon: <Pen color="#3352cc" />,
    description:
      'Conte a IA sobre o seu projeto. (Faça upgrade para usar este recurso)',
    type: 'SMARTAI',
  },
]

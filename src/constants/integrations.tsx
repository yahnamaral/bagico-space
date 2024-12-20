import { Cloud, Instagram } from "lucide-react"

type Props = {
  title: string
  icon: React.ReactNode
  description: string
  strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
  {
    title: 'Conectar Instagram',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices',
    icon: <Instagram size={30}/>,
    strategy: 'INSTAGRAM',
    
  },
  {
    title: 'Conectar Salesforce',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices',
    icon: <Cloud size={30} />,
    strategy: 'CRM',
  },
]
import { House, Rocket, Settings, Workflow } from 'lucide-react'
import { v4 as uuid } from 'uuid'

export type FieldProps = {
  label: string
  link: string
  id: string
}

type SideBarProps = {
  icon: React.ReactNode
} & FieldProps

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: 'home',
    link: 'home',
    icon: <House />,
  },
  {
    id: uuid(),
    label: 'automações',
    link: 'automations',
    icon: <Workflow />,
  },
  {
    id: uuid(),
    label: 'integrações',
    link: 'integrations',
    icon: <Rocket />,
  },
  {
    id: uuid(),
    label: 'configurações',
    link: 'settings',
    icon: <Settings />,
  },
]
import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  page: string
  slug: string
}

const Items = ({ page, slug }: Props) => {
  return SIDEBAR_MENU.map((item) => (
    <Link
      key={item.id}
      href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.link}`}
      className={cn(
        'captalize flex gap-x-2 rounded-full p-3',
        page === item.label && 'bg-[#0f0f0f]',
        page === slug && item.label === 'home' ? 'bg-[#0f0f0f]' : 'text-[#9b9ca0]'  
      )}
    >
      {item.icon}
      {item.label}
    </Link>
  ))
}

export default Items
import type { FC } from 'react'
import type { IPageHeader } from './page-header.types'

export const PageHeader: FC<IPageHeader> = ({ text }) => {
  return (
    <h1 className="space-y-2 text-3xl font-extrabold tracking-tight text-white sm:text-[2rem]">
      {text}
    </h1>
  )
}

import React from 'react'
import { Header } from '@components/molecules'
import { NextPage } from 'next'

export const SidebarLayout: NextPage<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default SidebarLayout

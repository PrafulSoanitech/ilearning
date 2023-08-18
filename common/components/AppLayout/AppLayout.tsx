import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { AppShellLayout } from '../AppShellLayout'
import { SidebarLayout } from '../SidebarLayout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getToken, getUserInfoFromStorage } from 'common/helpers/dataHelper'
import { loginSuccess, setToken } from 'redux/features/authSlice'

export const checkLayoutRegex = (path: string) => {
  if (/dashboard/.test(path)) {
    return 'sidebar-layout'
  } else {
    return 'app-layout'
  }
}

const AppLayout: NextPage<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const { asPath } = useRouter()
  const layoutType = checkLayoutRegex(asPath)

  const dispatch = useDispatch()

  useEffect(() => {
    const token = getToken()
    const userInfo = getUserInfoFromStorage()

    if (token && userInfo) {
      const userData = {
        user: userInfo,
        token: token,
      }
      dispatch(loginSuccess(userData))
    }
  }, [])

  if (layoutType === 'app-layout') {
    return <AppShellLayout>{children}</AppShellLayout>
  }

  if (layoutType === 'sidebar-layout') {
    return <SidebarLayout>{children}</SidebarLayout>
  }

  return <main>{children}</main>
}

export default AppLayout

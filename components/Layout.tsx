import React from 'react'
import {Header} from './'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <>
    <Header />
    {props.children}
    </>
  )
}

export default Layout
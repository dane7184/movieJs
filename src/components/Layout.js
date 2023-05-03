import React from 'react'
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'


export default function Layout({children}) {
  return (
    <>
    <NavbarComponent/>
    <main>
        {children}
    </main>
    <FooterComponent/>
    </>
  )
}

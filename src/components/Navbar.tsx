'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
// import logo from '../../assets/collaborateXLogo.svg'

// import { ModeToggle } from './modeToggle'

export default function Navbar() {
    const pathname = usePathname()

  return (
         <nav className="flex justify-between items-center gap-2">
          <Image src={'/collaborateXLogo.svg'} width={200} height={100} alt='logo'/>
          <ul className='h-1 flex items-center gap-6 list-none mr-[120px]'>
          <li>
            <Link href='https://github.com/theashhar/collaborate-x'>Github</Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/ashhar-ali-ahmed-971aaa193/'>LinkedIn</Link>
          </li>
          <li>
            <Link href='https://github.com/theashhar/collaborate-x?tab=readme-ov-file#readme'>Documentation</Link>
          </li>
          {/* <li>
            <Link href='#'>Documentation</Link>
          </li>
          <li>
            <Link href='#'>Enterprise</Link>
          </li> */}
        </ul>
          <Button asChild variant='secondary' >
            <Link href={pathname !== '/sign-in' ? 'sign-in' : 'sign-up'} >
              {pathname === '/sign-in' ? 'Sign Up' : 'Login'}
            </Link>
          </Button>
        </nav>
  )
}

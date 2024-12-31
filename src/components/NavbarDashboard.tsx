'use client'

//Obsolete
//Obsolete
//Obsolete
//Obsolete
//Obsolete


// import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
// import { Button } from './ui/button'
// import { usePathname } from 'next/navigation'
import AvatarOrLogin from './avatar-or-login'
// import logo from '../../assets/collaborateXLogo.svg'

// import { ModeToggle } from './modeToggle'

export default function NavbarDashboard() {
    // const pathname = usePathname()

  return (
         <nav className="flex w-full justify-end items-center gap-2">
          {/* <Link href='/' >
            <Image src={'/logoIcon.svg'} width={50} height={40} alt='logo'/>
          </Link> */}
          {/* <ul className='h-1 flex items-center gap-6 list-none mr-[120px]'>
          <li>
            <Link href='https://github.com/theashhar/collaborate-x'>Github</Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/ashhar-ali-ahmed-971aaa193/'>LinkedIn</Link>
          </li>
          <li>
            <Link href='https://github.com/theashhar/collaborate-x?tab=readme-ov-file#readme'>Documentation</Link>
          </li>
        </ul> */}

          <AvatarOrLogin />
        </nav>
  )
}

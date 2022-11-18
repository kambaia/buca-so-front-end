import React, { useState, useEffect } from 'react'
import { Containner } from './styles'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import { useRouter } from 'next/router'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import {
  LocationOn,
  Login,
  MenuBook,
  Info,
  Contactless,
} from '@mui/icons-material'
import Link from 'next/link'
/**************reduce */

export default function Header() {
  const router = useRouter()
  const [value, setValue] = React.useState('recents')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Containner>
      <div className="content">
        <div className="logo">
          <a href="/">
            <img src={'/logo.png'} alt="Logo" height={60} width={60} />
          </a>
        </div>
        <div className="private">
          <BottomNavigation
            sx={{ width: 400 }}
            value={value}
            onChange={handleChange}
          >
           
             <BottomNavigationAction
                label="Livros"
                value="recents"
                title='Home'
                onClick={() => router.push('/')}
                icon={<MenuBook />}
              />
      
           
              <BottomNavigationAction
                label="Localização"
                value="location"
                icon={<LocationOn />}
                onClick={() => router.push('/location')}
              />
              <BottomNavigationAction
                label="Contacta-nos"
                value="contact"
                icon={<Contactless />}
                onClick={() => router.push('/contact')}
              />
           
              <BottomNavigationAction
                label="Sobre"
                value="about"
                onClick={() => router.push('/about')}
                icon={<Info />}
              />
           </BottomNavigation>
        </div>
        <div className="login">
          <BottomNavigation
            sx={{ width: 400 }}
            value={value}
            onChange={handleChange}
          >
              <BottomNavigationAction
                label="Acessa"
                value="access"
                icon={<Login />}
                onClick={() => router.push('/login')}
              />

          </BottomNavigation>
        </div>
      </div>
    </Containner>
  )
}

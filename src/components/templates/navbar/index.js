import React from 'react'
import { PublicNavigationConfig } from '../../../configs/navigation.config/public'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <ul className='navbar' style={{display: 'flex', alignItems: 'center', gap: 20}}>
        {
            PublicNavigationConfig.map(el => <NavLink key={el.key} to={el.path}>{el.name}</NavLink>)
        }
    </ul>
  )
}

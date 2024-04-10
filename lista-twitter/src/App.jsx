import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'Javi20JJJ1',
    name: 'Javi',
    isFollowing: true
  },
  {
    userName: 'danielmanteca',
    name: 'Lopez',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel',
    isFollowing: true
  },
  {
    userName: 'undefined',
    name: 'Miguel Ängel Durán',
    isFollowing: true
  },
  {
    userName: 'Dani',
    name: 'Dani',
    isFollowing: true
  }
]

export function App () {
  // const [name, setName] = useState('pepe')
  return (
    <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
    </section>
  )
}

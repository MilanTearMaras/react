import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";

function App() {
    const workers = [
        {
            name: 'Milan',
            post: 'Admin',
            imgSrc: 'https://i.pravatar.cc/300'
        },
        {
            name: 'Jason',
            post: 'Staff eng.',
            imgSrc: 'https://i.pravatar.cc/300'
        },
        {
            name: 'Rebecca',
            post: 'lvl1 employee',
            imgSrc: 'https://i.pravatar.cc/300'
        }
    ]

  return (
    <>
        {workers.map((worker) => (
            <Card userName={worker.name} imgSrc={worker.imgSrc} post={worker.post} />
        ))}
    </>
  )
}

export default App

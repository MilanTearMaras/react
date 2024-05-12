import { useState } from 'react'

import './App.css'

function App() {
    const [color, setColor] = useState('olive')

    // function changeColor(color) {
    //     setColor(color)
    // }

    const buttons = [
        {color: 'red'},
        {color: 'green'},
        {color: 'blue'},
    ]

  return (
    <div className="w-screen h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                {buttons.map((button) => (
                    <button
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                        style={{backgroundColor: button.color}}
                        onClick={() => setColor(button.color)}>{button.color}</button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default App

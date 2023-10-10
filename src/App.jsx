import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div className={theme}>
      <button className="rounded-2xl mb-3" onClick={toggleTheme}>Toggle theme:{theme}</button>
    <h1 className="text-3xl font-bold underline">
      This is an empty react + tailwind project
    </h1>

    <div className="p-6 max-w-sm mx-auto dark:bg-black bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div>
    <div className="text-xl font-medium dark:text-white text-black">Testing</div>
    <p className="text-slate-500">Toggle themes</p>
  </div>
</div>
    </div>
  )
}

export default App

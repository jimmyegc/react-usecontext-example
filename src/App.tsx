
import { createContext, useState } from 'react'
import './App.css'
import { ComponentA } from './components/ComponentA'
import { ComponentB } from './components/ComponentB'

/*
  // Provider Component
  1.- Import { createContext } from 'react'
  2.- export const MyContext = createContext() 
  3.- <MyContext.Provider value={value}>
    <Child/>
  </MyContext.Provider>

  // Consumer Components
  1.- Import React, { useContext } from 'react'
    import { MyContext } from './ComponentA'
  2.- const value = useContext(MyContext)
*/

export const UserContext = createContext()


function App() {

  const [user, setUser] = useState('Jimmy')
  return (
    <>
      <h1>useContext</h1>
      <p>{`Hello ${user}`}</p>
      <UserContext.Provider value={user}>
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
      </UserContext.Provider>
    </>
  )
}

export default App

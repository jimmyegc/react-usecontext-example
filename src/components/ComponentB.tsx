import { useContext } from "react"
import { UserContext } from "../App"
export const ComponentB = () => {

  const user = useContext(UserContext)
  return <>
    <h2>ComponentB</h2>
    <p>{user}</p>
  </>
}
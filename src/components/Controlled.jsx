import { useState } from 'react'

function Controlled() {
  const [value, setValue] = useState('hello')

  const changeHandler = (event) => {
    setValue(event.target.value)
  }


  return (
    <input type="text" value={value} onChange={changeHandler} />
  )
}

export default Controlled
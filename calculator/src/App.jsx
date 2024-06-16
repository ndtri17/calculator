import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState('')

  return (
    <>
      <div className='container'>
        <div className='calculator'>
          <form action=''>
            <div className='display'> 
              <input type='text' value={value} id="display"></input>
            </div>
            <div className='line_1'>
              <input type='button' value='AC' id='clear' onClick={e => setValue(value='')}></input>
              <input type='button' value='DE' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='/' id="divide" onClick={e => setValue(value+e.target.value)}></input>
            </div>
            <div className='line_2'>
              <input type='button' value='7' id='seven' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='8' id='eight' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='9' id='nine' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='*' id="multiply" onClick={e => setValue(value+e.target.value)}></input>
            </div>
            <div className='line_3'>
              <input type='button' value='4' id='four' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='5' id='five' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='6' id='six' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='+' id="add" onClick={e => setValue(value+e.target.value)}></input>
            </div>
            <div className='line_4'>
              <input type='button' value='1' id='one' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='2' id='two' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='3' id='three' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='-' id="subtract"onClick={e => setValue(value+e.target.value)}></input>
            </div>
            <div className='line_5'>
              <input type='button' value='0' id='zero' onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='.' id="decimal" onClick={e => setValue(value+e.target.value)}></input>
              <input type='button' value='=' id="equals" onClick={e=> setValue(eval(value))}></input>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App

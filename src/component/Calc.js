import React, {useState} from 'react'

const Calc = () => {
  const [val, setVal] = useState("")
  return (
    <div className='m-auto border-2 w-80 mt-20 rounded-lg bg-neutral-500'>
        <input type="text" className='p-2 shadow-md focus:outline-none border-2 rounded-lg m-10'
        value={val}/>
        <div className="grid grid-cols-4 gap-4 px-4 pb-10 text-white">
          <button className='bg-teal-900'>
            C
          </button>
          <button className='bg-teal-900'value="del" onClick={(e)=> setVal(val + e.target.value)}>
            del
          </button>
          <button className='bg-teal-900'value="%" onClick={(e) => setVal(val + e.target.value)}>
            %
          </button>
          <button className='bg-teal-900'value="/" onClick={(e)=> setVal(val + e.target.value)}>
            /
          </button>
          <button className='bg-teal-900' value="7" onClick={(e)=> setVal(val + e.target.value)}>
            7
          </button>
          <button className='bg-teal-900'value="8" onClick={(e)=> setVal(val + e.target.value)}>
            8
          </button>
          <button className='bg-teal-900'value="9" onClick={(e)=> setVal(val + e.target.value)}>
            9
          </button>
          <button className='bg-teal-900'value="x" onClick={(e)=> setVal(val + e.target.value)}>
            x
          </button>
          <button className='bg-teal-900'value="4" onClick={(e)=> setVal(val + e.target.value)}>
            4
          </button>
          <button className='bg-teal-900'value="5" onClick={(e)=> setVal(val + e.target.value)}>
            5
          </button>
          <button className='bg-teal-900'value="6" onClick={(e)=> setVal(val + e.target.value)}>
            6
          </button>
          <button className='bg-teal-900'value="-" onClick={(e)=> setVal(val + e.target.value)}>
            -
          </button>
          <button className='bg-teal-900'value="1" onClick={(e)=> setVal(val + e.target.value)}>
            1
          </button>
          <button className='bg-teal-900'value="2" onClick={(e)=> setVal(val + e.target.value)}>
            2
          </button>
          <button className='bg-teal-900' value="3" onClick = {(e) => setVal(val + e.target.value)}>
            3
          </button>
          <button className='bg-teal-900'value="+" onClick={(e) => setVal(val + e.target.value)}>
            +
          </button>
          <button className='bg-teal-900'value="0" onClick={(e)=> setVal(val + e.target.value)}>
            0
          </button>
          <button className='bg-teal-900' value="." onClick={(e)=> setVal(val + e.target.value)}>
            .
          </button>
          <button className='bg-teal-900'value="=" onClick={(e) => setVal(val + e.target.value)}>
            =
          </button>
</div>
    </div>
  )
}

export default Calc
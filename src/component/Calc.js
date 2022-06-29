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
          <button className='bg-teal-900' >
            +-
          </button>
          <button className='bg-teal-900'>
            %
          </button>
          <button className='bg-teal-900'>
            /
          </button>
          <button className='bg-teal-900'>
            7
          </button>
          <button className='bg-teal-900'>
            8
          </button>
          <button className='bg-teal-900'>
            9
          </button>
          <button className='bg-teal-900'>
            x
          </button>
          <button className='bg-teal-900'>
            4
          </button>
          <button className='bg-teal-900'>
            5
          </button>
          <button className='bg-teal-900'>
            6
          </button>
          <button className='bg-teal-900'>
            -
          </button>
          <button className='bg-teal-900'value="1" onClick={(e)=> setVal(val + e.target.value)}>
            1
          </button>
          <button className='bg-teal-900'>
            2
          </button>
          <button className='bg-teal-900'>
            3
          </button>
          <button className='bg-teal-900'>
            +
          </button>
          <button className='bg-teal-900'>
            0
          </button>
          <button className='bg-teal-900'>
            .
          </button>
          <button className='bg-teal-900'>
            =
          </button>
</div>
    </div>
  )
}

export default Calc
import React from "react";
import Calc from "./component/Calc";

function App() {
  return (
    <div className="h-full" >
      <div className='bg-teal-900'>
      <h2 className="text-center text-white font-semibold py-10 text-2xl">CALCULATOR</h2>
      </div>
      <Calc/>
      <div className='mt-10'>
      <p className='text-center font-semibold p-20'>&copy; Messiovo</p>
      </div>
    </div>
  );
}

export default App;

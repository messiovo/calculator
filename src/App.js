import React from "react";
import Calc from "./component/Calc";

function App() {
  return (
    <div >
      <div className='bg-teal-900'>
      <h2 className="text-center text-white font-semibold py-10 text-2xl">CALCULATOR</h2>
      </div>
      <Calc/>
      <div className='bg-teal-900 mt-10 p-10 max-h-full'>
      <p className='text-center text-white'>&copy; Messiovo</p>
      </div>
    </div>
  );
}

export default App;

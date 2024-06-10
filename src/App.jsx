import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [date, setDate] = useState(new Date());
  
  return(
    <div className="bg-rose-500 rounded-lg max-w-full h-dvh flex  justify-center items-center align-center  ">
   
      <div className=" h-96  w-96 bg-blue-200 rounded-lg">
        <p className="text-2xl font-bold text-blue-600 text-center mt-5">Welcome</p>
        <p className="text-center font-mediam ">Create your Account to Continue</p>
        <br />
        <input type="text" placeholder="   Your Nmae"  className="rounded -lg w-80 m-5 h-8 mt-1" />
        <br />
        <input type="email" placeholder="   abcd@gmail.com" className="rounded -lg w-80 m-5 h-8 mt-1" />
        <br />
        <input type="password" placeholder="   Password" className="rounded -lg w-80 m-5 h-8 mt-1" />
        <br />
        <DatePicker className="rounded -lg w-80 m-5 h-8 mt-1" selected={date} onChange={(date) => setDate(date)} />
          <button type="submit" className="bg-blue-500 text-center font-bold rounded -lg w-80 m-5 h-8 mt-1 hover:bg-blue-800" >Submit </button>
      </div>
    </div>

  )

}


export default App
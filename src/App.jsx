import { AiOutlineCopy , AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [uppercase , setUppercas] = useState(true)
  const [lowrcase , setLowrecase] = useState(true)
  const [number , setNumber] = useState(true)
  const [symbol , setSymbol] = useState(true)

  const generator = () =>{
    const length = document.querySelector("#length").value
    const upper = document.querySelector("#uppercase").checked
    const lower = document.querySelector("#lowecase").checked
    const number = document.querySelector("#number").checked
    const symbol = document.querySelector("#symbol").checked

    let charset = ""
    if(upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lower) charset += "abcdefghijklmnopqrstuvwxyz";
    if(number) charset += "0123456789"
    if(symbol) charset += "!@#$%^&*"
    
    let password = ""
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));

    }
    setPassword(password)
  }
  const copy = () =>{
    if (password) {
      navigator.clipboard.writeText(password);
    }
  }
  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center h-[100vh] '>
        <div className="flex flex-col items-center justify-center w-[25%]">
          <div className='bg-gray-700 w-full rounded-md'>
            <div className='flex flex-row items-center justify-between w-full p-5'>
              <h3 className='text-white'>{password}</h3>
              <AiOutlineCopy onClick={copy} className="text-green-300 text-[1.2rem] cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full bg-gray-700 mt-5 p-5 rounded-md">
              <div className="flex flex-row items-center justify-between w-full">
                <h2 className="text-white">Charecter Length</h2>
                <input type="number" className="w-[50px] outline-none px-2" min="1" max="20" id="length" />
              </div>
              <div className="flex flex-col items-start justify-start w-full mt-4 gap-y-4">
                <div className="flex flex-row ">
                  <input type="checkbox" id="uppercase" checked={uppercase} onChange={(e) => setUppercas(e.target.checked)} />
                  <p className="mx-3 text-white">Incolod Uppercase</p>
                </div>
                <div className="flex flex-row ">
                  <input type="checkbox" id="lowecase" checked={lowrcase} onChange={(e) => setLowrecase(e.target.checked)} />
                  <p className="mx-3 text-white">Incolod Lowecase</p>
                </div>
                <div className="flex flex-row ">
                  <input type="checkbox" id="number" checked={number} onChange={(e) => setNumber(e.target.checked)} />
                  <p className="mx-3 text-white">Incolod Number</p>
                </div>
                <div className="flex flex-row ">
                  <input type="checkbox" id="symbol" checked={symbol} onChange={(e) => setSymbol(e.target.checked)} />
                  <p className="mx-3 text-white">Incolod Symbol</p>
                </div>
              </div>
              <div className="w-full mt-4">
                <button onClick={generator} className="w-full bg-green-300 py-3 rounded-sm flex flex-row items-center justify-center cursor-pointer">GENERATE <AiOutlineArrowRight className="ml-3" /></button>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
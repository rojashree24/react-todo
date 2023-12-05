import React, { useRef, useState } from "react";
import FirstCompo from "./components/FirstCompo";


const Sample = () => {
  // let x="a"
  // let array=["q","w","e","r","t","y"]

  // let x=0;
  // const [x, setX] = useState(0)
  // const btnClick=()=>{
  //   // console.log("clicked");
  //   setX(x+1)
  //   console.log(x);
  // }

  const inputRef=useRef(null)

  return (
    <div>
      {/* {x}
      {array.map((user)=>{return <h2>{user}</h2>})} */}

      {/* {x} */}
      {/* <button onClick={()=>{btnClick()}}>Click me</button>
      <FirstCompo data={x} fn={setX}/> */}

      <input type="text" ref={inputRef}/>
      <button onClick={()=>{console.log(inputRef.current.value)}}>click</button>
    </div>
  );
};

export default Sample;

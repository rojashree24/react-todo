import React from 'react'

// const FirstCompo = (props) => {
//   return (
//     <div>
//         {props.data}
//     </div>
//   )
// }

//OR

const FirstCompo = ({data,fn}) => {
  return (
    <div>
        <button onClick={()=>{fn(10)}}>10</button>
    {data}
    </div>
  )
};

export default FirstCompo
import React from 'react';

const Boxs = ({className}) => {
  const range = Array.apply(null,Array(4)).map(function (_, i) {return i;});;
  return (
    <>
    <div className=' flex w-6/12 '>
          <div className=' w-[200px] h-[200px]  rotate-45 border border-white '>MONGODB</div>
          <div className=' w-[200px] h-[200px] rotate-45 border border-white'>EXPRESSJS</div>
          <div className=' w-[200px] h-[200px] rotate-45 border border-white'>REACTJS</div>
          <div className=' w-[200px] h-[200px] rotate-45 border border-white'>NODEJS</div>
    </div>
    </>
  )
}

export default Boxs
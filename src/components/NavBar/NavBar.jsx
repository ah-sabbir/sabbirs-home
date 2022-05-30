import { useState } from 'react';
import { Link } from 'react-router-dom';
import SVG_S from '../../utils/SVG/SVG_S';
const NavBar = ()=>{
    let links = [
        {name:"home",link:"/"},
        {name: "about", link: "/about"},
        {name: "projects", link: "/projects"}
    ];

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="shadow-md w-full ">
            <div className="md:flex item-center justify-between py-4 md:px-10 px-7">
                <div className="border border-white rounded w-[100px] md:w-[100px]">
                    <SVG_S/>
                {/* <img src = {S} width={100} height={100} color={"red"} alt={"SABBIR'S HOME"} /> */}
                </div>
                <div className='text-3xl absolute right-[4rem] top-[4.5rem] border border-white rounded text-[#ff4949] '>
                <svg className={`${!isOpen?"block":"hidden"} md:hidden h-10 w-10 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" onClick={()=>setIsOpen(!isOpen)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg className={`${isOpen?"block":"hidden"} md:hidden  h-10 w-10`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" onClick={()=>setIsOpen(!isOpen)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> 


                </div>
                <ul className={` md:flex md:items-center transition-all duration-500  ease-in ${isOpen?"block":"hidden"}`}>
                    {
                        links.map((item,index)=>(
                            <li key={item.name} className="md:ml-8 text-2xl uppercase text-center border border-white rounded md:my-0 my-7 md:tracking-[4px]">
                                <Link to={item.link} className=" text-[#FF4949] hover:text-[#ECB365] duration-500 md:p-16 ">{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </nav>
    )
}

export default NavBar;





{/* <div className="logo">
<Link className="inline-block rounded border border-white  m-5" to="/">
<img src = {S} width={100} height={100} color={"red"} />
</Link>
</div>
<ul className=' hidden md:list-style-none md:flex justify-between w-150 h-full  uppercase text-18 '>
{
    nav_manus.map((item,index)=>{
        return (
            <li  className="text-[#FF4949] ">
            <Link className="inline-block   hover:text-[#ECB365] transition-all  border  hover:border animate-none p-5  tracking-[4px]  w-auto items-center h-[70px]  border-white  rounded hover:animate-bounce m-2" to="/" >{item}</Link>
        </li>
        );
    })
}
</ul>
<svg class="block md:hidden h-10 w-10 text-[#ff4949] border border-white rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" onClick={()=>setIsOpen(!isOpen)}>
<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>

{
    isOpen && (
        <ul className='list-style-none justify-between w-150 h-full  uppercase text-18 '>
        {
            nav_manus.map((item,index)=>{
                return (
                    <li  className="text-[#FF4949] ">
                    <Link className="inline-block   hover:text-[#ECB365] transition-all  border  hover:border animate-none p-5  tracking-[4px]  w-auto items-center h-[70px]  border-white  rounded hover:animate-bounce m-2" to="/" >{item}</Link>
                </li>
                );
            })
        }
    </ul>
    )
}

<svg class="hidden  h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg> */}
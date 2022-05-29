import { Link } from 'react-router-dom';
import S from '../../assets/images/fonts_to_make/S.svg';
const NavBar = ()=>{
    return (
        <div className="navbar">
            <div className="flex justify-around items-center w-full">
                <div className="navbar-logo">
                    <Link className="inline-block rounded border border-white  m-5" to="/">
                    <img src = {S} width={100} height={100} color={"red"} />
                    </Link>
                </div>
                <ul className='list-style-none flex justify-between w-150 h-full  uppercase text-18 '>
                    <li  className="text-[#FF4949] ">
                        <Link className="inline-block   hover:text-[#ECB365] transition-all  border  hover:border animate-none p-5  tracking-[4px]  w-auto items-center h-[70px]  border-white  rounded hover:animate-bounce m-2" to="/" >home</Link>
                    </li>
                    <li className="text-[#FF4949] ">
                        <Link className="inline-block  hover:text-[#ECB365] transition-all   border hover:border animate-none  p-5  tracking-[4px]  w-auto items-center h-[70px]  border-white rounded  hover:animate-bounce m-2" to="#about" >about</Link>
                    </li>
                    <li className="text-[#FF4949] ">
                        <Link className="inline-block  hover:text-[#ECB365] transition-all   border hover:border animate-none  p-5  tracking-[4px] w-auto items-center h-[70px]  border-white rounded  hover:animate-bounce m-2" to="#projects" >projects</Link>
                    </li>
                </ul>
            </div>
            </div>
    )
}

export default NavBar;
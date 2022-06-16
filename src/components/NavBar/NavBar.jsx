import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
const navigation = [
  {name:"home",link:"#"},
  {name:"about",link:"#"},
  {name:"projects",link:"#"},
  {name:"contact",link:"#"},
]


const NavBar = () => {
  const [open, setOpen] = useState (0);

  return (
    <>
              <nav className="flex items-center justify-between p-6 md:p-10  lg:justify-between" aria-label="Global">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="#">
                      <img
                        alt="SABBIR'S HOME"
                        className="h-8 w-auto sm:h-10"
                        src={logo}
                      />
                    </Link>
                  </div>
                  {/* menu items */}
                <div className="hidden flex-col md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.link} className="font-medium text-gray-500 hover:text-gray-900 uppercase">
                      {item.name}
                    </Link>
                  ))}
                </div>



                    {/* mobile menu buttons */}

                    <div className={`${!open?"hidden":""} w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col bg-[#000] md:hidden md:ml-10 md:pr-4 md:space-x-8`}>
                        {navigation.map((item) => (
                          <Link key={item.name} to={item.link} className="font-medium text-[#fff] align-baseline p-5  hover:text-gray-900 uppercase">
                            {item.name}
                          </Link>
                        ))}
                      </div>

                    <div className={`${open?"hidden":"z-10"} transition duration-700 -mr-2 flex-col items-center md:hidden`} onClick={()=>setOpen(!open)}>
                      {
                        [1,2,3].map((num,index)=>(
                          <div key={index} className=' w-8 h-1 bg-primary-50 m-2'></div>
                          ))
                      }
                    </div>
                    <div className={` ${!open?"hidden":"z-10"} transition duration-700 -mr-2 relative items-center md:hidden`} onClick={()=>setOpen(!open)}>
                        <div className='  absolute right-0 w-8 h-1 bg-primary-50 m-2 -rotate-45'></div>
                        <div className=' w-8 h-1 bg-primary-50 m-2 rotate-45'></div>
                    </div>


              </nav>
    </>
  )
}

export default NavBar
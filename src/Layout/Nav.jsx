import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import x from './../assets/download.svg'
export default function Nav() {
    const [padding, setPadding] = useState(true);
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 60 ) {
          setPadding(false);
        } else {
          setPadding(true);
        }
      });
    useEffect(() => {
       const btn=document.querySelector('.btn');
       let open=false;
       btn.addEventListener('click' ,function () {
        if(open)
        {
            document.querySelector('.navUl').classList.add("h-0")
            open=false
        }
        else{
            document.querySelector('.navUl').classList.remove("h-0")
             open=true
        }
       })
    }, [])
    return (
        <>
            <nav className={` border-gray-200 bg-[#2c3e50] fixed top-0 right-0 left-0 ${padding? "py-6":"py-2"} z-40 text-white transition-all duration-300`} >
                <div className='container m-auto px-3 flex flex-row justify-between items-center flex-wrap '>
                        <NavLink className='text-[calc(1.3rem+1vw)] font-bold py-[5px] me-4' to="/home">
                            START FRAMEWORK
                        </NavLink>
                    <button className='btn lg:hidden py-1 px-3 text-[30px] transition-all border-[1px] hover:border-[3px] border-[#000000a6] rounded-md	'>
                        <img className='w-[30px]' src={x} alt="" />
                    </button>
                    <ul className='transition-all duration-500 h-0 navUl origin-top lg:h-auto flex flex-col lg:flex-row text-[16px] font-bold lg:ms-auto w-[100%] lg:w-fit overflow-hidden '>
                        <li className='me-2 uppercase'>
                            <NavLink className="p-2 mt-2 lg:mt-0 inline-block" to="/about">about</NavLink>
                        </li>
                        <li className='me-2 uppercase'>
                            <NavLink className="p-2 mt-2 lg:mt-0 inline-block" to="/portfolio">portfolio</NavLink>
                        </li>
                        <li className='me-2 uppercase'>
                            <NavLink className="p-2 mt-2 lg:mt-0 inline-block" to="/contact">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
// basis-auto
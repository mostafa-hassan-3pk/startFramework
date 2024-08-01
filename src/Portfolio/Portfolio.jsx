import { useEffect } from "react"
import a from "./../assets/port1.png"
import b from "./../assets/port2.png"
import c from "./../assets/port3.png"
import { Helmet } from "react-helmet"
export default function Portfolio() {
  useEffect(() => {
    const layout = document.querySelector('.layout')
    const layoutImg = document.querySelector('.layout img')
    const inners = document.querySelectorAll('.inner')
    inners.forEach(element => {
      element.addEventListener('click', function () {
        const x = element.querySelector("img").getAttribute('src');
        layout.classList.remove('hidden')
        layout.classList.add('flex')
        layoutImg.setAttribute('src', x)
      })
    });
    layout.addEventListener('click', function (e) {
      if (e.target != layoutImg) {
        layout.classList.remove('flex')
        layout.classList.add('hidden')
      }
    })
  }, [])
  return (
    <>
    <Helmet>
            <title>Portfolio</title>
        </Helmet>
      <main className="min-h-[calc(100vh-100px)] mt-[94px]">
        <div className="text-center  header  mb-4  pt-6 text-[#2c3e50]">
          <h2 className="leading-tight">portfolio component
          </h2>
          <div className="flex flex-row justify-center items-center ">
            <div className="w-[80px] h-[4px] me-3 bg-[#2c3e50] my-auto rounded-md "></div>
            <i className="fa-solid fa-star">
            </i>
            <div className="w-[80px] h-[4px] ms-3 bg-[#2c3e50] my-auto rounded-md "></div>
          </div>
        </div>
        <div className=" gallery container m-auto mt-[-48px] mb-6">
          <div className="flex flex-wrap ">
            <div className="inner md:w-1/2 lg:w-1/3 px-6 mt-12  ">
              <div className=" rounded-lg overflow-hidden relative group">
                <img className="card-img w-[100%]" src={a} alt="" />
                <div className="hav w-[100%] h-[100%] absolute top-0 flex justify-center items-center text-[96px] text-white bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 transition-all duration-[.6s]  ">
                  <i className="fa-solid fa-plus "></i>
                </div>
              </div>
            </div>
            <div className="inner md:w-1/2 lg:w-1/3 px-6 mt-12  ">
              <div className=" rounded-lg overflow-hidden relative group">
                <img className="card-img w-[100%]" src={b} alt="" />
                <div className="hav w-[100%] h-[100%] absolute top-0 flex justify-center items-center text-[96px] text-white bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 transition-all duration-[.6s]  ">
                  <i className="fa-solid fa-plus "></i>
                </div>
              </div>
            </div>
            <div className="inner md:w-1/2 lg:w-1/3 px-6 mt-12  ">
              <div className=" rounded-lg overflow-hidden relative group">
                <img className="card-img w-[100%]" src={c} alt="" />
                <div className="hav w-[100%] h-[100%] absolute top-0 flex justify-center items-center text-[96px] text-white bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 transition-all duration-[.6s]  ">
                  <i className="fa-solid fa-plus "></i>
                </div>
              </div>
            </div>
            <div className="inner md:w-1/2 lg:w-1/3 px-6 mt-12  ">
              <div className=" rounded-lg overflow-hidden relative group">
                <img className="card-img w-[100%]" src={a} alt="" />
                <div className="hav w-[100%] h-[100%] absolute top-0 flex justify-center items-center text-[96px] text-white bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 transition-all duration-[.6s]  ">
                  <i className="fa-solid fa-plus "></i>
                </div>
              </div>
            </div>
            <div className="inner md:w-1/2 lg:w-1/3 px-6 mt-12  ">
              <div className=" rounded-lg overflow-hidden relative group">
                <img className="card-img w-[100%]" src={b} alt="" />
                <div className="hav w-[100%] h-[100%] absolute top-0 flex justify-center items-center text-[96px] text-white bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 transition-all duration-[.6s]  ">
                  <i className="fa-solid fa-plus "></i>
                </div>
              </div>
            </div>
            <div className="inner md:w-1/2 lg:w-1/3 px-6 mt-12  ">
              <div className=" rounded-lg overflow-hidden relative group">
                <img className="card-img w-[100%]" src={c} alt="" />
                <div className="hav w-[100%] h-[100%] absolute top-0 flex justify-center items-center text-[96px] text-white bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 transition-all duration-[.6s]  ">
                  <i className="fa-solid fa-plus "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="layout  justify-center items-center fixed top-0 bottom-0 w-[100%] h-[100vh] bg-[#0d6efd] bg-opacity-25 z-50 hidden">
        <img className="min-w-[500px] w-[45%]" src='' alt="" />
      </div>
    </>
  )
}

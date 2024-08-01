import { useEffect } from "react"
import { Helmet } from "react-helmet"
export default function Contact() {
  useEffect(() => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(element => {
      element.addEventListener('input', function () {
        if (element.value == "") {
          element.previousElementSibling.classList.remove("top-[-10px]")
          element.previousElementSibling.classList.add("top-[20px]")
        }
        else {
          element.previousElementSibling.classList.add("top-[-10px]")
          element.previousElementSibling.classList.remove("top-[20px]")
        }
      })
    })
  }, [])
  return (
    <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
      <main className="min-h-[calc(100vh-100px)] mt-[94px]">
        <div className="text-center  header  mb-4 pt-6 text-[#2c3e50]">
          <h2 className="leading-tight">conatct section
          </h2>
          <div className="flex flex-row justify-center items-center ">
            <div className="w-[80px] h-[4px] me-3 bg-[#2c3e50] my-auto rounded-md "></div>
            <i className="fa-solid fa-star">
            </i>
            <div className="w-[80px] h-[4px] ms-3 bg-[#2c3e50] my-auto rounded-md "></div>
          </div>
        </div>
        <div className="container m-auto">
          <form className="max-w-[580px] mx-auto p-4 pb-8">
            <div className="relative  pt-5 mb-6">
              <label htmlFor="userName" className="absolute top-[20px] transition-all duration-[600ms] text-[#1abc9c] ">userName : </label>
              <input id="userName" type="text" placeholder="userName" name="userName" className="p-3 relative border-0  rounded-lg w-[100%]" />
            </div>
            <div className="relative  pt-5 mb-6">
              <label htmlFor="userAge" className="absolute top-[20px] transition-all duration-[600ms] text-[#1abc9c] ">userAge : </label>
              <input id="userAge" type="text" placeholder="userAge" name="userAge" className=" p-3 relative border-0  rounded-lg w-[100%]" />
            </div>
            <div className="relative  pt-5 mb-6">
              <label htmlFor="userEmail" className="absolute top-[20px] transition-all duration-[600ms] text-[#1abc9c] ">userEmail : </label>
              <input id="userEmail" type="text" placeholder="userEmail" name="userEmail" className=" p-3 relative border-0  rounded-lg w-[100%]" />
            </div>
            <div className="relative  pt-5 mb-6">
              <label htmlFor="userPassword" className="absolute top-[20px] transition-all duration-[600ms] text-[#1abc9c] ">userPassword : </label>
              <input id="userPassword" type="text" placeholder="userPassword" name="userPassword" className=" p-3 relative border-0  rounded-lg w-[100%]" />
            </div>
            <button className=" text-white bg-[#1abc9c] py-2 px-3 rounded-md " > send Message </button>
          </form>
        </div>
      </main>
    </>
  )
}

import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
    <Helmet>
            <title>About</title>
        </Helmet>
    <main className="flex justify-center items-center min-h-[calc(100vh-100px)] mt-[86px] bg-[#1abc9c] text-white">
      <div className="sm:max-w-[90%] md:max-w-[80%]">
        <div className="text-center  header   mb-4 pt-6">
          <h2 className="leading-tight">about component
          </h2>
          <div className="flex flex-row justify-center items-center">
            <div className="w-[80px] h-[4px] me-3 bg-white my-auto rounded-md "></div>
            <i className="fa-solid fa-star">
            </i>
            <div className="w-[80px] h-[4px] ms-3 bg-white my-auto rounded-md "></div>
          </div>
        </div>
        <div className="px-11 flex flex-col sm:flex-row justify-center items-center ">
          <div className="mb-4 px-3 sm:ps-11"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p></div>
          <div className="mb-4 px-3 pe-11"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p></div>
        </div>
      </div>
    </main>
    </>
  )
}

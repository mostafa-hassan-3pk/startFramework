import { Helmet } from "react-helmet"
import x from "./../assets/avataaars.svg"
export default function Home() {
    return <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <main className="flex flex-col justify-center items-center min-h-[calc(100vh-100px)] mt-[86px] bg-[#1abc9c] text-white">
            <div className="w-[250px] mb-4">
                <img src={x} alt="" />
            </div>
            <div className="text-center  header  mb-4 pt-6">
                <h2 className="leading-tight">start Framework
                </h2>
                <div className="flex flex-row justify-center items-center ">
                    <div className="w-[80px] h-[4px] me-3 bg-white my-auto rounded-md "></div>
                    <i className="fa-solid fa-star">
                    </i>
                    <div className="w-[80px] h-[4px] ms-3 bg-white my-auto rounded-md "></div>
                </div>
            </div>
            <div>
                <p>Graphic Artist - Web Designer - Illustrator
                </p>
            </div>
        </main>
    </>
}
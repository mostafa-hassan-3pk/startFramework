import { useEffect } from "react"
export default function Footer() {
    useEffect(() => {
    console.log('footer');
    }, [])
    return (
        <>
            <div className='allfooter text-center text-white'>
                <div className='footer bg-[#2c3e50] p-10 '>
                    <div className="card-group m-4  sm:flex flex-row justify-between">
                        <div className="card mb-3 p-4 sm:w-1/3">
                            <h4>
                                LOCATION
                            </h4>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="card mb-3 p-4 sm:w-1/3">
                            <h4>
                                AROUND THE WEB
                            </h4>
                            <div>
                                <div>
                                    <i className="fa-brands fa-facebook mx-1 icon" />
                                    <i className="fa-brands fa-twitter mx-1 icon" />
                                    <i className="fa-brands fa-linkedin-in mx-1 icon" />
                                    <i className="fa-solid fa-globe mx-1 icon" />
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 p-4 sm:w-1/3">
                            <h4>
                                ABOUT FREELANCER
                            </h4>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2.5 bg-[#1a252f]'>
                    <p className='pt-2.5 mb-4  '>Copyright © Your Website 2021</p>
                </div>
            </div>
        </>
    )
}

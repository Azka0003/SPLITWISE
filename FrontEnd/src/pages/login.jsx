

import google from "../images/google.png"
import Header from "../components/header";
import Footer from "../components/footer";

export default function Login() {
    return (
        <div >

            <Header />

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-5 w-130 rounded-xl shadow-lg ">
                    {/* <div className="bg-amber-100 p-5 border w-full max-w-md rounded-xl"> */}
                    <h1 className="text-3xl">Log in</h1>
                    <br />
                    <form action="" className="flex flex-col">
                        <label htmlFor="email">Email address</label>
                        <input type="text" className="border border-gray-400  p-1" />
                        <label htmlFor="email">Password</label>
                        <input type="text" className=" border border-gray-400 p-1 " />

                        <br />

                        <div className="border border-gray-300 bg-gray-50 p-4 rounded-lg flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#1CC29F] text-white flex items-center justify-center rounded-full">
                                    ✓
                                </div>
                                <span className="text-gray-700">Success!</span>
                            </div>

                            <span className="text-sm text-gray-500">Cloudflare</span>
                        </div>

                        <button type="submit" className="w-full bg-[#1CC29F] text-white p-1 rounded-md border border-gray-400 border-b-2 hover:border border-gray-400">Log in</button>
                    </form>

                    {/* <a href="#" className=" text-emerald-600 block text-center">Forgot your passowrd?</a> */}
                    <div className="text-center">
                        <a href="#" className="text-[#1CC29F] block pt-2">
                            Forgot your password?
                        </a>
                    </div>

                    <div className="flex items-center my-4">
                        <div className="grow border-t border-gray-300"></div>
                        <span className="mx-3 text-gray-500 text-sm">or</span>
                        <div className=" grow border-t border-gray-300"></div>
                    </div>

                    <button type="button" className="border border-gray-400 border-b-2 w-full p-1 text-black rounded-md hover:border border-gray-400 flex  items-center justify-center">

                        <img src={google} alt="goolge-logo" className=" w-7 pr-2" />
                        Sign in with Google</button>
                </div>
            </div>

   <Footer/>
        </div>
    )
}

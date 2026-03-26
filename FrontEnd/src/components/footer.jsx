import { Link } from "react-router-dom";

import apple from "../images/apple.png";
import googleplay from "../images/googleplay.png";



export default function footer() {
    return (
        <div className="m-2 mt-20 ">
            {/* <div className="flex flex-col lg:flex-row"> */}
            <div className="">
                <div className="flex justify-between">
                    <div>
                        <p className="text-[#1CC29F] font-bold mb-2">Splitwise</p>
                        <Link to="/about" className="block text-gray-600">About</Link>
                        <Link to="/press" className="block text-gray-600">Press</Link>
                        <Link to="/blog" className="block text-gray-600">Blog</Link>
                        <Link to="/jobs" className="block text-gray-600">Jobs</Link>
                        <Link to="/calculators" className="block text-gray-600">Calculators</Link>
                        <Link to="/api" className="block text-gray-600">API</Link>
                    </div>
                    <div>
                        <p className="text-orange-500 font-bold mb-2">Account</p>
                        <Link to="/login" className="block text-gray-600">Log in</Link>
                        <Link to="/signup" className="block text-gray-600">Sign up</Link>
                        <Link to="/reset-password" className="block text-gray-600">Reset password</Link>
                        <Link to="/settings" className="block text-gray-600">Settings</Link>
                        <Link to="/pro" className="block text-gray-600">Splitwise Pro</Link>
                        <Link to="/pay" className="block text-gray-600">Splitwise Pay</Link>
                        <Link to="/card" className="block text-gray-600">Splitwise Card</Link>
                    </div>
                    <div className="">
                        <p className="text-black font-bold mb-2">More</p>
                        <Link to="/contact" className="block text-gray-600">Contact us</Link>
                        <Link to="/faq" className="block text-gray-600">FAQ</Link>
                        <Link to="/site-status" className="block text-gray-600">Site status</Link>
                        <Link to="/terms" className="block text-gray-600">Terms of Service</Link>
                        <Link to="/privacy" className="block text-gray-600">Privacy Policy</Link>
                        <Link to="/coastal" className="block text-gray-600">Coastal</Link>
                        <Link to="/community-bank" className="block text-gray-600">Community Bank</Link>
                        <Link to="/community-bank-privacy" className="block text-gray-600">Privacy Policy</Link>
                    </div>
                </div>

                {/* App Badges */}
                <div className="flex justify-center mt-8 gap-4 ">

                    {/* Google Play */}
                    <a href="https://play.google.com" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="48" viewBox="0 0 160 48">
                            <rect width="160" height="48" rx="8" fill="black" />
                            <image href={googleplay} x="8" y="9" width="28" height="28" />
                            <text x="46" y="18" fill="white" fontSize="9" fontFamily="Arial">GET IT ON</text>
                            <text x="46" y="34" fill="white" fontSize="15" fontFamily="Arial" fontWeight="bold">Google Play</text>
                        </svg>
                    </a>

                    {/* App Store */}
                    <a href="https://apps.apple.com" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="48" viewBox="0 0 160 48">
                            <rect width="160" height="48" rx="8" fill="black" />
                            <image href={apple} x="8" y="9" width="28" height="28" />
                            <text x="46" y="18" fill="white" fontSize="9" fontFamily="Arial">Download on the</text>
                            <text x="46" y="34" fill="white" fontSize="15" fontFamily="Arial" fontWeight="bold">App Store</text>
                        </svg>
                    </a>
                </div>

            </div>

            <p className="text-center mt-4 text-gray-500">Made with :) in Providence, RI, USA</p>
        </div>


    )
}


// write when to use link and when to use a
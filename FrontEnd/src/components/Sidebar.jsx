import { Link, useLocation } from "react-router-dom";
import logo4 from "../images/logo4.png";
import { useState } from "react";
import InviteEmailModal from "../modals/inviteEmailModal";


export default function Sidebar() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    return (
        <aside className="w-[22%] pt-1 pr-2">

            {/* Dashboard - active */}
            <Link to="/dashboard"
                className={`flex items-center cursor-pointer m-0.5 p-0.5 gap-0.5 hover:bg-gray-100 
                   ${location.pathname === "/dashboard" ? "text-[#1CC29F] border-l-4 border-[#1CC29F] font-semibold" : "text-gray-500 hover:text-gray-700"}
                `}>
                <img src={logo4} alt="splitwise-logo" className="w-[clamp(0.6rem,1.2vw,1rem)] h-[clamp(0.6rem,1.2vw,1rem)]" />
                <span className="text-[clamp(0.5rem,1.2vw,1rem)]">Dashboard</span>
            </Link>


            {/* Recent activity */}
            <Link to="/activity"
                className={`flex items-center m-0.5 p-0.5  cursor-pointer gap-0.5 hover:bg-gray-100
                 ${location.pathname === "/activity" ? "text-[#1CC29F] border-l-4 border-[#1CC29F] font-semibold" : "text-gray-500 hover:text-gray-700"}
                `}>
                <span className="text-[clamp(0.4rem,1vw,0.875rem)]">🚩</span>
                <span className="text-[clamp(0.4rem,1.2vw,1rem)]">Recent activity</span>
            </Link>

            {/* All expenses */}
            <Link to="/expenses"
                className={`flex items-center m-0.5 p-0.5 cursor-pointer gap-0.5 hover:bg-gray-100
                ${location.pathname === "/expenses" ? "text-[#1CC29F] border-l-4 border-[#1CC29F] font-semibold" : "text-gray-500 hover:text-gray-700"}
                `}>
                <span className="text-[clamp(0.4rem,1vw,0.875rem)]">☰</span>
                <span className="text-[clamp(0.4rem,1.2vw,1rem)]">All expenses</span>
            </Link>

            {/* GROUPS */}
            <div>
                <p className="text-gray-400 uppercase text-[clamp(0.3rem,0.8vw,0.75rem)] font-semibold p-0.5 flex justify-between items-center m-1 bg-gray-100 border-b-[1px] border-gray-300 hover:bg-gray-200 hover:text-gray-500">
                    Groups
                    {/* <span className="normal-case font-normal cursor-pointer text-[clamp(0.3rem,0.8vw,0.75rem)]">+ add</span> */}
                    <Link to="/groups/new" className="normal-case font-normal cursor-pointer text-[clamp(0.3rem,0.8vw,0.75rem)] hover:text-[#1CC29F] hover:font-semibold">+ add</Link>
                </p>
                <p className="text-gray-400 text-[clamp(0.2rem,0.9vw,0.8rem)] px-2">You do not have any groups yet.</p>
            </div>



            {/* FRIENDS */}
            <div>
                <p className="text-gray-400 uppercase text-[clamp(0.3rem,0.8vw,0.75rem)] font-semibold p-0.5 flex justify-between items-center
                 m-1 bg-gray-100 border-b-[1px] border-gray-300 hover:bg-gray-200 hover:text-gray-500 ">
                    Friends
                    <span onClick={() => setShowModal(true)}
                        className="normal-case font-normal cursor-pointer text-[clamp(0.3rem,0.8vw,0.75rem)]
                         hover:text-[#1CC29F] hover:font-semibold" >+ add</span>
                    {/* Modal call */}
                    {showModal && <InviteEmailModal onClose={() => setShowModal(false)} />}
                </p>
                <p className="text-gray-400 text-[clamp(0.2rem,0.9vw,0.8rem)] px-2.5 m-1 hover:bg-gray-200">Hiding accounts settled for more than 30 days.show</p>
            </div>

            {/* Invite friends */}
            <div className=" m-1 border border-gray-200">
                <p className=" bg-[#1CC29F] text-white text-[clamp(0.3rem,1vw,0.875rem)] font-bold px-2 py-1 
                 [text-shadow:0px_-0.6px_0.4px_rgba(0,0,0,0.3)] ">
                    Invite friends
                </p>
                <div className="pl-2 pr-2 pb-2">
                    <input
                        type="email"
                        placeholder="Enter an email address"
                        className="w-full border border-gray-300 text-[clamp(0.2rem,0.9vw,0.8rem)] px-2 py-1 outline-none
                         rounded-[2px] shadow-inner lg:mt-1.5 lg:mb-1.5"
                    />
                    <button className="border border-gray-300 border-b border-b-gray-500 text-[clamp(0.2rem,0.9vw,0.8rem)] 
                    px-2 py-1 cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-[2px]">
                        Send invite
                    </button>
                </div>
            </div>
        </aside>
    );
}







// import { Link, useLocation } from "react-router-dom";
// import logo4 from "../images/logo4.png";

// export default function Sidebar({ activePage, setActivePage }) {
//     return (
//         <aside className="w-[22%] pt-1 pr-2">

//             {/* Dashboard - active */}
//             <p onClick={() => setActivePage("dashboard")}
//                 className={`flex items-center cursor-pointer m-0.5 p-0.5 gap-0.5 hover:bg-gray-100
//                  ${activePage === "dashboard" ? "text-[#1CC29F] border-l-4 border-[#1CC29F] font-semibold" : "text-gray-500 hover:text-gray-700"}
//                 `}>
//                 <img src={logo4} alt="splitwise-logo" className="w-[clamp(0.6rem,1.2vw,1rem)] h-[clamp(0.6rem,1.2vw,1rem)]" />
//                 <span className="text-[clamp(0.5rem,1.2vw,1rem)]">Dashboard</span>
//             </p>


//             {/* Recent activity */}
//             <p onClick={() => setActivePage("activity")}
//                 className={`flex items-center m-0.5 p-0.5  cursor-pointer gap-0.5 hover:bg-gray-100
//                 ${activePage === "activity" ? "text-[#1CC29F] border-l-4 border-[#1CC29F] font-semibold" : "text-gray-500 hover:text-gray-700"}
//                 `}>
//                 <span className="text-[clamp(0.4rem,1vw,0.875rem)]">🚩</span>
//                 <span className="text-[clamp(0.4rem,1.2vw,1rem)]">Recent activity</span>
//             </p>

//             {/* All expenses */}
//             <p onClick={() => setActivePage("expenses")}
//                 className={`flex items-center m-0.5 p-0.5 cursor-pointer gap-0.5 hover:bg-gray-100
//                  ${activePage === "expenses" ? "text-[#1CC29F] border-l-4 border-[#1CC29F] font-semibold" : "text-gray-500 hover:text-gray-700"}
//                 `}>
//                 <span className="text-[clamp(0.4rem,1vw,0.875rem)]">☰</span>
//                 <span className="text-[clamp(0.4rem,1.2vw,1rem)]">All expenses</span>
//             </p>

//             {/* GROUPS */}
//             <div>
//                 <p className="text-gray-400 uppercase text-[clamp(0.3rem,0.8vw,0.75rem)] font-semibold p-0.5 flex justify-between items-center m-1 bg-gray-100 border-b-[1px] border-gray-300 hover:bg-gray-200 hover:text-gray-500">
//                     Groups
//                     <span className="normal-case font-normal cursor-pointer text-[clamp(0.3rem,0.8vw,0.75rem)]">+ add</span>
//                 </p>
//                 <p className="text-gray-400 text-[clamp(0.2rem,0.9vw,0.8rem)] px-2">You do not have any groups yet.</p>
//             </div>



//             {/* FRIENDS */}
//             <div>
//                 <p className="text-gray-400 uppercase text-[clamp(0.3rem,0.8vw,0.75rem)] font-semibold
//                 p-0.5 flex justify-between items-center m-1 bg-gray-100 border-b-[1px] border-gray-300
//                  hover:bg-gray-200 hover:text-gray-500 ">
//                     Friends
//                     <span className="normal-case font-normal cursor-pointer text-[clamp(0.3rem,0.8vw,0.75rem)]">+ add</span>
//                 </p>
//                 <p className="text-gray-400 text-[clamp(0.2rem,0.9vw,0.8rem)] px-2.5 m-1 hover:bg-gray-200">Hiding accounts settled for more than 30 days.show</p>
//             </div>

//             {/* Invite friends */}
//             <div className=" m-1 border border-gray-200">
//                 <p className=" bg-[#1CC29F] text-white text-[clamp(0.3rem,1vw,0.875rem)] font-bold px-2 py-1
//                  [text-shadow:0px_-0.6px_0.4px_rgba(0,0,0,0.3)] ">
//                     Invite friends
//                 </p>
//                 <div className="pl-2 pr-2 pb-2">
//                     <input
//                         type="email"
//                         placeholder="Enter an email address"
//                         className="w-full border border-gray-300 text-[clamp(0.2rem,0.9vw,0.8rem)] px-2 py-1 outline-none
//                          rounded-[2px] shadow-inner"
//                     />
//                     <button className="border border-gray-300 border-b border-b-gray-500 text-[clamp(0.2rem,0.9vw,0.8rem)]
//                     px-2 py-1 cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-[2px]">
//                         Send invite
//                     </button>
//                 </div>
//             </div>
//         </aside>
//     );
// }
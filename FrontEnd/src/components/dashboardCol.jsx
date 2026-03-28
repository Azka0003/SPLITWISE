import dash from "../images/dash.png";
import { useState } from "react";
import AddExpense from "../modals/addExpenseButton";
import SettleUP from "../modals/settleUpButton";
export default function DashboardCol() {

    const [showAddExpense, setshowAddExpense] = useState(false);
    const [showSettleUp, setshowSettleUp] = useState(false);

    return (
        <div className="w-[56%] border-r border-r-gray-300 border-l border-l-gray-300  shadow-[2px_0_9px_rgba(0,0,0,0.1),-2px_0_9px_rgba(0,0,0,0.1)]">

            {/* Top bar */}
            <div className="bg-gray-100 flex justify-between p-2 border-b-[1px] border-gray-200">
                <p className="font-medium text-[clamp(0.5rem,2.2vw,2rem)]">Dashboard</p>
                <div className="flex gap-1">

                    <button className="bg-orange-500 hover:bg-orange-600 px-1.5 rounded-[1px] text-white font-medium border-[1px]
                     border-orange-600  transition-colors duration-200 cursor-pointer text-[clamp(0.3rem,1vw,0.875rem)]"
                        onClick={() => setshowAddExpense(true)}>Add an expense</button>

                    {showAddExpense && <AddExpense onClose={() => setshowAddExpense(false)} />}

                    <button className="bg-[#1CC29F] hover:bg-emerald-600 px-1.5 rounded-[1px] text-white border-[1px]
                     border-emerald-500 block transition-colors duration-200 cursor-pointer text-[clamp(0.3rem,1vw,0.875rem)]"
                    onClick={() => setshowSettleUp(true)}>Settle up</button>

                    {showSettleUp && <SettleUP onClose={() => setshowSettleUp(false)} />}

                </div>
            </div>

            {/* Content area */}
            <div className="m-1 pl-5 pt-3 pr-1 gap-3 flex sm:pl-8 sm:pl-16 sm:pt-6 sm:pr-2 sm:gap-8">
                {/* Image */}
                <div className="shrink-0">
                    <img src={dash} alt="dashboard" className="w-[clamp(3.5rem,11.11vw,10rem)] h-auto" />
                </div>

                {/* Text */}
                <div className="pr-3 pt-2">
                    <p className="font-[640] text-[clamp(0.5rem,2vw,1.8rem)] text-gray-800 leading-tight whitespace-nowrap">
                        You're all settled up.
                    </p>
                    <p className="font-[640] text-[clamp(0.5rem,2vw,1.8rem)] text-gray-800 leading-tight mb-2">
                        Awesome!
                    </p>
                    <p className="text-[clamp(0.4rem,1.2vw,1rem)] text-gray-400 font-[480] ">
                        To add a new expense, click the
                    </p>
                    <p className="text-[clamp(0.4rem,1.2vw,1rem)] text-gray-400 font-[480]">
                        orange "Add an expense" button.
                    </p>
                </div>
            </div>
        </div>
    )
}





// import dash from "../images/dash.png";

// export default function CenterCol() {
//     return (
//         <div className="w-[56%] border-r border-r-gray-300 border-l border-l-gray-300 shadow-[2px_0_9px_rgba(0,0,0,0.1),-2px_0_9px_rgba(0,0,0,0.1)]">

//
//             <div className="bg-gray-100 flex justify-between items-center px-4 py-2 border-b border-gray-200">
//                 <p className="font-semibold text-[clamp(0.8rem,2vw,1.5rem)] text-gray-800">Dashboard</p>
//                 <div className="flex gap-2">
//                     <button className="bg-orange-500 hover:bg-orange-600 px-[clamp(0.4rem,1vw,1rem)] py-[clamp(0.2rem,0.5vw,0.5rem)] rounded text-white font-semibold border border-orange-600 transition-colors duration-200 cursor-pointer text-[clamp(0.4rem,1vw,0.875rem)] shadow-sm">
//                         Add an expense
//                     </button>
//                     <button className="bg-[#1CC29F] hover:bg-emerald-600 px-[clamp(0.4rem,1vw,1rem)] py-[clamp(0.2rem,0.5vw,0.5rem)] rounded text-white font-semibold border border-emerald-500 transition-colors duration-200 cursor-pointer text-[clamp(0.4rem,1vw,0.875rem)] shadow-sm">
//                         Settle up
//                     </button>
//                 </div>
//             </div>

//             {/* Content area */}
//             <div className="bg-white m-3 rounded border border-gray-200 p-6 flex items-center gap-6">
//                 {/* Image */}
//                 <div className="shrink-0">
//                     <img src={dash} alt="dashboard" className="w-[clamp(3rem,8vw,7rem)] h-auto" />
//                 </div>

//                 {/* Text */}
//                 <div>
//                     <p className="font-bold text-[clamp(0.8rem,2vw,1.5rem)] text-gray-800 leading-tight">
//                         You're all settled up.
//                     </p>
//                     <p className="font-bold text-[clamp(0.8rem,2vw,1.5rem)] text-gray-800 leading-tight mb-2">
//                         Awesome!
//                     </p>
//                     <p className="text-[clamp(0.5rem,1.2vw,1rem)] text-gray-500">
//                         To add a new expense, click the orange "Add an expense" button.
//                     </p>
//                 </div>
//             </div>

//         </div>
//     )
// }


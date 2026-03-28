import activity2 from "../images/activity2.png";
import allEx from "../images/allEx.png";
import { useState } from "react";
import AddExpense from "../modals/addExpenseButton";
import SettleUP from "../modals/settleUpButton";

export default function ExpensesCol() {

    const [showAddExpense, setshowAddExpense] = useState(false);
    const [showSettleUp, setshowSettleUp] = useState(false);

    return (
        <div className="w-[56%] border-r border-r-gray-300 border-l border-l-gray-300  shadow-[2px_0_9px_rgba(0,0,0,0.1),-2px_0_9px_rgba(0,0,0,0.1)]">

            {/* Top bar */}
            <div className="bg-gray-100 flex justify-between p-2 border-b-[1px] border-gray-200">
                <p className="font-medium text-[clamp(0.5rem,2.2vw,2rem)]">All expenses</p>
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




            <div className="bg-gray-100 p-0.5 border-b-[1px] border-gray-200 text-red-600 text-[6px]">
                date
            </div>

            <div className=" h-auto p-2 border-b-[1px] border-gray-200 flex gap-2">
                <img src={allEx} alt="" className="w-[clamp(1rem,3.33vw,3rem)] h-auto" />
                <p className="text-red-600">here u write data ig from props</p>
            </div>

            <div className="flex p-2 gap-2 border-b-[1px] border-gray-200 ">
                <p className="text-red-600">date</p>
                <img src={activity2} alt="" className="w-[clamp(1rem,3.33vw,3rem)] h-auto" />
                <p className="text-red-600">here u write data ig from props</p>
            </div>

        </div>
    )
}






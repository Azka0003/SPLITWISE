export default function SettleUP({onClose}) {
    return (
        <div className="fixed inset-0 bg-white/70 flex items-start justify-center z-50 pt-12" 
        onClick={onClose}
        >
            <div className="bg-white rounded-lg shadow-xl border-[1px] border-gray-500 w-[300px] sm:w-[350px] sm:p-3.5 md:w-[400px] md:p-4 lg:w-[500px] lg:p-5"
                onClick={(e) => e.stopPropagation()} >

                <div className="w-full bg-[#1CC29F] text-white flex">
                    <p>Settle up</p>
                     <button 
                        onClick={onClose}  
                        className="text-gray-400 hover:text-black cursor-pointer text-sm font-bold">
                        ✕
                    </button>
                </div>

                <div className="">
                    <p>Choose a payment method</p>
                    <button>Record a cash payment</button>
                    <button>PayPal</button>
                    <p className="text-[7px]">When you use a payment service, your payment is shared with that company under its Privacy Policy and Terms, including any fees if applicable. Splitwise charges no additional fees.</p>

                   <div>
                     <button>Cancel</button>
                    <button>Save</button>
                   </div>
                </div>



            </div>
        </div>
    )
}
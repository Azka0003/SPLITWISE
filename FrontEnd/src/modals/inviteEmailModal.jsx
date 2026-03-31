import logo5 from "../images/logo5.png";

export default function InviteEmailModal({ onClose }) {
    return (
        
        <div 
            className="fixed inset-0 bg-white/70 flex items-start justify-center z-50 pt-12"
            onClick={onClose}  
        >
           
            <div 
                className="bg-white rounded-lg shadow-xl border-[1px] border-gray-500 w-[300px] p-3 sm:w-[350px] sm:p-3.5 md:w-[400px] md:p-4 lg:w-[500px] lg:p-5"
                onClick={(e) => e.stopPropagation()}  
            >
                
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <img src={logo5} className="w-4 h-4 md:w-5 md:h-5" />
                        <h2 className="text-sm font-semibold md:text-lg">Invite friends</h2>
                    </div>
                    <button 
                        onClick={onClose}  
                        className="text-gray-400 hover:text-black cursor-pointer text-sm font-bold">
                        ✕
                    </button>
                </div>

                {/* Input */}
                <div className="border border-gray-300 rounded px-3 py-2 flex items-center gap-2">
                    <span className="text-gray-400 text-[12px] sm:text-sm md:text-[16px]">To:</span>
                    <input 
                        type="email"
                        placeholder="Enter names or email addresses"
                        className="flex-1 outline-none text-[13px] sm:text-sm md:text-[16px]"
                        autoFocus
                    />
                </div>

                {/* Button */}
                <div className="flex justify-end mt-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded cursor-pointer text-[12px] font-semibold sm:text-sm md:text-[16px]">
                        Send invites and add friends
                    </button>
                </div>

            </div>
        </div>
    )
}



// write about inset inset-0 and fixed  e.stopPropagation()


// **Inset/top tab dete hain jab position change karni ho:**
// ```
// fixed           → jahan tha wahi chipka
// fixed top-0     → upar chipka
// fixed bottom-0  → neeche chipka
// fixed inset-0   → poori screen cover
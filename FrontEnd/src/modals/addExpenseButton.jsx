export default function AddExpense({onClose}) {
    return (
        <div className="fixed inset-0 bg-white/70 flex items-start justify-center z-50 pt-12" 
        onClick={onClose}
        >
            <div className="bg-white rounded-lg shadow-xl border-[1px] border-gray-500 w-[300px] p-3 sm:w-[350px] sm:p-3.5 md:w-[400px] md:p-4 lg:w-[500px] lg:p-5"
                onClick={(e) => e.stopPropagation()} >

                <header className="w-full bg-[#1CC29F] text-white border-2 border-b-gray-700">
                    Add an expense
                </header>

                <div className="border-2 border-b-gray-700">
                     <span className="text-gray-400 text-[12px] sm:text-sm md:text-[16px]">With you and:</span>
                    <input 
                        type="email"
                        placeholder="Enter names or email addresses"
                        className="flex-1 outline-none text-[13px] sm:text-sm md:text-[16px]"
                        autoFocus
                    />
                </div>

                <div className="flex border-2 border-b-gray-700" >
                    <button>Cancel</button>
                    <button>Save</button>
                </div>

            </div>
        </div>
    )
}
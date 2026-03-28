

// import logo3 from "../images/logo3.png";

// export default function HeaderDash() {
//   return (
//    <header className=" w-full overflow-hidden bg-[#1CC29F] "  >
//     <div className="max-w-[1024px] mx-auto w-full flex justify-between items-center">
//          <img src={logo3} alt="logo" className=" w-[clamp(2rem,15vw,8rem)]" />
//         <span className="text-[clamp(0.5rem,1.6vw,1.5rem)]">Azka</span>
//     </div>
//    </header>
//   );
// }



import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo3 from "../images/logo3.png";

export default function HeaderDash() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="w-full bg-[#1CC29F]">
            <div className="max-w-[1024px] mx-auto w-full flex justify-between items-center">

                <img src={logo3} alt="logo" className="w-[clamp(2rem,15vw,8rem)] h-auto pl-0.5" />

                {/* Dropdown */}
                <div className="relative" ref={dropdownRef}>

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-1 text-white font-semibold cursor-pointer p-0.5 "
                    >
                        {/* Avatar circle */}
                        <div className="aspect-square w-[clamp(18px,2.6vw,32px)]
                         rounded-full bg-gray-700 flex items-center justify-center text-white text-[clamp(0.5rem,0.98vw,0.875rem)] ">
                            A
                        </div>
                        <span className="text-[clamp(0.5rem,1.2vw,1rem)]">Azka</span>

                        <ChevronDown
                            className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}
                                         w-[clamp(0.75rem,1.5vw,1.25rem)] h-[clamp(0.5rem,1.5vw,1rem)]`}
                        />
                    </button>

                    {/* Dropdown list */}
                    {open && (
                        <ul className="absolute top-full right-0 mt-2 w-52 bg-white rounded shadow-lg z-50 overflow-hidden">
                            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700">Your account</li>
                            <li className="px-4 py-3 hover:bg-[#1CC29F] hover:text-white cursor-pointer text-gray-700">Create a group</li>
                            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700">Fairness calculators</li>
                            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700">Contact support</li>
                            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-red-500">Log out</li>
                        </ul>
                    )}

                </div>
            </div>
        </header>
    );
}


// if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// ```
// → `dropdownRef.current` = hamara dropdown div exist karta hai?
// → `e.target` = user ne jahan click kiya woh element
// → `.contains()` = kya woh click hamari div ke **andar** hai?
// → `!` = andar **nahi** hai?
// ```
// agar div exist kare + click bahar ho → band karo
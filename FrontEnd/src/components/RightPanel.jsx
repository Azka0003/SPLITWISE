import appstorebutton from "../images/appstorebutton.png";
import googleplaybutton from "../images/googleplaybutton.png";

export default function RightPanel() {
    return (
        <aside className="p-2 w-[22%]">

            <p className="text-gray-400 uppercase font-semibold text-[clamp(0.3rem,1.2vw,1rem)] whitespace-nowrap">
                Splitwise on the go
            </p>

            <p className="text-[clamp(0.3rem,1.2vw,1rem)]">
                <span className=" whitespace-nowrap block" > Get the free Splitwise app and</span>
                <span className=" whitespace-nowrap block">add IOUs from anywhere:</span>
            </p>

            <div className="mt-2 flex flex-col gap-1.5">

                <a href="https://play.google.com" target="_blank">
                    <img src={googleplaybutton} alt="" className="w" />

                </a>

                <a href="https://apps.apple.com" target="_blank">
                    <img src={appstorebutton} alt="" className="bg-white" />
                </a>

            </div>

        </aside>

        //         <aside className="p-2 w-[22%] overflow-hidden min-w-0">

        //   <p className="text-gray-400 uppercase font-semibold text-[clamp(0.3rem,1vw,0.875rem)] truncate">
        //     Splitwise on the go
        //   </p>

        //   <p className="text-[clamp(0.3rem,1vw,0.875rem)]">
        //     <span className="block truncate">Get the free Splitwise app and</span>
        //     <span className="block truncate">add IOUs from anywhere:</span>
        //   </p>

        //   <div className="mt-4 space-y-3">
        //     <a href="https://play.google.com" target="_blank">
        //       <div className="bg-black text-white rounded-lg flex items-center gap-2 px-2 py-2">
        //         <img src={googleplay} className="h-[clamp(1rem,2vw,1.5rem)] shrink-0" />
        //         <div className="min-w-0">
        //           <p className="text-[clamp(0.5rem,0.8vw,0.75rem)] truncate">GET IT ON</p>
        //           <p className="text-[clamp(0.5rem,1vw,0.875rem)] font-semibold truncate">Google Play</p>
        //         </div>
        //       </div>
        //     </a>

        //     <a href="https://apps.apple.com" target="_blank">
        //       <div className="bg-black text-white rounded-lg flex items-center gap-2 px-2 py-2">
        //         <img src={apple} className="h-[clamp(1rem,2vw,1.5rem)] shrink-0" />
        //         <div className="min-w-0">
        //           <p className="text-[clamp(0.5rem,0.8vw,0.75rem)] truncate">Download on the</p>
        //           <p className="text-[clamp(0.5rem,1vw,0.875rem)] font-semibold truncate">App Store</p>
        //         </div>
        //       </div>
        //     </a>
        //   </div>
        // </aside>
    );
}


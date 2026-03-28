import HeaderDash from "../components/headerDash";
import RightPanel from "../components/RightPanel";
import Sidebar from "../components/Sidebar";
import DashboardCol from "../components/dashboardCol";

export default function Dashboard() {

    return (
        <div className="w-full min-h-screen">
            <HeaderDash />
            <div className=" max-w-[1024px] mx-auto w-full flex justify-between items-center min-h-screen ">
                <div className="flex w-full min-h-screen">
                    <Sidebar/>     
                    <DashboardCol />
                    <RightPanel/>
                </div>
            </div>
        </div>
    )
}









// import HeaderDash from "../components/headerDash";
// import RightPanel from "../components/RightPanel";
// import Sidebar from "../components/Sidebar";
// import CenterCol from "../components/center-col";
// import Activity from "../components/RecentActivity";
// import Expenses from "../components/AllExpenses";
// import { useState } from "react";

// export default function Dashboard() {

//     const [activePage, setActivePage] = useState("dashboard");

//     return (
//         <div className="w-full min-h-screen">
//             <HeaderDash />
//             <div className=" max-w-[1024px] mx-auto w-full flex justify-between items-center min-h-screen ">
//                 <div className="flex w-full min-h-screen">
//                     <Sidebar activePage={activePage} setActivePage={setActivePage}/>
                   
//                     {activePage === "dashboard" && <CenterCol />}
//                     {activePage === "activity" && <Activity />}
//                     {activePage === "expenses" && <Expenses />}


//                     <RightPanel/>
//                 </div>
//             </div>
//         </div>
//     )
// }




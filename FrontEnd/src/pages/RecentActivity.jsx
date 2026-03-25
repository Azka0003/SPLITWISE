import HeaderDash from "../components/headerDash";
import RightPanel from "../components/RightPanel";
import Sidebar from "../components/Sidebar";
import ActivityCol from "../components/activityCol";

export default function RecentActivity() {

    return (
        <div className="w-full min-h-screen">
            <HeaderDash />
            <div className=" max-w-[1024px] mx-auto w-full flex justify-between items-center min-h-screen ">
                <div className="flex w-full min-h-screen">
                    <Sidebar/>     
                    <ActivityCol/>
                    <RightPanel/>
                </div>
            </div>
        </div>
    )
}


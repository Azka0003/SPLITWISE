import activity from "../images/activity.png";
import activity2 from "../images/activity2.png";
export default function ActivityCol() {
    return (
        <div className="w-[56%] border-r border-r-gray-300 border-l border-l-gray-300  shadow-[2px_0_9px_rgba(0,0,0,0.1),-2px_0_9px_rgba(0,0,0,0.1)]">

            {/* Top bar */}
            <div className="bg-gray-100 flex justify-between p-2 border-b-[1px] border-gray-200">
                <p className="font-medium text-[clamp(0.5rem,2.2vw,2rem)]">Recent activity</p>
            </div>

            <div className="border-b border-b-gray-400 flex gap-3 p-4">
                <img src={activity} alt="" className="w-[clamp(1rem,3.33vw,3rem)] h-auto" />
                <div className="p-2">
                    <p className="text-red-600">here u write data ig from props</p>
                </div>
            </div>

              <div className="border-b border-b-gray-400 flex gap-3 p-4">
                <img src={activity2} alt="" className="w-[clamp(1rem,3.33vw,3rem)] h-auto" />
                  <div className="p-2">
                    <p className="text-red-600">here u write data ig from props</p>
                </div>
            </div>
        </div>
    )
}





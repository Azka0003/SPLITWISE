import { Link } from "react-router-dom";
import logo from "../images/splitwise-logo.png";

export default function Header() {
    return (
        <header className="flex justify-between items-center m-1">
            <img className="w-40" src={logo} alt="Splitwise Logo" />

            <div className="flex gap-4">
                <button className="px-4 py-2">Log in</button>
                <Link to="/signup" className="px-4 py-2 bg-[#1CC29F] rounded-sm">
                    Sign up
                </Link>
            </div>
        </header>
    )
}
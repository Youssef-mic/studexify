import { ShoppingCart, Clock, HelpCircle } from "react-feather";
import Link from "next/link"
function NavBar({ activeTab, setActiveTab }) {
    return ( 
    <div className="fixed top-0 left-0 h-screen w-24 flex flex-col m-0 bg-ultradark shadow-md px-7">
        <Clock size={36} className="mb-16 mt-9" onClick={() => setActiveTab("Pomodoro")}/>
        <ShoppingCart size={36} className="mb-[70vh]" onClick={() => setActiveTab("Shop")}/>
        <Link href="./help">
            <HelpCircle size={36} className="mb-9"/>
        </Link>
    </div> 
    );
}

export default NavBar;
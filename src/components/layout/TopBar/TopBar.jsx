import { RxHamburgerMenu as HamburgerIcon } from "react-icons/rx";
import "./TopBar.css";

export default function TopBar() {
    return (
        <div className='top-bar'>
            <h1>Lorry Collection Load Tracker</h1>
            <HamburgerIcon className="hamburger-icon" />
        </div>
    )
}

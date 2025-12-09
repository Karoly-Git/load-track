import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink to="/" end>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reports">
                        Reports
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

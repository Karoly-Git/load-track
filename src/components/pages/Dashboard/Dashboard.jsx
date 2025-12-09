import Button from '../../ui/Button/Button';
import { GoPlus as PlusIcon } from "react-icons/go";

import "./Dashboard.css";

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard-head'>
                <h2>Lorry Status</h2>
                <Button icon={PlusIcon} text="Add Lorry" />
            </div>
        </div>
    )
}

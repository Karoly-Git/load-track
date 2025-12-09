import { useState } from "react";
import "./AddLorryForm.css";

export default function AddLorryForm({ onSubmit }) {
    const [lorry, setLorry] = useState("");
    const [status, setStatus] = useState("Checked In");
    const [manager, setManager] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            lorry,
            status,
            manager,
            timestamp: new Date().toISOString()
        });

        // Reset form
        setLorry("");
        setStatus("Checked In");
        setManager("");
    };

    return (
        <form className="lorry-form" onSubmit={handleSubmit}>
            <h3>Add New Lorry</h3>

            <label>
                Lorry Number
                <input
                    type="text"
                    value={lorry}
                    onChange={(e) => setLorry(e.target.value)}
                    required
                />
            </label>

            <label>
                Status
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option>Checked In</option>
                    <option>Loading</option>
                    <option>Loaded</option>
                    <option>Checked Out</option>
                </select>
            </label>

            <label>
                Manager
                <input
                    type="text"
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    required
                />
            </label>

            <button type="submit" className="submit-btn">Add</button>
        </form>
    );
}

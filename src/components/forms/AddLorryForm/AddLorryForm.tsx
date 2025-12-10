import { useState } from "react";
import "./AddLorryForm.css";

// 1️⃣ Define exactly what the form outputs
export interface LorryData {
    lorry: string;
    status: "Checked In" | "Loading" | "Loaded" | "Checked Out";
    manager: string;
    timestamp: string;
}

// 2️⃣ Define the props for this component
interface AddLorryFormProps {
    onSubmit: (data: LorryData) => void;
}

export default function AddLorryForm({ onSubmit }: AddLorryFormProps) {
    // 3️⃣ Type your state (inferred automatically here)
    const [lorry, setLorry] = useState("");
    const [status, setStatus] = useState<LorryData["status"]>("Checked In");
    const [manager, setManager] = useState("");

    // 4️⃣ Type the form event
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit({
            lorry,
            status,
            manager,
            timestamp: new Date().toISOString(),
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
                    onChange={(e) =>
                        setStatus(e.target.value as LorryData["status"])
                    }
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

import { useState } from "react";
import "./AddLorryForm.css";

// 1️⃣ Exact payload shape expected by the backend
export interface AddLorryPayload {
    regNum?: string;
    materialName: string;
    customerName: string;
    collectionRefNum: string;
    updatedBy: {
        userId: string;
    };
    comment?: string;
}

// 2️⃣ Props
interface AddLorryFormProps {
    onSubmit: (data: AddLorryPayload) => void;
}

export default function AddLorryForm({ onSubmit }: AddLorryFormProps) {
    // 3️⃣ Form state
    const [regNum, setRegNum] = useState("");
    const [materialName, setMaterialName] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [collectionRefNum, setCollectionRefNum] = useState("");
    const [userId, setUserId] = useState("");
    const [comment, setComment] = useState("");

    // 4️⃣ Submit handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit({
            regNum: regNum || undefined,
            materialName,
            customerName,
            collectionRefNum,
            updatedBy: {
                userId,
            },
            comment: comment || undefined,
        });

        // 5️⃣ Reset form
        setRegNum("");
        setMaterialName("");
        setCustomerName("");
        setCollectionRefNum("");
        setUserId("");
        setComment("");
    };

    return (
        <form className="lorry-form" onSubmit={handleSubmit}>
            <h3>Add New Lorry</h3>

            <label>
                Lorry Registration Number (optional)
                <input
                    type="text"
                    value={regNum}
                    onChange={(e) => setRegNum(e.target.value)}
                />
            </label>

            <label>
                Material Name
                <input
                    type="text"
                    value={materialName}
                    onChange={(e) => setMaterialName(e.target.value)}
                    required
                />
            </label>

            <label>
                Customer Name
                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                />
            </label>

            <label>
                Collection Reference Number
                <input
                    type="text"
                    value={collectionRefNum}
                    onChange={(e) => setCollectionRefNum(e.target.value)}
                    required
                />
            </label>

            <label>
                Updated By (User ID)
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
            </label>

            <label>
                Comment (optional)
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </label>

            <button type="submit" className="submit-btn">
                Add Lorry
            </button>
        </form>
    );
}

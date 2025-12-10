import "./Modal.css";

// 1️⃣ Define props for the Modal
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode; // anything React can render
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    // 2️⃣ Type event handlers explicitly (optional but recommended)
    const handleOverlayClick = () => onClose();

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container" onClick={stopPropagation}>
                <button className="modal-close-btn" onClick={onClose}>
                    ✕
                </button>

                {children}
            </div>
        </div>
    );
}

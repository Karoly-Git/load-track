import "./Button.css";

// 1️⃣ Define props for the Button
export interface ButtonProps {
    icon?: React.ComponentType; // any React component (e.g. icon)
    text: string;
    onClick?: () => void;
}

export default function Button({ icon: Icon, text, onClick }: ButtonProps) {
    return (
        <button className="button" onClick={onClick}>
            {Icon && <Icon />} {text}
        </button>
    );
}

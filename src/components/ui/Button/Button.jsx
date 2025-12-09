import "./Button.css";

export default function Button({ icon: Icon, text }) {
    return (
        <button className="button">
            {Icon && <Icon />} {text}
        </button>
    )
}

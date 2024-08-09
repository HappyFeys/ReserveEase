

type ButtonProps = {
    textColors: string;
    bgColors: string;
    children: React.ReactNode;
    onClick?: () => void;
}

function Button({textColors, bgColors, children, onClick}: ButtonProps) {
    return (
        <button style={{backgroundColor: bgColors, color: textColors}} className="btn" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
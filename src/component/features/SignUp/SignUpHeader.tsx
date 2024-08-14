import logoLight from "./../../../../src/assets/Logo/ReservEase_light.png"

type SignUpHeaderProps = {
    children: React.ReactNode
}

function SignUpHeader({children}: SignUpHeaderProps) {
    return (
        <div className="signup__header">
            <img src={logoLight} alt="ReservEase" className="signup__header--logo" />
            <h1>{children}</h1>
        </div>
    );
}

export default SignUpHeader;
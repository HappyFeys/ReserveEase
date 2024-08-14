import back from "./../../../../src/assets/icons/back.svg"
function Back() {

    const handleClick = () => {
        window.history.back();
    }

    return (
        <div onClick={handleClick} className="back">
            <img src={back} alt="<" />
        </div>
    );
}

export default Back;
import './FancyButton.css'

function FancyButton(props) {

    return (
        <>
            <button className="FancyBtn">{props.text}</button>
        </>
    );

}

export default FancyButton;
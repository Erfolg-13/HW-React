import './Counter.css';
function Counter (props) {
    return (
        <button className="counter-btn">{props.number}</button>

    )
}

export default Counter;
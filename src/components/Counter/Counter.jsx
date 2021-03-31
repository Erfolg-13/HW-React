import './Counter.css';

function Counter (props) {
    return (
        <button className="counter-result">{props.number}</button>
    )
}

export default Counter;
function Button({onClick}) {
    return (
        <button onClick={() => onClick()}>Get a dog!</button>
    )
}

export default Button;
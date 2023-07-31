let PlayerInfoComponent = (props) => {
    let { points } = props

    return (
        <div className="player-info">
            <h2>Player info</h2>
            <p><strong>Points: </strong><span id="playerPoints">{ points }</span></p>
        </div>
    )
}

export default PlayerInfoComponent;
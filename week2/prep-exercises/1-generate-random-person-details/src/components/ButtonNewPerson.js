export default function ButtonNewPerson( {onClick}) {
    return (
        <button onClick={()=>onClick(Math.random)}>Get new data</button>
    )
}
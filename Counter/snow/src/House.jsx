import Room from "./Room"

const House = (props) => {
  return (
    <div>
      <h1>House: {props.name}</h1>
      <Room name="bedroom" houseName={props.name} />
    </div>
  )
}

export default House
  
import Info from "./info";

export default function InfoList({ info}) {
  //we can send props and
  //const info = props.info

  return (
    <div className="row">
      {info.map(info => {
        return <Info key={info.id} info={info} />
      })}
    </div>
  )
}


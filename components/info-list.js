import Info from "./info";

export default function InfoList({ infor}) {
  //we can send props and
  //const info = props.info

  return (
    <div className="row">
      {infor.map((info) => {
        return <Info key={info.id} info={info} />
      })}
    </div>
  )
}


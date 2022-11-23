// A separate page, all rendered on the server not on the client
// As that is how Next.js works
export default function AboutPage() {
  return (
    <div className="row">
      <div className="item">
        <div className="content">
          Welcome! <br></br>
          This app presents the NBA Teams! <br></br>
          You can filter and sort according to what you are looking for.<br></br>
          Have fun! <br></br>
        </div>
      </div>
    </div>
  )
}

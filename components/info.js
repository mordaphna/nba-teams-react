import Image from "next/image";
import { useGameData } from "../hooks/data";
import { makeGamesStats } from "../utils";

// the card html
export default function Info({ info }) {

  return (
  
    <div className="item card">
      <div className="content card-content">

        <div className="row">

          <div className="item card-title">
            <h2 className="check">{info.abbreviation}</h2>
            <p>{`Team Name: ${info.name}`}</p>
            <p>{`City: ${info.city}`}</p>
            <p>{`Conference: ${info.conference}`}</p>
          </div>

          </div>

        </div>
      </div>
  )
}

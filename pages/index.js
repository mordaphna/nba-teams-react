import { useState } from "react";
import DataIntro from "../components/data-intro";
import InfoList from "../components/info-list";
import Message from "../components/message";
import { useApiData } from "../hooks/data";
import { filterTeamData, sortTeamData } from "../utils";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready

export default function IndexPage() {

  const { data, isLoading, isError } = useApiData();
  const [sortKey, setSortKey] = useState("-");
  const [filterKey, setFilterKey] = useState("-");

  
  function getDataQueryKeys(event) {
    if (event.target.id === "data-sort") {
      setSortKey(event.target.value);
    }
    if (event.target.id === "data-filter") {
      setFilterKey(event.target.value);
    }
  }


  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  //returns the the card
  const teams = filterTeamData(sortTeamData(data.data, sortKey), filterKey);
  return (
    <>
      <DataIntro changeHandler={getDataQueryKeys} />
      <InfoList info={teams} />
    </>
  )
}

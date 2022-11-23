
  // Our function to sort the data based on the user selection
  // See the HTML select element for the sort - there are three possible values, which in this function are the "key"
  // to sort according to the name of the team
  //to sort according to team abbreviation
  //or to sortaccording to the city. 

  export function sortTeamData(teams, key) {
    let sortedTeam = null;
    if (key === "-") { return teams; }
    if(key =="name"){
      sortedTeam = teams.sort((a,b) =>
      a.name > b.name ? 1: a.name < b.name ? -1:0);
    }

    if(key =="abb"){
      sortedTeam = teams.sort((a,b) =>
      a.abbreviation > b.abbreviation ? 1: a.abbreviation < b.abbreviation ? -1:0
      );
    }

    if(key =="city"){
      sortedTeam = teams.sort((a,b) =>
      a.city > b.city ? 1: a.city < b.city ? -1:0
      );
    }
    return sortedTeam;
  }


  
  // Our function to filter the data based on the user selection
  // See the HTML select element for the filter - there are three possible values, which in this function are the "key"
  // tue user can filter according to the conference.
  
  export function filterTeamData(teams, key) {
    let filteredTeams = null;
    filteredTeams = teams.filter((team) => {
      if (key === "all") {
        return team;
      } else {
        return key === "West" ? team.conference =="West" : team.conference =="East";
      }
    });
    return filteredTeams;
  }
  
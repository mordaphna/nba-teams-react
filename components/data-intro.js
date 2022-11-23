// the data intro in the first part of the page 
export default function DataIntro({ changeHandler }) {
    return (
      <div className="row">

        <div className="item intro">
          <div className="content">
            <strong>This is an app that diaplays information about NBA teams.</strong>
          </div>
        </div>

        <div className="buttoms">
          <div className="row">
            <div className="sortFilter">

                <div className="item control-container"> {/*open item control-container */}
                <div className="content">{/* open content */}
                    <div className="row"> {/* open row */}

                    <div className="item control">
                        <div>Sort</div>
                    </div>

                    <div className="item control">
                        <select id="data-sort" onChange={changeHandler}>
                        <option value="name">by Team Name</option>
                        <option value="abb">by Team abbreviation</option>
                        <option value="city">by Team city</option>
                        </select>
                    </div>

                    </div>  {/* close row */}
                </div> {/* close content */}
                </div>  {/*  close item control-container */}


                <div className="item control-container">
                <div className="content">
                    <div className="row">

                    <div className="item control">
                        <div>Filter by Conference</div>
                    </div>

                    <div className="item control">
                        <select id="data-filter" onChange={changeHandler}>
                        <option value="all">All</option>
                        <option value="West">West</option>
                        <option value="East">East</option>
                        </select>
                    </div>

                    </div>
                </div>
                </div>




            </div>
          </div>
        </div>
      </div>
    )
  }
  
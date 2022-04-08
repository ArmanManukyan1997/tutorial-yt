import React, { useState } from "react";
// import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import Checkbox from "./Checkboxes";
import Delivery from "./Delivery";

const Discovery: React.FC = () => {
  const [roadMap, setRoadMap] = useState(false);
  const [competitor, setCompetitor] = useState(false);
  

  const onClickRoadMap = () => {
    setRoadMap((current:any) => !current);
  };

  const onClicCompetitor = () => {
    setCompetitor((current:any) => !current);
  };
  
  return (
 <div className={`m-panel ${roadMap ? "roadMap" : ""}`}>
      <div className="m-panel-label">
          <h3>Discovery</h3>
        <Checkbox
          defaultChecked={roadMap}
          id="1"
          name="Create roadmap"
          label="Create roadmap"
          value=""
          onChange={onClickRoadMap}
        />
          <Checkbox
          defaultChecked={competitor}
          id="1"
          name="Competitor analysis"
          label="Competitor analysis"
          value=""
          onChange={onClicCompetitor}
          disabled={!roadMap}
        />  
        {competitor && roadMap &&  <div className="label_selecting">
          <div className="discovery-finish">
            <img className="imges-finish-discovery" src={require('../img/sm_5afb099b30a2a.jpg')}/>
            </div>
            <Delivery/>
            </div>}
      </div>
 </div>
  );
};

export default Discovery;

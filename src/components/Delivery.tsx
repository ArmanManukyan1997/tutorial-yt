import React, { useState } from "react";
// import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import Checkbox from "./Checkboxes";


const Delivery: React.FC = () => {
  const [marketing, setMarketing] = useState(false);
  const [mvp, setMvp] = useState(false);

  const onClickRoadMap = () => {
    setMarketing((current: any) => !current);
  };

  const onClicCompetitor = () => {
    setMvp((current: any) => !current);
  };

  return (
      <div className="m-panel-label">
          <h3>Delivery</h3>
        <Checkbox
          defaultChecked={marketing}
          id="1"
          name="dummy"
          label="Release marketing website"
          value=""
          onChange={onClickRoadMap}
        />
          <Checkbox
          defaultChecked={mvp}
          id="2"
          name="Release MVP"
          label="Release MVP"
          value=""
          onChange={onClicCompetitor}
          disabled={!marketing}
        />  
        {mvp && marketing && 
          <div className="discovery-finish-delivery">
            <img className="imges-finish-delivery" src={require('../img/sm_5afb099b30a2a.jpg')}/>
            </div>
            }
      </div>
    // </div>
  );
};

export default Delivery;

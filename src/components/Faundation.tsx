import React, { useState } from "react";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import Checkbox from "./Checkboxes";
import Discovery from "./Discovery";


const Faundation: React.FC = () => {
  const [isSelected, setIsSelected] = useLocalStorage('is-open', false);
  const [mission, setMission] = useState(false);
  const [selectbusiness, setSelectBusiness] = useState(false);
  const [buyDomains, setBuyDomains] = useState(false);


  const onClickEvent = () => {
    setIsSelected((current :any) => !current);
    setIsSelected(!isSelected)
  };

  const onClickMissions = () => {
    setMission((current :any) => !current);
    setMission(!mission)
  };

  const onClicSelectBussiness = () => {
    setSelectBusiness((current :any) => !current);
  };

  const onClicBuyDomains = () => {
    setBuyDomains((current :any) => !current);
  };

  // Arajin checkbox@ sarqaca nenc vor refreshi jamanak tvyal@ chkori

  return (
    <div className={`m-panel ${isSelected ? "isSelected" : ""}`}>
      <div className="m-panel-label">
          <h3>Faundation</h3>
        <Checkbox
          defaultChecked={isSelected}
          id="1"
          name="Setup virtual office"
          label="Setup virtual office"
          value=""
          onChange={onClickEvent}
        />
          <Checkbox
          defaultChecked={mission}
          id="2"
          name="Set mission & vision"
          label="Set mission & vision"
          value=""
          onChange={onClickMissions}
          disabled={!isSelected}
        />
          <Checkbox
          defaultChecked={selectbusiness}
          id="3"
          name="Select business name"
          label="Select business name"
          value=""
          onChange={onClicSelectBussiness}
          disabled={!mission}
        />
          <Checkbox
          defaultChecked={buyDomains}
          id="4"
          name="check"
          label="Buy domains"
          value=""
          onChange={onClicBuyDomains}
          disabled={!selectbusiness}
        />
        {isSelected && buyDomains && selectbusiness && mission && 
        <div className="m-panel-label__selecting">
          <div className="finish">
            <img className="imges-finish" src={require('../img/sm_5afb099b30a2a.jpg')}/>
            </div>
            <Discovery/>
            </div>}
      </div>
    </div>
  );
};

export default Faundation;

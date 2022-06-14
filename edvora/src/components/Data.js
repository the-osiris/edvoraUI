import React from "react";
import "../styles/Data.css";

const Data = (props) => {
  var x = JSON.stringify(props.data.station_path);
  return (
    <div className="main">
      <div className="main_block">
        <img className="map_image" src={props.data.map_url}></img>
        <div className="details">
          <div className="sub_detail">
            Ride Id : <span>{props.data.id}</span>
          </div>
          <div className="sub_detail">
            Origin Station : <span>{props.data.origin_station_code}</span>
          </div>
          <div className="sub_detail">
            station_path : <span>{x}</span>
          </div>
          <div className="sub_detail">
            Date : <span>{props.data.date}</span>
          </div>
          <div className="sub_detail">
            Distance : <span>{props.data.distance}</span>
          </div>
        </div>
        <div className="data_btns">
          <button type="button" className="data_btn">
            {props.data.city}
          </button>
          <button type="button" className="data_btn">
            {props.data.state}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;

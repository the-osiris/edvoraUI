import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Bar from "./Bar";
import Data from "./Data";

function byDis(a, b) {
  return parseInt(a.distance) - parseInt(b.distance);
}

const App = () => {
  const user_url = "https://assessment.api.vweb.app/user";
  const url = "https://assessment.api.vweb.app/rides";
  const [user, setUser] = useState([]);
  const [rides, setRides] = useState([]);
  const [val_rank, setVal] = useState(1);

  useEffect(async () => {
    const response = await axios.get(user_url);
    setUser(response.data);
  }, [user_url]);

  useEffect(async () => {
    const resp = await axios.get(url);
    const currentTime = new Date().getTime();
    resp.data.map((val) => {
      if (new Date(val.date).getTime() === currentTime) val.flag = 0;
      else if (new Date(val.date).getTime() > currentTime) val.flag = 1;
      else val.flag = -1;
    });
    setRides(resp.data);
  }, [url]);

  function onCheck(val2) {
    setVal(val2);
  }

  rides.map((item) => {
    var dis_val = Number.MAX_VALUE;
    for (var i = 0; i < item.station_path.length; i++) {
      var value = Math.abs(item.station_path[i] - user.station_code);
      if (value < dis_val) {
        dis_val = value;
      }
      item = Object.assign(item, { distance: dis_val, val: val_rank });
    }
  });

  rides.sort(byDis);
  // console.log(new Date());

  // console.log(rides);

  return (
    <div>
      <Nav user={user} />
      <Bar onCheckNow={onCheck} />
      {rides.map((item) => {
        if (item.val === 1) {
          console.log("Nearest Rides");
          return <Data data={item} userdata={user} />;
        } else if (item.val === 2) {
          if (item.flag === 1) {
            console.log("Upcoming rides");

            return <Data data={item} userdata={user} />;
          }
        } else if (item.val === 3) {
          if (item.flag <= 0) {
            console.log("past rides");
            return <Data data={item} userdata={user} />;
          }
        } else {
          return "Data Not available";
        }
      })}
    </div>
  );
};

export default App;

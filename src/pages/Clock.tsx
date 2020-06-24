import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonList,
  IonItem,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./clock.css";
import Timerdial from "../components/Timerdial";
import Moment from "moment-timezone";
let clock = {
  hh: 5,
  mm: 5,
  ss: 5,
  ms: 5,
};

const LocalTime = () => {
  let date = Moment().tz("America/Los_Angeles");
  /*
America/New_York
America/Los_Angeles
Asia/Tokyo
Australia/Sydney
Asia/Colombo => Pune
Asia/Dubai
  */

  let dateObj = date.toDate();
  console.log(dateObj);
};
const LocationList = {
  labels: [
    "London , UK",
    "Tokyo , Japan",
    "Pune , India",
    "Newyork , USA",
    "Dubai , UAE",
  ],
  keys: [
    "Europe/London",
    "Asia/Tokyo",
    "Asia/Colombo",
    "America/New_York",
    "Asia/Dubai",
  ],
};
const GetTime = () => {
  let dt = new Date();
  console.log(dt);
  let hh, mm, ss, ms;
  hh = dt.getHours();
  mm = dt.getMinutes();
  ss = dt.getSeconds();
  ms = dt.getMilliseconds();
  clock = {
    hh,
    mm,
    ss,
    ms,
  };
  return clock;
  console.log(clock);
};

const Clock: React.FC = () => {
  const [time, settime] = useState({
    hh: 0,
    mm: 0,
    ss: 0,
    ms: 0,
  });

  const [Location, setLocation] = useState("Pune , IND");
  useEffect(() => {
    settime(GetTime());
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clock</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-justify-content-center'>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Location Name */}
        <IonText class='ion-text-align-center'>
          <h2>{Location}</h2>
        </IonText>

        {/* Analog Clock Goes Here */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          dignissimos harum earum rem iure, corporis odio alias, porro ratione,
          tenetur aliquid maiores quia! Ratione modi a accusantium, ducimus sit
          perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* Digital Dial */}
        <Timerdial clock={clock} />

        {/* Location List */}
        <IonList>
          {LocationList.labels.map((loc) => {
            return (
              <IonButton
                expand='block'
                shape='round'
                key={LocationList.labels.indexOf(loc)}
                onClick={() =>
                  setLocation(
                    LocationList.keys[LocationList.labels.indexOf(loc)]
                  )
                }>
                {LocationList.keys[LocationList.labels.indexOf(loc)]}
              </IonButton>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Clock;

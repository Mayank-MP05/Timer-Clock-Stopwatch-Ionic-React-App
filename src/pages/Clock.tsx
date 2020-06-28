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

const Clock: React.FC = () => {
  // Time and Location State Objects
  const [time, settime] = useState({
    hh: 0,
    mm: 0,
    ss: 0,
    ms: 0,
  });
  const [locate, setLocate] = useState("Asia/Colombo");

  // Custom Needed Functions
  const LocationTime = (key: string) => {
    let date = Moment().tz(key);
    let dateObj = date.toDate();
    //console.log(dateObj);
    return dateObj;
  };
  const GetTime = (locate: string) => {
    let dt = LocationTime(locate);
    //console.log(dt);
    let hh, mm, ss, ms;
    hh = dt.getHours();
    mm = dt.getMinutes();
    ss = dt.getSeconds();
    ms = dt.getMilliseconds();
    let clock = {
      hh,
      mm,
      ss,
      ms,
    };
    return clock;
  };

  //Useeffect to Update changes to UI
  useEffect(() => {
    setInterval(() => {
      settime(GetTime(locate));
    }, 3000);
    //console.log(locate);
  });
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
          <h2>{locate}</h2>
        </IonText>

        {/* Analog Clock Goes Here */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          dignissimos harum earum rem iure, corporis odio alias, porro ratione,
          tenetur aliquid maiores quia! Ratione modi a accusantium, ducimus sit
          perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* Digital Dial */}
        <Timerdial clock={time} />

        {/* Location List */}
        <IonList>
          {LocationList.labels.map((loc) => {
            return (
              <IonButton
                expand='block'
                shape='round'
                key={LocationList.labels.indexOf(loc)}
                onClick={() =>
                  setLocate(LocationList.keys[LocationList.labels.indexOf(loc)])
                }>
                {LocationList.keys[LocationList.labels.indexOf(loc)]}
                {locate}
              </IonButton>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Clock;

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
  IonRow,
} from "@ionic/react";
import AnalogClock from "./../components/analog_clock";
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
  const [options, setoptions] = useState({});
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
    let dateObj = date.toObject();
    //console.log(key);
    //console.log(date);
    return dateObj;
  };
  const GetTime = (locate: string) => {
    /*
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
    */
  };

  //Useeffect to Update changes to UI
  useEffect(() => {
    const getT = (locate: string) => {
      let dt = LocationTime(locate);
      //console.log(dt);
      let hh, mm, ss, ms;
      hh = dt.hours;
      mm = dt.minutes;
      ss = dt.seconds;
      let clock = {
        hh,
        mm,
        ss,
        ms: 0,
      };
      settime(clock);
      setoptions({
        useCustomTime: true,
        width: "200px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        handColors: {
          second: "#d81c7a",
          minute: "#fff",
          hour: "#fff",
        },
        seconds: time.ss, // set your
        minutes: time.mm, // own
        hours: time.hh, // time here.
      });
    };
    let inter = setInterval(() => getT(locate), 1000);
    return () => {
      clearInterval(inter);
    };
  }, [locate, time]);
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

        <IonRow class='ion-margin-horizantal ion-justify-content-center'>
          <AnalogClock {...options} />
        </IonRow>
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
              </IonButton>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Clock;

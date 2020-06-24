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
let clock = {
  hh: 5,
  mm: 5,
  ss: 5,
  ms: 5,
};

const GetTime = () => {
  let dt = new Date();
  //console.log(dt);
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
  useEffect(() => {
    setInterval(() => {
      settime(GetTime());
    }, 1);
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
          <h2>Location Name Her</h2>
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
          <IonButton expand='block' shape='round' onClick={GetTime}>
            Locatio 1
          </IonButton>

          <IonButton expand='block' shape='round'>
            Locatio 2
          </IonButton>

          <IonButton expand='block' shape='round'>
            Locatio 3
          </IonButton>

          <IonButton expand='block' shape='round'>
            Locatio 4
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Clock;

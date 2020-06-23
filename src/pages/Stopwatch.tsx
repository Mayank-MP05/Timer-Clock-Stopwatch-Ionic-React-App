import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./stopwatch.css";
import Timerdial from "../components/Timerdial";
let clock = {
  hh: 5,
  mm: 5,
  ss: 5,
  ms: 5,
};
const Stopwatch: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stopwatch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Stopwatch</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Time Dialer Component"*/}
        <Timerdial clock={clock} />

        {/* Clear And Start and Stop button */}
        <IonButton>Clear</IonButton>
        <IonButton>Start / Stop</IonButton>

        {/*Note the Time Butto*/}
        <IonButton>Note this Time ...</IonButton>

        {/*Noted Time List*/}
        <IonList>
          <IonItem>Time1</IonItem>
          <IonItem>Time2</IonItem>
          <IonItem>Time3</IonItem>
          <IonItem>Time4</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Stopwatch;

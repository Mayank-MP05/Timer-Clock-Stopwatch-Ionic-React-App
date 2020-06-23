import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./stopwatch.css";
import Timerdial from "../components/Timerdial";
let clock = {
  hr: 5,
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
        <Timerdial clock={clock} />
      </IonContent>
    </IonPage>
  );
};

export default Stopwatch;

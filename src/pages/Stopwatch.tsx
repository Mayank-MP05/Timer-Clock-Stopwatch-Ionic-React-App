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
  IonRow,
  IonCol,
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
        <IonRow>
          <IonCol size='6'>
            <IonButton color='danger' expand='full'>
              Clear
            </IonButton>
          </IonCol>
          <IonCol size='6'>
            <IonButton color='success' expand='full'>
              Start / Stop
            </IonButton>
          </IonCol>
        </IonRow>

        {/*Note the Time Butto*/}
        <IonButton expand='full'>Note this Time ...</IonButton>

        {/*Noted Time List*/}
        <IonList>
          <IonButton expand='block'>Time1</IonButton>
          <IonButton expand='block'>Time2</IonButton>
          <IonButton expand='block'>Time3</IonButton>
          <IonButton expand='block'>Time4</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Stopwatch;

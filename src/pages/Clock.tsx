import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonList,
  IonItem,
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
const Clock: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clock</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Location Name */}
        <IonText>Location Name Here</IonText>

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
          <IonItem>Locatio 1</IonItem>
          <IonItem>Locatio 2</IonItem>
          <IonItem>Locatio 3</IonItem>
          <IonItem>Locatio 4</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Clock;

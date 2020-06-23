import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonRow,
  IonCol,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./timer.css";
import Timerdial from "../components/Timerdial";

const Timer: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Timer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Timer</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* 4 Column System inputs */}
        <IonRow>
          <IonCol size='3'>
            <IonInput placeholder='Hr'></IonInput>
          </IonCol>
          <IonCol size='3'>
            <IonInput placeholder='Mm'></IonInput>
          </IonCol>
          <IonCol size='3'>
            <IonInput placeholder='SS'></IonInput>
          </IonCol>
          <IonCol size='3'>
            <IonButton color='success'>Start</IonButton>
          </IonCol>
        </IonRow>

        {/* loading Symbol Animationn */}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel vitae
          voluptatem doloremque commodi. Cum nisi asperiores distinctio odio
          vero, consectetur nobis quo eius neque optio accusantium quaerat,
          reprehenderit, eos doloribus harum aspernatur dolore porro tempora!
        </p>

        {/* Clear and Start Stop Button */}
        <IonRow>
          <IonCol size='6'>
            <IonButton color='danger' expand='block'>
              Clear
            </IonButton>
          </IonCol>
          <IonCol size='6'>
            <IonButton color='success' expand='block'>
              Start / Stop
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Timer;

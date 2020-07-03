import React, { useState, useEffect } from "react";
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
  IonToast,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./timer.css";
import Timerdial from "../components/Timerdial";

let clock = {
  hh: 0,
  mm: 0,
  ss: 0,
  ms: 0,
};

const Timer: React.FC = () => {
  const [Time, setTime] = useState(clock);
  const [target, setTarget] = useState(clock);
  const [toast, settoast] = useState(false);
  const [btn, setBtn] = useState("Start");
  const [inter, setInter] = useState(setInterval(() => {}, 10000));
  const [hh, sethr] = useState(0);
  const [mm, setmm] = useState(0);
  const [ss, setss] = useState(0);

  const DecTime = (time: any) => {
    //console.log(time);
    let { hh, mm, ss, ms } = time;
    if (ms > 0 && ms <= 9) {
      time.ms -= 1;
    } else {
      if (ss > 0 && ss <= 59) {
        time.ss -= 1;
        time.ms = 9;
      } else {
        if (mm > 0 && mm <= 59) {
          time.mm -= 1;
          time.ss = 59;
        } else {
          if (hh > 0 && hh <= 12) {
            time.hr -= 1;
            time.mm = 59;
          } else {
            clearInterval(inter);
            setBtn("Start");
            settoast(true);
            return;
          }
        }
      }
    }
    setTime({
      hh: time.hh,
      mm: time.mm,
      ss: time.ss,
      ms: time.ms,
    });
  };

  const startStop = () => {
    //console.log("Start - Stop");
    if (btn === "Start") {
      console.log("Start called");
      let toMakeZero = target;
      setInter(setInterval(() => DecTime(toMakeZero), 100));
      setBtn("Stop");
    } else {
      console.log("Stop called");
      clearInterval(inter);
      setInter(setInterval(() => {}, 100000));
      setBtn("Start");
    }
  };

  const Reset = () => {
    console.log("Reset");
    setBtn("Start");
    settoast(false);
    clearInterval(inter);
    setTime({
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
    });
  };

  useEffect(() => {
    if (toast) {
      if (btn === "Start") {
        setTimeout(() => {
          console.log("timeout set : " + toast);
          settoast(false);
        }, 1000);
      }
    }
  }, [btn]);

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
            <IonInput
              placeholder='Hour'
              name='Hh'
              value={hh}
              onIonChange={(e) => sethr(parseInt(e.detail.value!))}></IonInput>
          </IonCol>
          <IonCol size='3'>
            <IonInput
              placeholder='Minute'
              name='mm'
              value={mm}
              onIonChange={(e) => setmm(parseInt(e.detail.value!))}></IonInput>
          </IonCol>
          <IonCol size='3'>
            <IonInput
              placeholder='Ss'
              name='ss'
              value={ss}
              onIonChange={(e) => setss(parseInt(e.detail.value!))}></IonInput>
          </IonCol>
          <IonCol size='3'>
            <IonButton
              color='success'
              onClick={() =>
                setTarget({
                  hh,
                  mm,
                  ss,
                  ms: 0,
                })
              }>
              Set
            </IonButton>
          </IonCol>
        </IonRow>

        <Timerdial clock={Time} />
        {/* Clear and Start Stop Button */}
        <IonRow>
          <IonCol size='6'>
            <IonButton color='danger' expand='block' onClick={Reset}>
              Clear
            </IonButton>
          </IonCol>
          <IonCol size='6'>
            <IonButton color='success' expand='block' onClick={startStop}>
              {btn}
            </IonButton>
          </IonCol>
        </IonRow>
        <IonToast
          isOpen={toast}
          message='Timer Completed'
          onDidDismiss={() => settoast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Timer;

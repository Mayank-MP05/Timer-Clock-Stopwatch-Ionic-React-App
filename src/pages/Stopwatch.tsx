import React, { useState, useEffect } from "react";
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
import { start } from "repl";
import { TIMEOUT } from "dns";
let clock = {
  hh: 0,
  mm: 0,
  ss: 0,
  ms: 0,
};

const Stopwatch: React.FC = () => {
  const [Time, setTime] = useState(clock);
  const [savedTime, setsavedTime] = useState([clock]);

  const [btn, setBtn] = useState("Start");
  const [inter, setInter] = useState(setInterval(() => {}, 10000));

  const IncTime = (time: any) => {
    //console.log(time);
    let { hh, mm, ss, ms } = time;
    if (ms >= 0 && ms < 9) {
      time.ms += 1;
    } else {
      time.ms = 0;
      if (ss >= 0 && ss < 59) {
        time.ss += 1;
      } else {
        time.ss = 0;
        if (mm >= 0 && mm < 59) {
          time.mm += 1;
        } else {
          time.mm = 0;
          if (hh >= 0 && hh < 12) {
            time.hr += 1;
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
  let start: any;
  const starting = () => {
    console.log("Start");
    start = setInterval(() => IncTime(Time), 100);
  };
  const stop = () => {
    console.log("Stop");
    let current = Time;
    console.log(start);
    clearInterval(start);
    setTime({
      hh: current.hh,
      mm: current.mm,
      ss: current.ss,
      ms: current.ms,
    });

    console.log(current);
  };

  const startStop = () => {
    console.log("Start - Stop");
    if (btn === "Start") {
      setInter(setInterval(() => IncTime(Time), 100));
      setBtn("Stop");
    } else {
      console.log(inter);
      clearInterval(inter);
      setBtn("Start");
    }
  };

  const Reset = () => {
    console.log("Reset");
    clearInterval(start);
    setTime({
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
    });
  };

  const dialer = (Time: any) => {
    return <Timerdial clock={Time} />;
  };

  const NoteThisTime = () => {
    //setsavedTime(savedTime.push(Time));
  };

  useEffect(() => {}, []);

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
        {dialer(Time)}

        {/* Clear And Start and Stop button */}
        <IonRow>
          <IonCol size='6'>
            <IonButton color='danger' expand='full' onClick={Reset}>
              Clear
            </IonButton>
          </IonCol>
          <IonCol size='6'>
            <IonButton
              color='success'
              expand='full'
              onClick={() => IncTime(Time)}>
              Start / Stop
            </IonButton>
          </IonCol>
        </IonRow>

        {/*Note the Time Butto*/}
        <IonButton expand='full'>Note this Time ...</IonButton>

        {/*Noted Time List*/}
        <IonList>
          <IonButton expand='block' onClick={starting}>
            Start
          </IonButton>
          <IonButton expand='block' onClick={stop}>
            Stop
          </IonButton>
          <IonButton expand='block' onClick={() => console.log(Time)}>
            Show Timee
          </IonButton>
          <IonButton expand='block' onClick={startStop}>
            {btn}
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Stopwatch;

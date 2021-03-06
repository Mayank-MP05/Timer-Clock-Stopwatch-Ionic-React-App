import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { time, stopwatch, timer } from "ionicons/icons";
import Stopwatch from "./pages/Stopwatch";
import Clock from "./pages/Clock";
import Timer from "./pages/Timer";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path='/stopwatch' component={Stopwatch} exact={true} />
          <Route path='/clock' component={Clock} exact={true} />
          <Route path='/timer' component={Timer} />
          <Route
            path='/'
            render={() => <Redirect to='/stopwatch' />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='stopwatch' href='/stopwatch'>
            <IonIcon icon={stopwatch} />
            <IonLabel>Stopwatch</IonLabel>
          </IonTabButton>
          <IonTabButton tab='clock' href='/clock'>
            <IonIcon icon={time} />
            <IonLabel>Clock</IonLabel>
          </IonTabButton>
          <IonTabButton tab='timer' href='/timer'>
            <IonIcon icon={timer} />
            <IonLabel>Timer</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

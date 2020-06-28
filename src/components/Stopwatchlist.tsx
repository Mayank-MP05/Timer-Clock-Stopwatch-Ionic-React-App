import React, { useState } from "react";
import { IonItemDivider, IonList, IonButton } from "@ionic/react";
import { updateLocale } from "moment";

interface ContainerProps {
  list: String[];
  len: Number;
}

const Stopwatchlist: React.FC<ContainerProps> = ({ list, len }) => {
  return (
    <IonList>
      {list.map((obj) => (
        <IonButton key={Math.random()} expand='full'>
          {obj}
        </IonButton>
      ))}
    </IonList>
  );
};

export default Stopwatchlist;

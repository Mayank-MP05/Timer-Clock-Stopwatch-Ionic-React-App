import React from "react";
import { IonItemDivider } from "@ionic/react";

interface ContainerProps {
  clock: {
    hr: Number;
    mm: Number;
    ss: Number;
    ms: Number;
  };
}

const Timerdial: React.FC<ContainerProps> = ({ clock }) => {
  return (
    <div className='container'>
      <h3>HH : MM : SS : MS</h3>
      <IonItemDivider />
      <h1>
        {clock.hr} | {clock.mm} | {clock.ss} | {clock.ms}
      </h1>
      <IonItemDivider />
    </div>
  );
};

export default Timerdial;

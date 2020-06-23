import React from "react";
import { IonItemDivider } from "@ionic/react";

interface ContainerProps {
  clock: {
    hh: Number;
    mm: Number;
    ss: Number;
    ms: Number;
  };
}

const Timerdial: React.FC<ContainerProps> = ({ clock }) => {
  return (
    <div className='container d-flex justifyc-content-center ion-justify-content-center'>
      <h4>HH : MM : SS : MS</h4>
      <h1>
        {clock.hh} | {clock.mm} | {clock.ss} | {clock.ms}
      </h1>
    </div>
  );
};

export default Timerdial;

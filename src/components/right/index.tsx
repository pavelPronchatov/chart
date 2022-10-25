import React from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import s from "./style.module.css";
import {optionsPie} from "./constants";


export const RightSide = () => {
  return (
    <div className={s.wrapRight}>
      <HighchartsReact
        highcharts={Highcharts}
        options={optionsPie}
      />
    </div>
  );
};

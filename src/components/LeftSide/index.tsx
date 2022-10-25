import React from 'react';

import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";
import s from './style.module.css'
import { optionSankey } from './constants';

HighchartsSankey(Highcharts)


export const LeftSide = () => {
  return (
    <div className={s.wrapLeft}>
      <HighchartsReact
        highcharts={Highcharts}
        options={optionSankey}
      />
    </div>
  );
};

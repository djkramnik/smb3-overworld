import * as React from 'react';
import Overworld from 'react-overworld';
import {symbolMap, tiles} from './data';
import './styles.css';

type WorldOneProps = {};

export default ({}: WorldOneProps) => (
  <div className="overworld-container">
    <Overworld
      className={null}
      rows={tiles.length / 14}
      columns={14}
      symbolMap={symbolMap}
      tiles={tiles}
    />
  </div>
);

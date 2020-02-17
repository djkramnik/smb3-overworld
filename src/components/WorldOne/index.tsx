import React, {FunctionComponent, useEffect, useState} from 'react';
import Overworld from 'react-overworld';
import {symbolMap, tiles} from './data';
import './styles.css';

type WorldOneProps = {};

let i = 0;

const WorldOne:FunctionComponent<WorldOneProps> = ({}) => {
  const [_tiles, setTiles] = useState(tiles);

  useEffect(() => {
    setTimeout(() => {
      getStepCallback(setTiles);
    }, 300);

    function getStepCallback(setTiles: (t: string) => void) {
      const symbols = ['h', 'i', 'j', 'f'];
      const current = symbols[i];
      i = (i + 1) % 4;
      setTiles(
        _tiles.replace(new RegExp(current, 'g'), symbols[i])
      );
    }
  });

  return (
    <div className="overworld-container">
      <Overworld
        className={null}
        rows={tiles.length / 14}
        columns={14}
        symbolMap={symbolMap}
        tiles={_tiles}
      />
    </div>
  );
}

export default WorldOne;

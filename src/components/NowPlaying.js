import React from 'react';

import PlayListContainer from '../containers/PlayListContainer';
import PlayerContainer from '../containers/PlayerContainer';

const NowPlaying = () => {
  return (
    <div>
      <PlayListContainer />
      <PlayerContainer />
    </div>
  );
};

export default NowPlaying;

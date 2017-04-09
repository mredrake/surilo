import React from 'react';

import Header from './Header';
import TrackListContainer from '../containers/TrackListContainer';
import NowPlaying from './NowPlaying';

const App = () => {
  return (
    <div>
      <Header />
      <div className='row'>
        <div className='col-8'>
          <TrackListContainer />
        </div>
        <div className='col-4'>
          <NowPlaying />
        </div>
      </div>
    </div>
  );
};

export default App;

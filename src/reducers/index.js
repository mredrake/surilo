import API from '../utils/api';

const tracks = (state = {}, action) => {
  console.log('Action Received:', action);

  switch (action.type) {
    case 'PLAY':
      console.log('Play whatever');
      return Object.assign({}, state, { now_playing: action.payload });
    case 'PLAY_SUCCESS':
      console.log('Play api call done');
    case 'PLAY_ERROR':
      console.log('Error:', action);
    case 'ADD':
      console.log('ADDing')
      const track = action.payload;
      const playlist = state.playlist.slice();
      if (!playlist.map((tr) => { return tr.id; }).includes(track.id)) { // no duplicates
        playlist.push(action.track);
        return Object.assign({}, state, { playlist });
      }
      return state;
    default:
      return state;
  }
};

export default tracks;

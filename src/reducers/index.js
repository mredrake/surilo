import API from '../utils/api';

const tracks = (state = {}, action) => {
  const track = action.track;
  console.log('Action Received:', action);

  switch (action.type) {
    case 'PLAY':
      const payload = {
        track: track.id,
      };
      API.post('plays/', payload);
      return Object.assign({}, state, { now_playing: track });
    case 'ADD':
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

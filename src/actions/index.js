const BASE_URL = '/api/v1';

export function play(track) {
  return {
    type: 'PLAY',
    payload: track,
    request: {
      url: BASE_URL + '/plays/',
      method: 'POST',
      data: {
        track: track.id
      }
    }
  };
}

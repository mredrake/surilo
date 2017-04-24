function upsertPlaylist(playlistArg, track) {
    let playlist = playlistArg.slice();
    // if (!playlist.map((tr) => { return tr.id; }).includes(track.id)) {
    //     playlist.push(track);
    // }
    playlist.push(track);
    return playlist;
}


const tracks = (state = {}, action) => {
    console.log('Action Received:', action);

    switch (action.type) {
        case 'PLAY':
            console.log('Action: PLAY');
            const track = action.payload;
            return Object.assign({}, state, {
                now_playing: track,
                playlist: upsertPlaylist(state.playlist, track)
            });
        case 'PLAY_SUCCESS':
            console.log('Action: PLAY SUCCESS');
            return state;
        case 'PLAY_ERROR':
            console.log('Error:', action);
            return state;
        case 'ADD':
            console.log('Action: ADD')
            return Object.assign({}, state, {
                playlist: upsertPlaylist(state.playlist, action.payload)
            });
        default:
            return state;
    }
};

export default tracks;

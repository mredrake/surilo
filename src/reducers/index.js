function upsertPlaylist(playlistArg, track) {
    let playlist = playlistArg.slice();
    // if (!playlist.map((tr) => { return tr.id; }).includes(track.id)) {
    //     playlist.push(track);
    // }
    playlist.push(track);
    return {playlist: playlist, index: playlist.length - 1};
}


const tracks = (state = {}, action) => {
    console.log('Action Received:', action);
    switch (action.type) {
        case 'PLAY': {
            const track = action.payload;
            let {playlist: playlist, index: index} = upsertPlaylist(state.playlist, track);
            return Object.assign({}, state, {
                now_playing: Object.assign({}, track, {index: index}),
                playlist: playlist,
            });
        }
        case 'PLAY_SUCCESS':
            return state;
        case 'PLAY_ERROR':
            return state;
        case 'ADD': {
            const {playlist: playlist, index: index} = upsertPlaylist(state.playlist, action.payload);
            return Object.assign({}, state, {
                playlist: playlist
            });
        }
        default:
            return state;
    }
};

export default tracks;

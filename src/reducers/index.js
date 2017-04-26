function elemIs(x) {
    return Object.is.bind(null, x)
}

function upsertPlaylist(playlistArg, track, greedy = false) {
    let playlist = playlistArg.slice();
    let index;
    if (greedy) {
        const index = playlist.findIndex(item => item.id == track.id);
        if (index != -1)
            return {playlist: playlist, index: index}
    }
    playlist.push(track);
    index = playlist.length - 1;
    return {playlist: playlist, index: index};
}

const tracks = (state = {}, action) => {
    console.log('Action Received:', action);
    switch (action.type) {
        case 'PLAY_AND_ADD': {
            const track = action.payload;
            console.log(track);
            let {playlist: playlist, index: index} = upsertPlaylist(state.playlist, track, true);
            return Object.assign({}, state, {
                now_playing: Object.assign({}, track, {index: index}),
                playlist: playlist,
            });
        }
        case 'PLAY': {
            const index = action.payload;
            return Object.assign({}, state, {
                now_playing: Object.assign({}, state.now_playing, {index: index}),
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

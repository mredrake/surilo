import API from '../utils/api'

const tracks = (state = {}, action) => {
    const track = action.track
    switch (action.type) {
        case 'PLAY':
            let payload = {
                track: track.id,
            }
            API.post('plays/', payload)
            return Object.assign({}, state, {now_playing: track})
        case 'ADD':
            let playlist = state.playlist.slice()
            if (!playlist.map((tr) => tr.id).includes(track.id)) { // no duplicates
                playlist.push(action.track)
                return Object.assign({}, state, {playlist: playlist})
            }
            return state
        default:
            console.log(action)
            return state
    }
}

export default tracks

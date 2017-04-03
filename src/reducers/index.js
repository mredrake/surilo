import API from '../utils/api'

const tracks = (state = {}, action) => {
    switch (action.type) {
        case 'PLAY':
            var payload = {
                track: action.now_playing.id,
            }
            API.post('plays/', payload)
            return Object.assign({}, state, {now_playing: action.now_playing})
        default:
            console.log(action)
            return state
    }
}

export default tracks

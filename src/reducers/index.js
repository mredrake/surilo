const tracks = (state = {}, action) => {
    switch (action.type) {
        case 'PLAY':
            return Object.assign({}, state, {now_playing: action.yt});
        default:
            console.log(action)
            return state
    }
}

export default tracks

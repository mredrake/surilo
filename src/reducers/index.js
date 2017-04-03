const tracks = (state = {}, action) => {
    switch (action.type) {
        case 'PLAY':
            var payload = {
                track: action.now_playing.id,
            }
            fetch("/api/v1/plays/",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(payload)
                })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    alert(JSON.stringify(data))
                })

            return Object.assign({}, state, {now_playing: action.now_playing})
        default:
            console.log(action)
            return state
    }
}

export default tracks

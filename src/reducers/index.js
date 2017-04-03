function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

const tracks = (state = {}, action) => {
    switch (action.type) {
        case 'PLAY':
            var payload = {
                track: action.now_playing.id,
            }
            fetch("/api/v1/plays/",
                {
                    credentials: "same-origin",
                    headers: {
                        "X-CSRFToken": getCookie("csrftoken"),
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(payload)
                })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    console.log(JSON.stringify(data))
                })

            return Object.assign({}, state, {now_playing: action.now_playing})
        default:
            console.log(action)
            return state
    }
}

export default tracks

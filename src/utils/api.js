export class APIKlass {
    constructor() {
        this.base_url = '/api/v1/'
        this.headers = {
            "X-CSRFToken": this.getCookie("csrftoken"),
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    post(endpoint, payload) {
        return fetch(this.base_url + endpoint,
            {
                credentials: "same-origin",
                headers: this.headers,
                method: "POST",
                body: JSON.stringify(payload)
            })
            .then(function (res) {
                return res.json();
            })
    }
}

const API = new APIKlass()

export default API
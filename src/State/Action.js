import * as ActionTypes from './ActionTypes';

// TODO: update to use POST when logging in
export const login = (userObj) => ({
    type: ActionTypes.FETCH_USER,
    payload: {
        promise: new Promise((resolve, reject) => {
            fetch("http://localhost:3002/api/login/" + userObj.username + "/" + userObj.password, {
                method: 'GET'
            }).then(
                //response => response.json(),
                response => response.text(),
                error => console.log("ERROR: login userObj", error)

            ).then(responseUser => {
                resolve(responseUser);
            }).catch(error => {
                reject(error);
            });
        })
    }
});

export const saveAppointment = (appObj) => {
    return function(dispatch) {
        window.fetch("http://localhost:3002/api/saveAppointment", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appObj)
        })
            .then (res => res.json())
            .then (resAppointment => {
                console.log("saveAppointment-response", resAppointment);
            })
            .catch((err) => {
                console.log("ERROR saving review");
            })
    }
};
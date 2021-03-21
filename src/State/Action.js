import * as ActionTypes from './ActionTypes';

export const login = (userObj) => ({
    type: ActionTypes.FETCH_USER,
    payload: {
        promise: new Promise((resolve, reject) => {
            fetch("http://localhost:3002/api/login" + userObj.username + "/" + userObj.password, {
                method: 'GET'
            }).then(
                response => response.json(),
                error => console.log("ERROR: login userObj", error)
            ).then(responseUser => {
                resolve(responseUser);
            }).catch(error => {
                reject(error);
            });
        })
    }
});
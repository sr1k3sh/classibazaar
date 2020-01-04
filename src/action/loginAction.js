import { base_url, LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILED} from "../constant/action-types";

export function fetch_login(email,password) {
    return dispatch => {
        dispatch(start());
        return fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                if (data.error){
                    dispatch(fail(data.error))
                    alert(data.error)
                    return data

                }
                else {
                    dispatch(success(data.token,email))
                    localStorage.setItem("email", email)
                    localStorage.setItem('token',data)
                    return data
                }

            })
    }
}
export const start = () => ({
    type: LOGIN_START
});

export const success = (token,email) => ({
    type: LOGIN_SUCCESS,
    payload: { token,email }
});

export const fail = error => ({
    type: LOGIN_FAILED,
    payload: { error }
});
import axios from 'axios';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

export const MOVIE_CREATE_SUCCESS = 'MOVIE_CREATE_SUCCESS';
export const MOVIE_CREATE_FAIL = 'MOVIE_CREATE_FAIL';
export const MOVIE_EDIT_SUCCESS = 'MOVIE_EDIT_SUCCESS';
export const MOVIE_EDIT_FAIL = 'MOVIE_EDIT_FAIL';


export const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:8080';

function MovieCreateSuccess(response){
    console.log("Response in Success : ", response);
    return{
        type : MOVIE_CREATE_SUCCESS,
        payload : response.data
    }
}

function MovieCreateFailed(response){
    console.log("Response in Fail : ", response);
    return{
        type : MOVIE_CREATE_FAIL,
        payload : response.data
    }
}
export function CreateMovie(MovieDetails){
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    return (dispatch) => {
        const request = axios(`${api}/admin/create_movie`,{
            method: 'post',
            mode: 'no-cors',
            redirect: 'follow',
            withCredentials: true,
            headers: headers,
            data: MovieDetails
        }).then((response)=>{
            if(response.status == 200){
                dispatch(MovieCreateSuccess(response));
                // history.push('/question');
            }else{
                dispatch(MovieCreateFailed(response))
            }
        })
    }    
}


function MovieEditSuccess(response){
    console.log("Response in Success : ", response);
    return{
        type : MOVIE_EDIT_SUCCESS,
        payload : response.data
    }
}

function MovieEditFailed(response){
    console.log("Response in Fail : ", response);
    return{
        type : MOVIE_EDIT_FAIL,
        payload : response.data
    }
}

export function EditMovie(MovieDetails){
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    return (dispatch) => {
        const request = axios(`${api}/admin/update_movie/${MovieDetails.movieId}`,{
            method: 'put',
            // mode: 'cors',
            // redirect: 'follow',
            // withCredentials: true,
            headers: headers,
            data: MovieDetails
        }).then((response)=>{
            if(response.status == 200){
                dispatch(MovieEditSuccess(response));
                var modal = document.getElementById('movieSuccessModal');
                var span = document.getElementsByClassName("close")[0];
                modal.style.display = "block";
                span.onclick = function() {
                    modal.style.display = "none";
                }
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }else{
                dispatch(MovieEditFailed(response))
            }
        })
    }    
}



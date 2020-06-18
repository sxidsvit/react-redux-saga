import {
  CREATE_POST, FETCH_POSTS,
  SHOW_ALERT, HIDE_ALERT,
  SHOW_LOADER, HIDE_LOADER
} from './types'

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000);
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function fetchPosts() {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const responce = await fetch('ttps://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await responce.json()
      setTimeout(() => {
        dispatch({ type: FETCH_POSTS, payload: json })
        dispatch(hideLoader())
      }, 1000)
    } catch (e) {
      dispatch(showAlert('Что-то не так с сервером ...'))
      dispatch(hideLoader())
    }

  }
}
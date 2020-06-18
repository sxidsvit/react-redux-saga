import { REQUEST_POSTS, FETCH_POSTS } from './types'
import { takeEvery, put, call } from 'redux-saga/effects'
import { showLoader, hideLoader, showAlert } from './actions'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({ type: FETCH_POSTS, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert('Что-то не так с сервером ...'))
    yield put(hideLoader())
  }
}


async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return await response.json()
}

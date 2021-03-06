import { run } from '../helpers/try'
import { error } from '../helpers/logger'

let __store

const check = fn => (...args) => {
  if (!__store) {
    error(
      '[ReModulex Error] Forgot to apply the store? Use "applyStore" with your redux store!'
    )
  }
  return run(fn, undefined, ...args)
}

export const applyStore = store => {
  __store = store
}

export const getStore = check(() => __store)
export const dispatch = check((...args) => run(__store, 'dispatch', ...args))
export const getState = check((...args) => run(__store, 'getState', ...args))

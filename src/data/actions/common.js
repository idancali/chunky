import * as cache from '../cache'

export const type = (name, kind) => `Chunky/${kind.toUpperCase()}.${name.toUpperCase()}`
export const timestamp = () => Date.now()

export const start = (name) => ({ type:  type(name, "start"), timestamp: timestamp() })
export const error = (name, error) => ({ type:  type(name, "error"), error, timestamp: timestamp() })
export const ok = (name, data) => ({ type:  type(name, "ok"), timestamp: timestamp() })

export function asyncAction (name, operation) {
  return (dispatch) => {
    dispatch(start(name))
    operation().
          then(data => dispatch(ok(name), data)).
          catch(err => dispatch(error(name, err)))
  }
}

export function getFromCache (name, id) {
  return asyncAction(name, () => cache.retrieveCachedItem(id))
}

export function operation (name, props) {
  
}
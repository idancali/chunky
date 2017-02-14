import Error from '../core/Error';

// Generic Errors
export const UNDEFINED_CHUNKY = () => new Error("Chunky is not configured")
export const COULD_NOT_RETRIEVE_CACHED_ITEM= () => new Error("Unable to retrieve cached item")
export const COULD_NOT_CLEAR_CACHED_ITEM = () => new Error("Unable to clean up the cached item")
export const COULD_NOT_CACHE_ITEM = () => new Error("Unable to cache item")
export const UNABLE_TO_LOAD_APP = () => new Error("Unable to load the application")
export const UNABLE_TO_LOAD_ROUTE = (name, reason) => new Error(`Unable to load route ${name}, because ${reason}`)

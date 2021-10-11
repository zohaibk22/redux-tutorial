import { createStore } from 'redux'
//import your reducers... the combined reducers
import reducers from "./reducers/index"

export const store = createStore(
    reducers,
    {}
)
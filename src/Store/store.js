import { createStore } from "redux"
import { contacts } from "../static-data"
import reducer from "../Reducers/reducer"


const store = createStore(reducer, {contacts: contacts})
export default store;
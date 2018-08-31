import { app } from 'hyperapp'
import { storage, deepMerge } from './helpers/persist'
import actions from './actions'
import state from './state'
import view from './containers/App'
import { location } from "@hyperapp/router"

const main = app(deepMerge(state, storage), actions, view, document.querySelector('.root'))

location.subscribe(main.location)
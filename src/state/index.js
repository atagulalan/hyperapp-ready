import { location } from "@hyperapp/router"

export default {
  location: location.state,
  upload: {
    complete:false
  },
  persist: {
    demo:{
      count:0,
      volatileCount:0,
    }
  },
}

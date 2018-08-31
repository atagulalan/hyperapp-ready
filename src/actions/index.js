import request from '../helpers/request'
import { location } from "@hyperapp/router"
import { stash } from '../helpers/persist'

export default {
    getState: () => state => state,
    location: location.actions,
    integrityCheck: ({text, color, background}) => (state, actions) => {
        actions.getURL("/").then(()=>{
            console.log(
                "%c"+text, 
                "color:"+color+";"+
                "background:"+background+";"+
                "padding:10px 20px;"+
                "font-size:14pt"
            ); 
        });
    },
    getURL: (url) => {
        if(url){
            return request.get(url)
        }
    },
    upload: {
        start: (e) => (state, actions) => {
            if(e.target.files.length>0){
                request.post('/upload', {files:e.target.files}).then(()=>{
                    actions.end();
                })
            }
        },
        end: () => ({ complete: true }),
    },
    persist: {
        demo: {
            increase: (e) => (state) => {
                let returnObject = {count: state.count + e, volatileCount: state.volatileCount + e};
                
                //Object stash (includes count and volatileCount)
                //stash("persist.demo", {...state, ...returnObject}); 

                //Item Stash
                stash("persist.demo.count", {...state, ...returnObject}); 

                return returnObject
            },
        }
    },
} 
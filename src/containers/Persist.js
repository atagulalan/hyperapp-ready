import { h } from 'hyperapp';
import Navigation from "../components/Navigation";

export default (state,actions) => { return (
  <div>
    <h1>Persistence Demo</h1>
    <Navigation />
    Persist: {state.persist.demo.count}
    <br />
    Volatile: {state.persist.demo.volatileCount}
    <br /><br />
    <button onclick={()=>actions.persist.demo.increase(1)}>Increase</button> 
    <br /><br />
    {state.persist.demo.volatileCount > 0 ? "Reload the page to see the changes." : ""}
  </div>
)}
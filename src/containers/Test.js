import { h } from 'hyperapp';
import {INTEGRITY_COLORS} from "../helpers/constants";
import Navigation from "../components/Navigation";
 
export default (state, actions) => { return (
  <div oncreate={actions.integrityCheck(INTEGRITY_COLORS)}>
    <h1>Integration Test</h1>
    <Navigation />
    Please check the developer console.
  </div>
)}
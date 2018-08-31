import { h } from 'hyperapp';
import { Link } from "@hyperapp/router"

export default () => { return (
  <ul className={"nav"}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/test">Integration Test</Link></li>
    <li><Link to="/upload">Upload</Link></li>
    <li><Link to="/persist">Persistance</Link></li>
  </ul>
)}
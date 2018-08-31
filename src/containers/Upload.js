import { h } from 'hyperapp';
import Navigation from "../components/Navigation";

export default (state, {upload}) => { return (
  <div>
    <h1>File Upload Demo</h1>
    <Navigation />
    Please open the developer console's network tab before selecting an item.
    <br /><br />
    <form id="uploadForm" enctype="multipart/form-data" onchange={(e)=>upload.start(e)}>
      <input multiple type="file" id="file" name="file" />
    </form>
    {state.upload.complete && [<br />,"File uploaded."]}
  </div>
)}
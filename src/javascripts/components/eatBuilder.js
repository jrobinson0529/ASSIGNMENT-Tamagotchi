import { getFull } from '../helpers/data/eatData';
import printToDom from '../helpers/printToDom';

const eatBuilder = () => {
  const domString = `<div class="header">
                        <h1>EAT</h1>
                     </div>
                     <div class="body d-flex justify-content-around">
                        <button type="button" class="btn btn-success" id="btn-healthy">Healthy Food</button>
                          <div class="full-container w-25">
                            <h2>${getFull()}</h2>
                          </div>
                        <button type="button" class="btn btn-danger" id="btn-unhealthy">Unhealthy Food</button>
                     </div>`;
  printToDom('#eat', domString);
};

export default eatBuilder;

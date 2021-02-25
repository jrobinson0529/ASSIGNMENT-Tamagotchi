import printToDom from '../helpers/printToDom';

const full = 100;
const eatBuilder = () => {
  const domString = `<div class="header">
                        <h1>EAT</h1>
                     </div>
                     <div class="body d-flex justify-content-around">
                        <button type="button" class="btn btn-success">Healthy Food</button>
                          <div class="full-container w-25"
                            <h2>${full}</h2>
                          </div>
                        <button type="button" class="btn btn-success">Unhealthy Food</button>
                     </div>`;
  printToDom('#eat', domString);
};

export default eatBuilder;

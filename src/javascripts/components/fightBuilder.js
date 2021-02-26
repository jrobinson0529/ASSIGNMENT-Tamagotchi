import getStrength from '../helpers/data/fightData';
import printToDom from '../helpers/printToDom';

const fightBuilder = () => {
  const domString = `<div class="header">
                        <h1>FIGHT</h1>
                     </div>
                     <div class="body d-flex justify-content-around">
                        <button type="button" class="btn btn-success" id="btn-run">RUN</button>
                          <div class="full-container w-25"
                            <h2>${getStrength()}</h2>
                          </div>
                        <button type="button" class="btn btn-danger" id="btn-fight">FIGHT</button>
                     </div>`;
  printToDom('#fight', domString);
};

export default fightBuilder;

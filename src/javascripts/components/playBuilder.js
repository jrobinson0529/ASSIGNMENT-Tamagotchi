import { getFun } from '../helpers/data/playData';
import printToDom from '../helpers/printToDom';

const playBuilder = () => {
  const domString = `<div class="header">
                        <h1>PLAY</h1>
                     </div>
                     <div class="body d-flex justify-content-around">
                        <button type="button" class="btn btn-success" id="btn-super-fun">SUPER FUN</button>
                          <div class="full-container w-25">
                            <h2>${getFun()}</h2>
                          </div>
                        <button type="button" class="btn btn-success" id="btn-slightly-fun">SLIGHTLY FUN</button>
                     </div>`;
  printToDom('#play', domString);
};

export default playBuilder;

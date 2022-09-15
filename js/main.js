import * as ui from './ui.js';
import Grid from './classes/Grid.js';
import binaryTree from './algorithms/BinaryTree.js';

ui.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(ui.form);
  const fd = Array.from(data).reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {});

  const theGrid = new Grid(3, 3);

  // generate maze
  switch (fd.algorithm) {
    case 'BinaryTree':
      binaryTree(theGrid);
      break;
    case 'Aldous-Broder':

      break;
    case 'Ellers':

      break;
    case 'GrowingTree':

      break;
    default:
      fd.algorithm = 'No Algorithm Selected';
  }

  // log
  let logOutput = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(fd)) {
    logOutput = `${logOutput}${key}: ${value}\r`;
  }
  ui.log.innerText = logOutput;
}, false);

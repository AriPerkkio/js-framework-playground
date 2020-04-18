/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';
import { renderer } from '@bikeshaving/crank/dom';

import './styles.css';
import App from './App';

renderer.render(<App />, document.body);

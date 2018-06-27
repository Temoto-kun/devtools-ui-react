import { specifyPlatform } from './utilities/scripts/platform';
import { setTheme } from './utilities/scripts/theme';

import Button from './components/Button';
import TabCollection from './components/TabCollection';
import TextBox from './components/TextBox';

import './utilities/styles/global.scss';

specifyPlatform();
setTheme('light');

export {
  Button,
  TabCollection,
  TextBox,
};

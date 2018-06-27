import { specifyPlatform } from './utilities/scripts/platform';
import { setTheme } from './utilities/scripts/theme';
import './utilities/styles/global.scss';
import './utilities/styles/storybook.scss';

import './components/Button/Button.story';
import './components/TabCollection/TabCollection.story';
import './components/TextBox/TextBox.story';
import './components/SizablePanelCollection/SizablePanelCollection.story';

specifyPlatform();
setTheme('light');

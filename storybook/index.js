import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('../components/Task.stories.js');
  require('../components/PureTaskList.stories.js');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
})

export default StorybookUIRoot;

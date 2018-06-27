import { detect } from 'detect-browser';

function getPlatform() {
  const platform = detect();

  const returned = {
    browser: {
      version: platform.version,
      name: platform.name,
      family: platform.name,
    },
    os: platform.os,
  };

  switch (platform.name) {
    case 'vivaldi':
      returned.browser.family = 'chrome';
      break;
    default:
      break;
  }

  return returned;
}

function specifyPlatform() {
  const platform = getPlatform();

  window.document.documentElement.dataset.browserName = platform.browser.name;
  window.document.documentElement.dataset.browserVersion = platform.browser.version;
  window.document.documentElement.dataset.browserFamily = platform.browser.family;
  window.document.documentElement.dataset.os = platform.os;
}

export { getPlatform, specifyPlatform };

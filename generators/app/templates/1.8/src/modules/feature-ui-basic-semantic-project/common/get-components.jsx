let CB = null;

export function initComponents(COMPONENTS_BASE) {
  require('../../../common/app-styles/init.scss');

  // COMPONENTS_BASE.addInitCallback('Button', () => require('./components/Button.scss'));
  // COMPONENTS_BASE.addInitCallback('Tabs', () => require('./components/Tabs.scss'));
  // COMPONENTS_BASE.addInitCallback('Modal', () => require('./components/Modal.scss'));
  // COMPONENTS_BASE.addInitCallback('Sidebar', () => require('./components/Sidebar.scss'));
  // COMPONENTS_BASE.addInitCallback('Segment', () => require('./components/Segment.scss'));

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}



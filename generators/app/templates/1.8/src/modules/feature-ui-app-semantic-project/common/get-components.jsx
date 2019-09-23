let CB = null;

export function initComponents(COMPONENTS_BASE) {
  require('./init.scss');

  // ======================================================
  // COMPONENTS
  // ======================================================
  COMPONENTS_BASE.addInitCallback('AppHeader', () => require('./components/AppHeader.scss'));

  // ======================================================
  // CONTAINERS
  // ======================================================
  COMPONENTS_BASE.replace('ProjectApp', () => require('./containers/ProjectApp/ProjectApp').default);
  COMPONENTS_BASE.replace('Landing', () => require('./containers/Landing/Landing').default);
  COMPONENTS_BASE.replace('Footer', () => require('./containers/Footer/Footer').default);
  COMPONENTS_BASE.replace('TabsLayout', () => require('./containers/TabsLayout/TabsLayout').default);

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}



let CB = null;

export function initComponents(COMPONENTS_BASE) {
  require('./app-styles/init.scss');

  COMPONENTS_BASE.addClassName('FieldLayout', () => {
    require('./components/form/FieldLayout.scss');
    return 'FieldLayoutProject';
  });
  COMPONENTS_BASE.addClassName('FormLayout', () => {
    require('./components/form/FormLayout.scss');
    return 'FormLayoutProject';
  });
  COMPONENTS_BASE.addInitCallback('Button', () => require('./components/Button.scss'));
  COMPONENTS_BASE.addInitCallback('Tabs', () => require('./components/Tabs.scss'));
  COMPONENTS_BASE.addInitCallback('AppHeader', () => require('./components/AppHeader.scss'));
  COMPONENTS_BASE.addInitCallback('Modal', () => require('./components/Modal.scss'));
  COMPONENTS_BASE.addInitCallback('Sidebar', () => require('./components/Sidebar.scss'));
  COMPONENTS_BASE.addInitCallback('Segment', () => require('./components/Segment.scss'));

  // ======================================================
  // CONTAINERS
  // ======================================================
  COMPONENTS_BASE.replace('ProjectApp', () => require('./containers/ProjectApp/ProjectApp').default);
  COMPONENTS_BASE.replace('Footer', () => require('./containers/Footer/Footer').default);
  COMPONENTS_BASE.replace('TabsLayout', () => require('./containers/TabsLayout/TabsLayout').default);

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}



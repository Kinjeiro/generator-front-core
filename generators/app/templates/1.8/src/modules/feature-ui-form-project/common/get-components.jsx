let CB = null;

export function initComponents(COMPONENTS_BASE) {
  // COMPONENTS_BASE.addClassName('FieldLayout', () => {
  //   require('./components/form/FieldLayout.scss');
  //   return 'FieldLayoutProject';
  // });
  // COMPONENTS_BASE.addClassName('FormLayout', () => {
  //   require('./components/form/FormLayout.scss');
  //   return 'FormLayoutProject';
  // });

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}



let CB = null;

export function initComponents(COMPONENTS_BASE) {
  require('./app-styles/init.scss');

  // COMPONENTS_BASE.replace('AmountInput', () => require('./components/form/fields/AmountInput/AmountInput').default);

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}

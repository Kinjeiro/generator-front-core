let CB = null;

export function initComponents(COMPONENTS_BASE) {
  // ======================================================
  // COMPONENTS
  // ======================================================
  // COMPONENTS_BASE.replace('PhoneInput', () => require('./components/PhoneInput/PhoneInput').default);

  // ======================================================
  // CONTAINERS
  // ======================================================
  // COMPONENTS_BASE.replace('TabsLayout', () => require('./containers/TabsLayout/TabsLayout').default);

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}

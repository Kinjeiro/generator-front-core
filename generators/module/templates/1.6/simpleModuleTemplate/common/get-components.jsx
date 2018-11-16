let CB = null;

export function initComponents(COMPONENTS_BASE) {
  // ======================================================
  // COMPONENTS
  // ======================================================

  // ======================================================
  // CONTAINERS
  // ======================================================
  COMPONENTS_BASE.replace('<%=moduleNameCapital%>Page', () => require('./containers/<%=moduleNameCapital%>Page/<%=moduleNameCapital%>Page').default);

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}

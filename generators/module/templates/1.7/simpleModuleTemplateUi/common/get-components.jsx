let CB = null;

export function initComponents(COMPONENTS_BASE) {
  // ======================================================
  // COMPONENTS
  // ======================================================
//  COMPONENTS_BASE.replace('<%=moduleNameCapital%>Page', () => require('./pages/<%=moduleNameCapital%>Page/<%=moduleNameCapital%>Page').default);

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}

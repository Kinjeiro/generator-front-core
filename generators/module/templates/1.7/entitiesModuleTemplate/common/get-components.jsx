let CB = null;

export function initComponents(COMPONENTS_BASE) {
  // ======================================================
  // COMPONENTS
  // ======================================================
  COMPONENTS_BASE.replace('<%=entityNameCapital%>Card', () => require('./components/<%=entityNameCapital%>Card/<%=entityNameCapital%>Card').default);
  COMPONENTS_BASE.replace('<%=entityNameCapital%>Cards', () => require('./components/<%=entityNameCapital%>Cards/<%=entityNameCapital%>Cards').default);

  // ======================================================
  // CONTAINERS
  // ======================================================
  COMPONENTS_BASE.replace('<%=entityNameCapital%>New', () => require('./containers/<%=entityNameCapital%>New/<%=entityNameCapital%>New').default);
  COMPONENTS_BASE.replace('<%=moduleNameCapital%>Layout', () => require('./containers/<%=moduleNameCapital%>Layout/<%=moduleNameCapital%>Layout').default);

  // ======================================================
  // PAGES
  // ======================================================
  COMPONENTS_BASE.replace('<%=entityNameCapital%>NewPage', () => require('./pages/<%=entityNameCapital%>NewPage/<%=entityNameCapital%>NewPage').default);
  COMPONENTS_BASE.replace('<%=entityNameCapital%>Page', () => require('./pages/<%=entityNameCapital%>Page/<%=entityNameCapital%>Page').default);
  COMPONENTS_BASE.replace('<%=moduleNameCapital%>Page', () => require('./pages/<%=moduleNameCapital%>Page/<%=moduleNameCapital%>Page').default);


  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}

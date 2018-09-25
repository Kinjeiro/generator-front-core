let CB = null;

export function initComponents(COMPONENTS_BASE) {
  // ======================================================
  // COMPONENTS
  // ======================================================
  COMPONENTS_BASE.replace('<%=entityNameCapital%>Card', () => require('./components/<%=entityNameCapital%>Card/<%=entityNameCapital%>Card').default);
  COMPONENTS_BASE.replace('<%=entityNameCapital%>Cards', () => require('./components/<%=entityNameCapital%>Cards/<%=entityNameCapital%>Cards').default);
  COMPONENTS_BASE.replace('<%=entityNameCapital%>New', () => require('./components/<%=entityNameCapital%>New/<%=entityNameCapital%>New').default);

  // ======================================================
  // CONTAINERS
  // ======================================================
  COMPONENTS_BASE.replace('<%=entityNameCapital%>NewPage', () => require('./containers/<%=entityNameCapital%>NewPage/<%=entityNameCapital%>NewPage').default);
  COMPONENTS_BASE.replace('<%=entityNameCapital%>Page', () => require('./containers/<%=entityNameCapital%>Page/<%=entityNameCapital%>Page').default);
  COMPONENTS_BASE.replace('<%=moduleNameCapital%>Page', () => require('./containers/<%=moduleNameCapital%>Page/<%=moduleNameCapital%>Page').default);
  COMPONENTS_BASE.replace('<%=moduleNameCapital%>Layout', () => require('./containers/<%=moduleNameCapital%>Layout/<%=moduleNameCapital%>Layout').default);

  CB = COMPONENTS_BASE;
  return COMPONENTS_BASE;
}

export default function getComponents() {
  return CB;
}

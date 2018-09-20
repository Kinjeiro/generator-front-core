// const coreAppStyleConfig = require('@reagentum/front-core/lib/common/app-style/vars');
const coreAppStyleConfig = require('@reagentum/frontCore_Components/lib/common/app-styles/vars');

// todo @ANKU @CRIT @MAIN - не работает ничего!
// используется в webpack-config.js - для генерешки antd стилей
module.exports = Object.assign(
  {},
  coreAppStyleConfig,
  {
    // Antd override styles vars
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

    // // 'menu-dark-submenu-bg': '#2e73a5',
    // // 'font-size-base': '14px'
    // 'font-size-base': '13px',
    // // 'icon-url': '"~antd-iconfont/iconfont"'

    'primary-color': '#7AC74F',
    'color-primary': '#7AC74F',
    'color-primary-text': '#fff',

    'color-error-text': '#EF3E36',
    'color-error-background': 'transparent',
    'color-error-border': '#EF3E36',

    'color-border': '#98989A',
    'color-border-hover': '#000',
  },
);

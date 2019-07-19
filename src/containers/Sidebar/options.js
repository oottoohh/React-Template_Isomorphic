const options = [
  {
    key: 'blankPage',
    label: 'sidebar.blankPage',
    leftIcon: 'ion-document',
  },
  {
    key: 'authCheck',
    label: 'sidebar.authCheck',
    leftIcon: 'ion-document',
  },
  {
    key: 'Forms',
    label: 'sidebar.forms',
    leftIcon: 'ion-android-mail',
    children: [
      {
        key: 'InputField',
        label: 'sidebar.input',
      },
      {
        key: 'FormsWithValidation',
        label: 'sidebar.formsWithValidation',
      },
      {
        key: 'progress',
        label: 'sidebar.progress',
      },
      {
        key: 'button',
        label: 'sidebar.button',
      },
      {
        key: 'tab',
        label: 'sidebar.tab',
      },
      {
        key: 'checkbox',
        label: 'sidebar.checkbox',
      },
      {
        key: 'radiobox',
        label: 'sidebar.radiobox',
      },
      {
        key: 'selectbox',
        label: 'sidebar.selectbox',
      },
      {
        key: 'transfer',
        label: 'sidebar.transfer',
      },
      {
        key: 'autocomplete',
        label: 'sidebar.autocomplete',
      },
    ],
  },
  {
    key: 'uielements',
    label: 'sidebar.uiElements',
    leftIcon: 'ion-leaf',
    children: [
      {
        key: 'op_badge',
        label: 'sidebar.badge',
      },
      {
        key: 'op_card',
        label: 'sidebar.card2',
      },
      {
        key: 'op_carousel',
        label: 'sidebar.corusel',
      },
      {
        key: 'op_collapse',
        label: 'sidebar.collapse',
      },
      {
        key: 'op_popover',
        label: 'sidebar.popover',
      },
      {
        key: 'op_tooltip',
        label: 'sidebar.tooltip',
      },
      {
        key: 'op_tag',
        label: 'sidebar.tag',
      },
      {
        key: 'op_timeline',
        label: 'sidebar.timeline',
      },
      {
        key: 'dropdown',
        label: 'sidebar.dropdown',
      },
      {
        key: 'pagination',
        label: 'sidebar.pagination',
      },
      {
        key: 'rating',
        label: 'sidebar.rating',
      },
      {
        key: 'tree',
        label: 'sidebar.tree',
      },
    ],
  },
  {
    key: 'table',
    label: 'sidebar.tables',
    leftIcon: 'ion-android-menu',
    children: [
      {
        key: 'table_ant',
        label: 'sidebar.antTables',
      },
    ],
  },
  {
    key: '404',
    label: 'sidebar.404',
    leftIcon: 'ion-document',
  },
];
export default options;

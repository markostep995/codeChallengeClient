export default {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard/default',
          icon: 'feather icon-home',
        },
      ],
    },
    {
      id: 'ui-forms',
      title: 'Forms & Tables',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'form-basic',
          title: 'Form Elements',
          type: 'item',
          url: '/forms/form-basic',
          icon: 'feather icon-file-text',
        },
        {
          id: 'bootstrap',
          title: 'Table',
          type: 'item',
          icon: 'feather icon-server',
          url: '/tables/bootstrap',
        },
      ],
    },
  ],
};

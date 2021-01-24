export default {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'users',
          title: 'Users',
          type: 'item',
          url: '/userList',
          icon: 'fas fa-users',
        },
        {
          id: 'messages',
          title: 'Chat',
          type: 'item',
          url: '/messageList',
          icon: 'fas fa-comments',
        },
      ],
    },
    
  ],
};

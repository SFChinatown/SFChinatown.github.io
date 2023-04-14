export const NavItemsList = [
    {
      title: 'About Us',
      url: '/about-us',
    },
    {
      title: 'Interactive Map',
      url: '/interactive-map',
    },
    {
      title: 'Main Themes',
      url: '/main-themes',
      submenu: [
        {
          title: 'Education',
          url: 'education',
          submenu: [
            {
              title: 'CCSF Chinatown',
              url: 'education/ccsf-chinatown',
            },
          ]
        },
        {
          title: 'Public Health',
          url: 'public-health',
        },
        {
          title: 'Public Spaces',
          url: 'public-spaces',
        },
      ]
    },
  ];
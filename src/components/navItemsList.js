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

  // ReactDOM.render(<DropdownMenu config={[
  //   {
  //     "title": "Option 1",
  //     "submenu": null
  //   },
  //   {
  //     "title": "Option 2",
  //     "submenu": [
  //       {
  //         "title": "Option 2.1",
  //         "submenu": [
  //           {
  //             "title": "Option 2.1.1",
  //             "submenu": null
  //           },
  //           {
  //             "title": "Option 2.1.2",
  //             "submenu": null
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Option 2.2",
  //         "submenu": [
  //           {
  //             "title": "Option 2.2.1",
  //             "submenu": null
  //           },
  //           {
  //             "title": "Option 2.2.2",
  //             "submenu": null
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]}/>, document.querySelector("#app"))
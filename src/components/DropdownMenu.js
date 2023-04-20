import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ items, submenu }) => {

    const getMenuItem = (menuItem) => {
      let title = menuItem.title;
      let url = menuItem.url;
  
      if (menuItem.submenu && menuItem.submenu.length > 0) {
        return (
          <li>
            <a href={"/" + url}>{title}</a>
            <DropdownMenu items={menuItem.submenu} submenu={true} />
          </li>
        );
      } else {
        return <li><a href={"/" + url}>{title}</a></li>;
      }
    };

    let options = [];
    items.map((item, index) => {
        options.push(getMenuItem(item));
    });
  
    return (
        <ul className={submenu ? "submenu" : "menu"}>
            {options}
        </ul>
    );
};

export default DropdownMenu;
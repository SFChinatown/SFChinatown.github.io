import React from 'react';
import NavItems from './NavItems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;

    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
    return (
        <ul
        className={`dropdown ${dropdownClass} ${
          dropdown ? 'show' : ''
        }`}
      >
        {submenus.map((submenu) => (
          <NavItems
            items={submenu}
            depthLevel={depthLevel}
          />
        ))}
      </ul>
    );
  };
  
export default Dropdown;
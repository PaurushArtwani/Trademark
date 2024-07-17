import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const DropdownComponent = ({ direction,className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const dropdownMenus = [
    {
      label: "General Search",
      id: 1,
    },
    {
      label: "Wordmark",
      id: 2,
    },
    {
      label: "Goods and Services",
      id: 3,
    },
    {
      label: "Owner",
      id: 4,
    },
    {
      label: "Serial Number",
      id: 5,
    },
    {
      label: "Regristration Number",
      id: 6,
    },
    {
      label: "Mark Description",
      id: 7,
    },
    {
      label: "Field Tag and Search builder",
      id: 8,
    },
  ];



  return (

      <Dropdown className={className}  isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret  className='dropdown-button'>General Serach</DropdownToggle>
        <DropdownMenu>
          {dropdownMenus.map((item) => (
            <DropdownItem key={item.id} >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

  );
};

DropdownComponent.propTypes = {
  direction: PropTypes.string,
};

export default DropdownComponent;

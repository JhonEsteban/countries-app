import React from 'react';

import '../assets/styles/components/Select.scss';
import { useSelectChange } from '../hooks/useSelectChange';

const Select = () => {
  const { handleSelectChange } = useSelectChange();

  return (
    <select
      onChange={handleSelectChange}
      name='Filter by Region'
      className='select'
    >
      <option>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='Americas'>Americas</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
};

export default Select;

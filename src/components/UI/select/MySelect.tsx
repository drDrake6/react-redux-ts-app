import React, { ComponentProps } from 'react';
import { OptionType } from '../../../types/utils';

type MySelectProps = {
    options: OptionType[],
} & ComponentProps<"select">

const MySelect: React.FC<MySelectProps> = ({options, defaultValue, value, onChange, className}) => {
    return (
        <select
            className={className}
            value={value}
            onChange={onChange}
        >
          <option disabled value="">{defaultValue}</option>
          {options.map(option => 
              <option key={option.key} value={option.value}>
                  {option.name}
              </option>
          )}
        </select>
        
    );
};

export default MySelect;
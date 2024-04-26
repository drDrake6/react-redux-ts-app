import React, { ComponentProps } from 'react';
import { OptionType } from '../../../types/utils';

type MySelectProps = {
    options: OptionType[],
} & ComponentProps<"select">

const MySelect: React.FC<MySelectProps> = ({options, defaultValue, value, onChange}) => {
    return (
        <select
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
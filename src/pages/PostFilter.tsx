import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MyInput from '../components/UI/input/MyInput';
import MySelect from '../components/UI/select/MySelect';
import { PostFilterType } from '../types/utils';
import { getPostKey } from '../utils/other';

type PostFilterProps = {
    filter: PostFilterType;
    setFilter: (filer: PostFilterType) => void
}

const PostFilter: React.FC<PostFilterProps> = ({filter, setFilter}) => {
    return (

        <div>
        <MyInput 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Search..."
        />
        <MySelect
          value={filter.sort}
          onChange={e => setFilter({
            ...filter, sort: getPostKey(e.target.value)
        })}
          defaultValue={'Sort by'}
          options={[
            {value: 'title', name: 'By name', key: uuidv4()},
            {value: 'body', name: 'By description', key: uuidv4()}
          ]}
        />
      </div>
    );
};

export default PostFilter;
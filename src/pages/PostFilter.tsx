import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MyInput from '../components/UI/input/MyInput';
import MySelect from '../components/UI/select/MySelect';
import { PostFilterType } from '../types/utils';
import { getPostKey } from '../utils/other';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/model/MyModel';
import PostForm from '../components/PostForm';

type PostToolsProps = {
    filter: PostFilterType;
    setFilter: (filer: PostFilterType) => void
}

const PostTools: React.FC<PostToolsProps> = ({filter, setFilter}) => {

    //let [modal, setModal] = useState(false);

    return (

        <div className='filter-content'>
        <MyInput 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Search..."
        />
        <MySelect
          value={filter.sort}
          onChange={(e) => {
            setFilter({
            ...filter, sort: getPostKey(e.target.value)
        })}}
          defaultValue={'Sort by'}
          options={[
            {value: '', name: 'not sorted', key: uuidv4()},
            {value: 'title', name: 'By name', key: uuidv4()},
            {value: 'body', name: 'By description', key: uuidv4()}
          ]}
        />
      </div>
    );
};

export default PostTools;
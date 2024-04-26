import React, { ComponentProps } from 'react';
import classes from './MyInput.module.css';

type MyInputProps = {
} & ComponentProps<"input">

const MyInput: React.FC<MyInputProps> = ({...props}) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;
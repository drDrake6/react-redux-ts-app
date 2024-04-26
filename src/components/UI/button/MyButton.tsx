import React, {ComponentProps} from 'react';
import styles from './MyButton.module.css';

type MyButtonProps = ComponentProps<"button">;

const MyButton: React.FC<MyButtonProps> = ({children, ...props}) => {
    return (
        <button {...props} className={styles.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
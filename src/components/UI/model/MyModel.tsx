import React, { ReactNode } from 'react';
import cl from './MyModal.module.css';

type MyModalProps = {
    visible: boolean;
    setVisible: (state: boolean) => void;
    children: ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    if(visible === true){
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
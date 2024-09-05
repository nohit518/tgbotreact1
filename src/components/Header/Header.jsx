import React from 'react';

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
         const {} =
         
    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {tg.initData?.user?.username}
            </span>
            
        </div>
    );
};

export default Header;
""
import { getData } from '@/app/api/getData';

import React from 'react';
import NavContainer from './NavContainer';

const NaVBar = async () => {
    const navBar = await getData()
    const menuList = navBar.menulists;
    const subMenu = navBar.menumaps
    return (
        <div>
            <NavContainer
                menuList={menuList}
                subMenu={subMenu}
            />
        </div>
    );
};

export default NaVBar;
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Header } from './styles';

export default function ChangeTheme({ toogleTheme }) {
    const {colors, title, logo} = useContext(ThemeContext);

    return(
        <Header>
            <img src={logo} alt="Be the Hero" width={90}/>

            <Switch 
                onChange={toogleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.30, colors.primary)}
                onColor={colors.secundary}
            />

        </Header>
    );
}
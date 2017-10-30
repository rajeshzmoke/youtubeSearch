import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = ({headerText}) => ( //headerText === props.headerText
    <Header
    centerComponent={{ text: headerText, style: { color: '#f8f8ff' } }}
    outerContainerStyles={{ backgroundColor: '#E62117' }}
    />
  );

export default AppHeader;

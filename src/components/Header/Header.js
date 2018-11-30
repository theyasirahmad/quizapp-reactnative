import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle} >
            <Text style={textStyle} >{props.name}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#a4c639',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color:'white',
    }
}

export default Header;
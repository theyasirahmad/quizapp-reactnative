import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const CameraButton = (props) => {
    return (
        <View >
            <Button
                onPress={props.onPress}
                buttonStyle={{ backgroundColor: '#a4c639' }}
                textStyle={{ textAlign: 'center' }}
                title={props.name || `start`}
                
            />
        </View>
    )
}
export default CameraButton;
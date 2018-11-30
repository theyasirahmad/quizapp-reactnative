import React from 'react';
import { Text, View } from 'react-native';
import { Camera, Permissions, FaceDetector } from 'expo';
import { Button } from 'react-native-elements';

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            const options = { mode: FaceDetector.Constants.Mode.fast }
            const result = await FaceDetector.detectFacesAsync(photo.uri, options);
            console.log(result);
            if (result.faces.length > 0) {
                console.log("Match found");

                this.props.startQuiz();
            }
        }
    }
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={ref => this.camera = ref}
                        style={{ flex: 1 }} type={this.state.type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                justifyContent: 'flex-end',
                            }}>
                            <Button

                                onPress={this.snap}
                                buttonStyle={{
                                    backgroundColor: '#a4c639',
                                }}
                                textStyle={{ textAlign: 'center' }}
                                title={`Capture`}
                            />
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}
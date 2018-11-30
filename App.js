import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import Camera from './src/components/Camera/Camera';
import Button from './src/components/Button/Button.js';
import Quiz from './src/components/Quiz/Quiz';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      camera: false,
      quiz: false,
      marks: 0,
      result: false,
      finalResult: null
    }
    this.result = this.result.bind(this);
  }

  startQuiz() {
    this.setState({ quiz: true })
  }
  result(finalResult) {
    console.log(finalResult);
    this.setState({ result: true, finalResult })
  }

  render() {
    const { camera, quiz, result } = this.state;

    return (
      <View style={styles.container} >

        {/* {!camera && */}
          <View style={styles.header}>
            <Header name="Quiz Application" />
          </View>
          {/* } */}

        <View style={quiz ? styles.quiz : styles.button} >

          {result ? <View style={{ flex: 1, justifyContent: 'center' }} >
            <Text style={{ fontSize: 30 }}>
              Marks Gained : {this.state.finalResult.marks}
            </Text>
            <Text style={{ fontSize: 30 }}>
              Total marks of : {this.state.finalResult.length * 10}
            </Text>
            <Button
              name="Restart Quiz"
              onPress={() => this.setState({ quiz: false, result: false })}
            />


          </View> : quiz ? <Quiz result={this.result} /> :
              camera ? <Camera startQuiz={() => this.startQuiz()} /> :
                <Button
                  onPress={() => { this.setState({ camera: true }) }}
                />
          }
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    height: 40
  },
  button: {
    flex: 14.4,
    height: 80,
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    color:'#a4c639',
  }
  ,
  quiz: {
    flex: 10,
    height: 500,
    justifyContent: 'center',
  }
});

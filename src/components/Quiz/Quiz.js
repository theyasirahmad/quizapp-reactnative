import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Button from '../Button/Button';

class QuizScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            index: 0,
            value: 0,
            marks: 0,
            selectedValue: 0,
            Questions: [
                {
                    question: "Everything in React is a",
                    options: ["Component", "Module", "Class"],
                    correct: 0
                },
                {
                    question: "What is React",
                    options: ["Building", "Javascript Liberary", "Name of a Car"],
                    correct: 1
                },
                {
                    question: "What is Babel?",
                    options: ["A transpiler", "An interpreter", "A Compiler that compiles react Code"],
                    correct: 2
                },
                {
                    question: "How many elements does a react component return?",
                    options: ["2 Elements", "Multiple Elements", "1 Element"],
                    correct: 2
                },
                {
                    question: "How can you access the state of a component from inside of a member function?",
                    options: ["this.getState()", "this.getState", "this.values"],
                    correct: 2
                },
            ]
        }
    }
    saveData = () => {

        let { index, marks, selectedValue, Questions } = this.state;
        console.log(marks);
        if (Questions.length == index + 1) {

            if (selectedValue == Questions[index].correct) {
                marks += 10;
                this.props.result({ marks, length: Questions.length })
            }
            else {
                this.props.result({ marks, length: Questions.length })
            }

        }
        else if (Questions.length > index + 1) {
            if (selectedValue == Questions[index].correct) {
                marks += 10;
                this.setState({ index: index + 1, marks, value: 0 })
            }
            else {
                this.setState({ index: index + 1, value: 0 })
            }
        }
    }
    render() {
        const { index, value, Questions } = this.state;
        const radio_props = [
            { label: Questions[index].options[0], value: 0 },
            { label: Questions[index].options[1], value: 1 },
            { label: Questions[index].options[2], value: 2 },
        ];

        const question = Questions[index].question;

        return (
            <View style={{ flex: 1 }} >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, fontSize: 30, marginLeft: 10 }} >
                        <View style={styles.question}>
                            <Text style={{ fontSize: 30 }} >
                                {question}
                            </Text>
                        </View>
                        <View style={styles.options}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={value}
                                buttonSize={13}
                                buttonColor={'#a4c639'}
                                selectedButtonColor={'#a4c639'}
                                labelStyle={{ fontSize: 13, color: '#a4c639' }}
                                onPress={(value) => { this.setState({ selectedValue: value }) }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "20%" }}>
                    <Button
                        name={'Next'}
                        onPress={() => this.saveData()}
                        buttonStyle={{ backgroundColor: '#a4c639' }}
                    />

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    question: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 30
    },
    options: {
        flex: 1,
        height: 500,
        justifyContent: 'center',
        fontSize: 30
    }
});
export default QuizScreen;
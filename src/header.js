import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import * as Animatable from 'react-native-animatable';

@inject('todoStore')
@observer
export default class Header extends React.Component {
    constructor() {
        super();
        this.state = { text: '' }
        this.clickDone = this.clickDone.bind(this);
    }

    clickDone() {
        this.props.todoStore.addTodo();
    }

    render() {
        return (
            <View style={styles.header}  animation="bounce" delay={500}>
                <TouchableOpacity onPress={this.clickDone}>
                    <Text style={styles.title}>Hi Mr.SAKARIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2aa3ef',
        padding: 25,
    },
    title: {
        textAlign: 'center',
        color: '#fff'
    },
    add: {
        textAlign: 'right',
        color: '#fff'
    }

})
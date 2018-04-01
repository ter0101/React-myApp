import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react/native';

@inject('todoStore')
@observer
export default class Input extends React.Component {
    constructor() {
        super();
        this.state = { text: '' }
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
    }

    onSubmitEditing() {
        // this.props.todoStore.list = [this.state.text,...this.props.todoStore.list];
        // this.props.todoStore.text = '';
        this.props.todoStore.addTodo();
    }

    render() {
        return (
            <TextInput style={styles.input} value={this.props.todoStore.text}
                placeholder='Enter data information...'
                onChangeText={(text) => this.props.todoStore.text = text}
                returnKeyType={'done'}   //ios
                returnKeyLabel={'done'}  //android
                onSubmitEditing={this.onSubmitEditing}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 15
    }

})
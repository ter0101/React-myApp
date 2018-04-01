import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react/native'

@inject('todoStore')
@observer
export default class List extends React.Component {

    constructor() {
        super();
        //   this.state = { list: ['Click to Remove', 'แปรงฟัน', 'take a showder'] }
        this.removeTodo = this.removeTodo.bind(this);
    }

    componentDidMount() {
        this.props.todoStore.getTodoList();  //list from database
    }

    removeTodo(index) {
        let tmpList = [...this.props.todoStore.list];
        tmpList = tmpList.filter((tmp, i) => i != index); //filter return array only
        this.props.todoStore.list = tmpList;
    }

    onSubmitEditing() {
        this.setState({ text: '' });
    }

    render() {
        return (
            <View>
                {this.props.todoStore.list.map((text, i) =>
                    (
                        <TouchableOpacity key={i}
                            onPress={() => this.removeTodo(i)}
                            style={{ backgroundColor: 'whitesmoke', padding: 15, margin: 5 }}>
                            <Text>{text}</Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({


})
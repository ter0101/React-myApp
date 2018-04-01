import { observable } from 'mobx'
import { AsyncStorage } from 'react-native';

export default class TodoStore {
    @observable list = ['Click to Remove', 'แปรงฟัน', 'take a showder']; //ชื่อตัวแปรที่เราจะเก็บ
    @observable text = '';
    
    async addTodo() {
        if (this.text != '') {
            this.list = [this.text, ...this.list];
            this.text = '';
            await AsyncStorage.setItem("todoList", JSON.stringify(this.list))
        }else {
            alert('Does not have...');
        }
    }

    async getTodoList() {
        this.list = JSON.parse( await AsyncStorage.getItem("todoList")) || [];
    }
}

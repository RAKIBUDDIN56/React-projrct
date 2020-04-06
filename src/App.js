import React from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/Tododlist";

import 'bootstrap/dist/css/bootstrap.min.css'


import { v4 as uuidv4 } from 'uuid';

class App extends React.Component{
    state={
        items:[],
        id:uuidv4(),
        item:'',
        editItem:false

    };
    handleChange=e=>{
        this.setState({
            item: e.target.value
        })
    };
    handleSubmit = (e) =>{
        e.preventDefault();

        const newItem={
            id:this.state.id,
            title:this.state.item
        };
        const updateItem=[...this.state.items,newItem];
        this.setState({
            items:updateItem,
            item:'',
            id: uuidv4(),
            editItem:false

        })

    };

    handleDelete=(id) =>{
        const filteredItem= this.state.items.filter(item =>item.id !==id);
        this.setState({
            items:filteredItem
        })
    };
    handleEdit=id=>{
        const filteredItem= this.state.items.filter(item =>item.id !==id);

        const selectedItem=this.state.items.find(item =>item.id ===id)
        console.log(selectedItem)

        this.setState({
            items:filteredItem,
            item:selectedItem.title,
            editItem:true,
            id:id
        })

    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Todo input</h5>
                            <TodoInput item={this.state.item} handleChange={this.handleChange}
                                       handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
                            <TodoList items={this.state.items}
                                      handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>

                        </div>
                    </div>
                </div>

            </div>

        );
    }

}

export default App;

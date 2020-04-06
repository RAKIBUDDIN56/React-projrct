import React,{Component} from 'react';
import TodoItem from './TodoItem'
import TodoInput from "./TodoInput";




export default class TodoList extends Component {
    render() {
        const {items,handleDelete,handleEdit}= this.props;
        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'> Todo list</h3>
                {
                    items.map(item=>{
                        return(
                            <TodoItem key={item.id} title={item.title}
                             handleDelete={ ()=> handleDelete(item.id)}
                            handleEdit={()=> handleEdit(item.id)}/>

                        )
                    })
                }


            </ul>
        );
    }


}

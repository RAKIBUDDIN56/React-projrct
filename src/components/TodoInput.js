import React,{Component} from 'react';



export default class TodoInput extends Component{
    render() {
        const {item,handleChange,handleSubmit,editItem}  = this.props
        return (
            <div className="row" >
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <input type='text' className='form-control text-capitalize' placeholder='Add todo item'
                                       value={item} onChange={handleChange}/><br/><br/>
                                <button type='submit' className={
                                    editItem ? 'btn btn-block btn-success mt-3':'btn btn-block btn-primary mt-3'
                                }>{editItem ? 'Edit item': 'Add item'}</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>


        );
    }

}

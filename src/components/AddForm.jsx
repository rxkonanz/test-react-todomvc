import App from '../App';
import React, {Component, Fragment} from 'react';

export default class AddForm extends Component {
    render() {
        return(
            <Fragment>
            <h1>To-Do List</h1>
            <div className="new-item">
              <input type="text" className="new-item-input" value={this.props.state.newTodo} onChange={(e)=>{this.props.setNewTodo(e)}}/>
              <button type="button" className="add-button" onClick={(e)=>{this.props.addTodo(e)}}>+</button>
            </div>
            </Fragment>
        )
    }
}
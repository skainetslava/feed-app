import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ITodoAction } from 'src/actions';
import { ICallbackObject } from 'src/components/input/input';
import { addItem } from 'src/actions/index';
import { TodoComponent } from 'src/components/todo';
import { getTodos } from 'src/reducers/selectors';
import { ITodo } from 'src/reducers/todo';
import { IStore } from 'src/store';

export interface ITodoContainerProps {
    todos?: ITodo[],
    actions?: {
        onAddItem: (value:string) => void
    }
}

export interface ITodoContainerState {
    readonly value: string
}


export class TodoContainer extends React.Component<ITodoContainerProps, ITodoContainerState> {
    public state: Readonly<ITodoContainerState> = {
        value: ''
    }

    public handleOnChangeInput = ({value}:ICallbackObject) => {
        this.setState({value});
    }

    public handleOnAddItem = () => {
        const { actions } = this.props;
        const { value } = this.state;
        actions && actions.onAddItem(value)
    }

    public render() {
        const { todos } = this.props;
        const { value } = this.state;

        return (
            todos ?
                <TodoComponent 
                    list={todos} 
                    value={value} 
                    handleOnChangeInput={this.handleOnChangeInput}
                    handleOnAddItem={this.handleOnAddItem}
                />
                : null
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    todos: getTodos(state)
});

const mapDispatchToProps = (dispatch: Dispatch<ITodoAction>) => ({
    onAddItem: (value:string) => dispatch(addItem(value)),
})


export default connect<{}, {}, ITodoContainerProps>(mapStateToProps, mapDispatchToProps)(TodoContainer);
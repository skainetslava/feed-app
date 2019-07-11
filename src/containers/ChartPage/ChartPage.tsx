import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ITodoAction } from 'src/actions';
import { addItem } from 'src/actions/index';
import { getTodos } from 'src/reducers/selectors';
import { ITodo } from 'src/reducers/todo';
import { IStore } from 'src/store';
//import { Input } from 'src/components/input';

export interface ITodoContainerProps {
    todos?: ITodo[],
    actions?: {
        onAddItem: (value: string) => void
    }
}

export interface ICallbackObject {
    value: string
}
export interface ITodoContainerState {
    readonly value: string
}


const ChartPage: React.FC = () => {
    //const [value, setValue] = React.useState('');

    React.useEffect(() => {
    }, [])

    return (
        <div>
        </div>
    );
}

const mapStateToProps = (state: IStore) => ({
    todos: getTodos(state)
});

const mapDispatchToProps = (dispatch: Dispatch<ITodoAction>) => ({
    onAddItem: (value: string) => dispatch(addItem(value)),
})


export default connect<{}, {}, ITodoContainerProps>(mapStateToProps, mapDispatchToProps)(ChartPage);
import { ITaskState, INITIAL_STATE } from './state';

export function TaskReducer(state: ITaskState = INITIAL_STATE, action:any): ITaskState {

    switch(action.type) {
        case 'ADD_TASK' : 
            // console.log('action...', action);
            return {
                tasks: [
                    ...state.tasks,
                    action.tasks
                ]
            };
    }
    return state;
}
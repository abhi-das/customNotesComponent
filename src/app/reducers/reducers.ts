import { combineReducers } from 'redux';
import { TaskReducer } from './todo-reducer';
import { BenefitsReducer } from './benefits-reducer';

export let combine = combineReducers({
  Task: TaskReducer,
  Benefit: BenefitsReducer
});

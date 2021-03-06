import { IBenefitState, INITIAL_BENEFIT_STATE } from './state';

export function BenefitsReducer(state: IBenefitState = INITIAL_BENEFIT_STATE, action:any): IBenefitState {

    switch(action.type) {
        case 'ADD_BENEFIT': 
            return {
                benefits: [
                    ...state.benefits,
                    {
                        name: action.name,
                        desc: action.desc
                    }
                ]
            }
        
    }
    return state;
}

// Task Interface
export interface ITask {
    name: string;
    desc: string;
    date: Date;
}
export interface ITaskState {
    tasks: ITask[]
}
export const INITIAL_STATE: ITaskState = {
    tasks: []
};

// Benefit Interface
export interface IBenefit {
    name: string,
    desc: string
}
export interface IBenefitState {
    benefits: IBenefit[]
}
export const INITIAL_BENEFIT_STATE: IBenefitState = {
    benefits: []
}
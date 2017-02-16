import { Action } from 'redux';

export interface IColorChangeAction extends Action {
    value: number;
}

export const changeColor = (color: string, value: number) => ({
    type: color,
    value
} as IColorChangeAction);
import {Button} from "./index";
import { fn } from '@storybook/test';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary','tertiaty'],
            control: { type: 'radio' },
          },
    },
    args: { onclick: fn() },
}

export const Button1 = {
    args:{
        //background: '#9532b9',
        label: 'Вариант 1',
        variant: 'primary'
    }
}
export const Button2 = {
    args:{
        //background: '#9532b9',
        label: 'Вариант 2',
        variant: 'secondary'
    }
}
export const Button3 = {
    args:{
        //background: '#9532b9',
        label: 'Вариант 3',
        variant: 'tertiary'
    }
}
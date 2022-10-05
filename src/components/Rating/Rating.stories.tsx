import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../stories/Button';
import {Rating} from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating',
    component: Rating
} as ComponentMeta<typeof Rating>;

export const EmptyStars = () => <Rating value={0} onClick={a=>a}/>



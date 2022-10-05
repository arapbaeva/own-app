import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Accordion from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

export const EmptyStars = () => <Accordion titleValue={"Menu"} collapsed={false}/>



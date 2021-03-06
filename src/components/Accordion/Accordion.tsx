

import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    debugger
    console.log('Accordion rendering')
    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.titleValue} />
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody />
        </div>
    }

}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>-- {props.title} --</h3>
    );
}

function AccordionBody(props: any) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    );
}
export default  Accordion;

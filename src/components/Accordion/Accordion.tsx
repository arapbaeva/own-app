import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    const collapsed = false;

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button>TOGGLE</button>
        {!props.collapsed && <AccordionBody/>}
    </div>
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

function AccordionBody() {
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

export default Accordion;

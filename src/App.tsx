import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnnOff} from "./components/OnnOff/OnnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UncontrolledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    return (
        <div className={"App"}>
            <OnnOff/>

            <Accordion titleValue={"Menu"} collapsed={false}/>
            <UnControlledAccordion titleValue={"Menu"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/* Article 1*/}
            {/*<Rating value={3}/>*/}

            {/*Article 2*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <div>props.title</div>
    )
}


export default App;

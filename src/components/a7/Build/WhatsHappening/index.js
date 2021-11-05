import React, {useState} from "react";
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        console.log(whatsHappening);
        dispatch({type: 'create-tweet',
    tweet: {
        tweet: whatsHappening
    }
    });};


    return(
        <>
        <div className="container">
        <img className="col-2 wd-rounded" src="/avators/timcook.jpeg"/>
        <textarea className="col-10" value={whatsHappening} onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>
        </div>

        <button onClick={tweetClickHandler}>
            Tweet
        </button>
        </>
    );
}
export default WhatsHappening;

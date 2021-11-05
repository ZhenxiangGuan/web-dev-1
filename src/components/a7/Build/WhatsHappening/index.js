import React, {useState} from "react";
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        
        dispatch({type: 'create-tweet',
    tweet: {
        tweet: whatsHappening
    }

    
    });

    setWhatsHappening("");

    };


    return(
        <>
        <table>
        <tr>
        <td>
        <img className="rounded-circle wd-avatar m-2"  src="/avators/timcook.jpeg"/>
        </td>
        <td width="100%">
        <textarea className="form-control wd-black" placeholder="What's Happening?" value={whatsHappening} onChange={(event) => {setWhatsHappening(event.target.value);}}>
        </textarea>
        <hr/>
        <span>
        
            <i className="far fa-image me-3"></i>
            <i className="far fa-address-card me-3"></i>
            <i className="far fa-smile me-3"></i>
            <i className="far fa-calendar me-3"></i>
        </span>
        <button className="btn btn-primary wd-round-btn1 fa-pull-right" onClick={tweetClickHandler}>
            Tweet
        </button>
        
        
        </td>
        </tr>
        
       
        </table>

       
        </>
    );
}
export default WhatsHappening;

import React, { useEffect } from "react";
const KeyPressShortCut = (props) => {

    useEffect(() => {
        const obj = {
          title: props.title,
          combo: props.combo,
          des: props.description,
        }
    
        props.setInfo(obj);
      }, [props]);

    useEffect(() => {
        document.onkeyup = e => KeyPress( e, props.combo, props.color);

    }, [props.color, props.combo])
    const KeyPress = (e) => {

        var evtobj = window.event ? window.event : e;
        props.callBack(evtobj);
        return;
        }
    
    return (
        <h1 onClick={() => props.callBack(props.color, props.combo)} color={props.color} combo={props.combo} title={props.title}> 
            {props.title}
        </h1>
    )
}

export default KeyPressShortCut;
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export function isLandscape(){

    //get initial orientation
    const [wid, setWid] = useState(Dimensions.get('window').width);
    const [hei, setHei] = useState(Dimensions.get('window').height);
    const [orientation, setOrientation] = useState(wid>hei);
   
    useEffect(() => {
        Dimensions.addEventListener('change', ({window:{width,height}})=>{
            console.log('is rotating');
            if (width>height) {
                setOrientation(false)
            } else {
                setOrientation(true)
            }
        })
    }, []);
    
    return {orientation, hei, wid};
}
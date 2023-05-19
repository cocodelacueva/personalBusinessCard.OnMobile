import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export function isLandscape(){

    //get initial orientation
    const [orientation, setOrientation] = useState(Dimensions.get('window').width>Dimensions.get('window').height);

    useEffect(() => {
        Dimensions.addEventListener('change', ({window:{width,height}})=>{
            
            if (width>height) {
                setOrientation(false)
            } else {
                setOrientation(true)
            }
        })
        
    }, []);
    
    return orientation;
}
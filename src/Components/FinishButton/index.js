import React from "react";
import {Button, ButtonText} from './styles'

import { useNavigation } from '@react-navigation/native';

export default function FinishButton({title}){
    const navigation = useNavigation(); 
        return(          
            <Button onPress={() => navigation.navigate('SecondHome')}>
                <ButtonText>{title}</ButtonText>
            </Button>
    )
}

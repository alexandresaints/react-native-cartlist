import axios from "axios";
import React, {useState, useEffect } from "react";
import {View, SafeAreaView, FlatList } from "react-native";

import {
    CandyInfoContainer,
    CandyContainer,
    MainFont,
    PriceFont,
    TotalPriceFont,
    CandyImage,
    ButtonContainer,
    TotalContainer,
    FreeContainer,
    FreeText
    }from './styles'
import Line from "../../Components/Line";
import FinishButton from "../../Components/FinishButton";

export default function SecondHome(){

const [dataCandy, setDataCandy] = useState({})
const [value, setValue] = useState(0)
const FlatListFooter = () => {
    return(
        <View>
        <Line/>
        <TotalContainer>
            <TotalPriceFont>Total</TotalPriceFont>
            <TotalPriceFont>R$ {value / 100}</TotalPriceFont>
        </TotalContainer>
        <FreeContainer>
            <FreeText>Parabéns, sua compra tem frete grátis!</FreeText>
        </FreeContainer>
        <Line/>
        <ButtonContainer>
           <FinishButton title='Finalizar compra'/>
        </ButtonContainer>
    </View>
    )
}

    useEffect(() => {
        axios.get('https://apilowprice.000webhostapp.com/api_high.json')
                .then(response => {
                    setDataCandy(response.data)
                }).catch(error => {
                    console.log(error)
                })
    }, [])

    useEffect(() => {
        if(dataCandy.totalizers){
            setValue(dataCandy.totalizers[0].value)
        }
    }, [dataCandy])

    return(
        <SafeAreaView style={{backgroundColor: '#FFF'}}>
            {dataCandy?.items?.lenght < 1 ? null :
                <FlatList
                    data={dataCandy.items}
                    keyExtractor={(item) => {return item.id}}
                    renderItem={({item}) => (                        
                    <CandyContainer>
                        <CandyImage source={{uri: item.imageUrl}}/>
                            <CandyInfoContainer>
                                <MainFont>{item.name}</MainFont>
                                <PriceFont>R${(item.price / 100)}</PriceFont>
                                <MainFont>R${(item.sellingPrice / 100)}</MainFont>
                            </CandyInfoContainer>
                    </CandyContainer>                      
                    )}
                    ListFooterComponent={<FlatListFooter/>}
                />}
        </SafeAreaView>
    )
}
import styled from "styled-components/native";

export const MainFont = styled.Text`
    color: #000;
    font-family: 'Poppins-Bold';
    font-size: 14px;
`
export const CandyContainer = styled.View`
    flex-direction: row;
    border-color: '#000';
    background-color: '#FFF';
    margin: 10px;
`
export const CandyInfoContainer = styled.View`
    flex-direction: column;
    margin-top: 60px;
    bottom: 30px;
    max-width: 170px;
`
export const PriceFont = styled.Text`
    color: #303030;
    font-size: 12px;
    max-width: 120px;
    font-family: 'Poppins-Light';
`

export const TotalPriceFont = styled.Text`
    color: #000;
    font-size: 26px;
    max-width: 120px;
    font-family: 'Poppins-Bold';
`
export const ButtonContainer = styled.View`
    justify-content: center;
    margin-top: 10px;
    margin: 20px;
    padding: 20px;
`

export const TotalContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
`
export const FreeContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
`
export const FreeText = styled.Text`
    color: #2b9031;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins-Regular';
    background-color: #c3f4a1;
    padding: 15px;
    border-radius: 25px;
`

export const CandyImage = styled.Image`
    width: 130px;
    margin-right: 10px;
    border-width: 0.5px;
    border-color: #000;
`
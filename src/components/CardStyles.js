import styled from 'styled-components'

export const DrawedCard = styled.div`
    position: relative;
    top: 20.7%;
    left: 25.3%;
    width: 49.3%;
    height: 44.5%;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #CDE0E2;
    border-radius: 20px;
    opacity: 1;
    box-shadow: 0px 1px 2px #32788D;
    
`;

export const Icon = styled.img`
    position: relative;
    top: 20px;
    left: 20px;    
    width: 15px;
    heigth: 15px;
`;

export const TurnText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap');    
    position: relative;
    width: 100px;
    margin: initial;
    left: 45px;
    font-family: 'Fira Sans',sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #F24556;
`;

export const ActiveSide = styled.p`
    position: relative;
    bottom: 30px;
    text-align: right;
    right: 30px;
    font-weight: 600;
    font-family: 'Fira Sans',sans-serif;
    letter-spacing: 5px;
    color: #000000;
    opacity: 1;
    span{
        color: #c2c2c2;
    }
`;

export const Content = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500;600;700&display=swap');
    width: 600px;
    height: 95px;
    padding: 20px;
    font-weight: 600;
    font-size: 40px;
    text-align: left;
    font-family: 'IBM Plex Serif',serif;
    color: #F24556;
    opacity: 1;
`;

export const Circle  = styled.div`
    position: relative;
    top: -45px;
    right: 35px;
    float: right;
    width: 74px;
    height: 74px;
    border-radius: 50px;
    background-color: #00AEE0;
`;

export const Triangle  = styled.img`
    margin-top: 23px;
    margin-left: 28px;
`;

export const Wave  = styled.img`
    position: relative;
    left: 20px;
    bottom: 30px;
    width: 400px;
    height: 74px;
    border-radius: 50px;
`;


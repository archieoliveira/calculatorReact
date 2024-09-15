import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #C3C3F1;

    display: flex;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 320px;              
    min-height: 300px;  
    border-radius: 30px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


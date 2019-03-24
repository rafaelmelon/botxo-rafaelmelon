import styled from 'styled-components'

export const Container = styled.div `
  background-color: white;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -70px 0 0 -170px;
  border: 1px solid grey;
  border-radius: 10px;
`

export const Title = styled.h2 `
  color: grey;
  margin-bottom: 20px;
`

export const Description = styled.h3 `
  color: grey;
  margin-bottom: 30px;
`

export const Tutorial = styled.div `
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
`


export const Selection = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const Items = styled.div ``

export const Item = styled.li `
  background-color: ${({ selected }) => selected ? 'grey' : 'white'};
  color: ${({ selected }) => selected ? 'white' : 'black'};
  padding: 15px;
  cursor: pointer;
`

export const ItemTitle = styled.p ``

export const ItemInfo = styled.p ``

export const Canvas = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: 1px solid grey;
`

export const Navigation = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const Dots = styled.div ``

export const CustomButton = styled.span `
  color: black;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
`

export const CustomImage = styled.img `
  height: 50px;
  width: 50px;
`

export const CustomDot = styled.img `
  height: 10px;
  width: 10px;
  cursor: pointer;
  margin: 0 5px;
`
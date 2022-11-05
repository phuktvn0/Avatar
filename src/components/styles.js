import styled from "styled-components";

export const ImgItem = styled.img
`
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);
    height: 60px;
    top: 50%;
`

export const ItemListContentStyleComponent = styled.div
`
cursor: pointer;
overflow: hidden;
	border-radius: 10px;
	width: 50px;
	height: 50px;
	position: relative;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.151);
	transition-duration: 0.2s;
`

export const ItemListContentStyleComponentSelected = styled(ItemListContentStyleComponent)
`
background-color: rgba(116, 116, 255, 0.315);
`

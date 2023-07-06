import styled from "styled-components"
import * as Antd from "antd"

export const Card = styled(Antd.Card)`
  width: 250px;
  padding-top: 20px;
  margin: 15px;
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 250px;
`

export const Image = styled.img`
  height: 100%;
`

export const Title = styled(Antd.Card.Meta)`
  padding-bottom: 5px;
`

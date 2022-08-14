import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const Pane = styled.div`
    flex: ${props => props.weight};
`

function SplitScreen({children, leftWeight = 1, rightWeight = 1}) {
    const [left, right] = children;
  return (
    <Container data-testid="wrapper">
        <Pane weight={leftWeight} data-testid="leftPane">
            {left}
        </Pane>
        <Pane weight={rightWeight} data-testid="rightPane">
            {right}
        </Pane>
    </Container>
  )
}

export default SplitScreen
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


const CardExampleExtraContent = (props) => (
  <Card>
    <Card.Header>Block number {props.index}</Card.Header>
    <Card.Content>Proof: {props.proof}</Card.Content>
    <Card.Content extra>
      <Icon name='clock' />Timestamp: {props.timestamp}
    </Card.Content>
  </Card>
)

export default CardExampleExtraContent
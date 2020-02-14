import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleMessageProps = (props) => (
  <Message size='tiny'>
      Amount: {props.amount}, recipient: {props.recipient}, sender: {props.sender}
  </Message>
)

export default MessageExampleMessageProps

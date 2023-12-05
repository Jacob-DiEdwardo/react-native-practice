import React from 'react'

type HOC<IncomingProps, OutgoingProps> = (props: IncomingProps) => OutgoingProps

const withHOC =
  <IncomingProps = {}, OutgoingProps = {}>(
    hoc: HOC<IncomingProps, OutgoingProps>,
    displayName?: string,
  ) => 
  (WrappedComponent: React.FC<IncomingProps & OutgoingProps>) => {
    const Wrapper = (props: IncomingProps) => (
      <WrappedComponent {...props} {...hoc(props)} />
    )
    if (displayName) {
      Wrapper.displayName = displayName
    }
    return Wrapper
  }

export default withHOC

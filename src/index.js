import React, { Component } from 'react'
import glamorous from 'glamorous'
import AvatarThumb from '@time-with/avatar-thumb'

export default class AvatarThumbLabels extends Component {

  render() {

    const { src, firstName, lastName, secondLabel, style } = this.props
    
    let { bgColor, radius, fontSize, color } = this.props
    if (!bgColor) { bgColor = '#7DCE82'}
    if (!fontSize) { fontSize = '18px'}
    if (!radius) { radius = '45px'}
    if (!color) { color = '#7D7B7B'}

    const FirstLabel = glamorous.p({
      color: `${color} !important`,
      display: 'block !important',
      marginTop: '2px !important',
      marginBottom: '0 !important',
      lineHeight: '21px !important',
      fontSize: '18px !important',
      fontWeight: 'bold !important',
      textAlign: 'left !important',
    })

    const SecondLabel = glamorous.p({
      color: `${color} !important`,
      display: 'block !important',
      fontSize: '14px !important',
      lineHeight: '18px !important',
      marginBottom: '0 !important',
      lineHeight: '21px !important',
    })

    return (
      <RootDIV style={ style }>
        <AvatarThumb
          src={ src }
          firstName={ firstName }
          lastName={ lastName }
          bgColor={ bgColor }
          radius={ radius }
          fontSize={ fontSize }
          color={ color }
          style={ avatarStyle }
        />
        <TextDIV>
          <FirstLabel>{ `${firstName} ${lastName}` }</FirstLabel>
          { secondLabel ? <SecondLabel>{ secondLabel }</SecondLabel> : null}
        </TextDIV>
      </RootDIV>
    )
  }
}


const RootDIV = glamorous.div({
  display: 'inline-block',
  verticalAlign: 'top',
})

const TextDIV = glamorous.div({
  display: 'inline-block',
  verticalAlign: 'top',
})

const avatarStyle = {
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '10px',
}

import React from 'react'
import styled from './index.module.css';

export function Avatar({hasBorder = true, src}) {
  return (
    <>
         <img className={hasBorder ? styled.avatarWithBorder : styled.avatar} src={src} />
    </>
  )
}

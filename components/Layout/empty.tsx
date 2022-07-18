import React from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const LayoutEmpty = ({children}: LayoutProps) => {
  return (
    <div>
        <h1>{children}</h1>
    </div>
  )
}

export default LayoutEmpty
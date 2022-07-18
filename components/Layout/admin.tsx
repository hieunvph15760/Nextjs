import React from 'react'
import {LayoutProps} from "../../models/layout"
type Props = {}

const Admin = ({children}: LayoutProps) => {
  return (
    <div>
        <h1>Admin</h1>
        {children}
    </div>
  )
}

export default Admin
import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul>
            <li><Link href="/">Home Page</Link></li>
            <li><Link href="/products">Product</Link></li>
            <li><Link href="/products/1">ProductDetails</Link></li>
        </ul>
    </div>
  )
}

export default Header
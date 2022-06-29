import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className='main'>
            <li><Link href="/"><a className='px-3 main__textLi'>Home Pageee</a></Link></li>
            <li><Link href="/products"><a className='px-3 main__textLi'>Product</a></Link></li>
        </ul>
    </div>
  )
}

export default Header
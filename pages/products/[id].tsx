import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const DetailsId = (props: Props) => {
    const router = useRouter();
    console.log(router.query);
  return (
    <div>DetailsId</div>
  )
}

export default DetailsId
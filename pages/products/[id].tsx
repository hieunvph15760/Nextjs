import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

type ProductProps = {
  product:any
}

const ProductDetail = ({product}: ProductProps) => {
  if(!product) return null;
  return (
    <div>ProductDetail: {product.name}</div>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>{
    const data = await (await fetch(`http://localhost:3001/products`)).json();
    const dataPaths = data.map((item:any) => {
      return { params: { id: item.id} }
    })

    return {
      paths:dataPaths,
      fallback:false
    }
}

export const getStaticProps:GetStaticProps<ProductProps> = async (context:GetStaticPropsContext) =>{
  const data = await ( await fetch(`http://localhost:3001/products/${context.params?.id}`)).json()
  if(!data){
    return {
      notFound:true
    }
  }
  return {
    props:{
      product:data
    }
  }
}

export default ProductDetail
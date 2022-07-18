import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import Link from "next/link"
import useSWR from "swr";

type ProductsProps= {
    products: any[]
}

const Products = ({products}:ProductsProps) =>{
    if(!products) return null;
    return(
        <div>
            {products.map(item => (
                <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps<ProductsProps> = async (context:GetStaticPropsContext) =>{
    const data = await (await fetch("https://62d4ee22cd960e45d45dc40a.mockapi.io/products")).json();
    
    if(!data){
        return {
            notFound:true
        }
    }

    return {
        props:{
            products:data
        }
    }
}


export default Products;
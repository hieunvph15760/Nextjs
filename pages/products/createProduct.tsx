import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { useProducts } from "../../hooks/use-products"

type Props = {
    
}

type dataType = {
    id:any,
    name:any
}


const CreateProduct = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<dataType>();
    const {data:products, error, create} = useProducts();
    if(error) return <div>fail to load</div>
    if(!products) return <div>Loading...</div>
    const onSubmit:SubmitHandler<dataType> = async(data) =>{
        create(data);
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <input className='border border-red-500' type="text" {...register('name')} />
            <button type='submit'>Them</button>
    </form>
  )
}

export default CreateProduct
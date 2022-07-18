import instace from "./instance";

export const add = (product:any) =>{
    return instace.post("/products",product);
}

export const removeItem = (id:any) =>{
    return instace.delete(`/products/${id}`)
}
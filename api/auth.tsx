import instace from "./instance";

export const signup = (user:any) =>{
    return instace.post("/users",user);
}

export const listUsers = (url:any) =>{
    return instace.get(url);
}
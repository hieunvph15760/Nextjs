import useSWR, {useSWRConfig} from "swr";
import {listUsers, signup} from "../api/auth";

export const useAuth = () =>{
    const fetch = async (url:string) =>{
        const {data} = await listUsers(url);
        return data;
    }

    const {data, error} = useSWR("/users",fetch);
    const {mutate} = useSWRConfig();
    
    const register = () =>{
        mutate("/users",async ()=>{
            const {data:user} = await signup({email:"nguyenvanhjeu2k2@gmail.com",password:"ahieu2k2"});
            return [...data,user]
        })
    }

    return {
        data,
        error,
        register
    }
}
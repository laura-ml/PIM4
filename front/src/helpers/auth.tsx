import { LoginProps, RegisterProps } from "@/types"

const apiUrl = process.env.NEXT_PUBLIC_API_URL



export async function register(userData: RegisterProps) {
    try {
        const res = await fetch(`${apiUrl}/users/register`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
            
        } )
        if (res.ok) {
            return await res.json();
        } else {
            const errorData = await res.json();
            if (errorData.message === "User already exists") {
                throw new Error("User already exists");
            } else {
                throw new Error(errorData.message || "Failed to register");
            }
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
}


export async function login(userData: LoginProps) {
    try {
        const res = await fetch(`${apiUrl}/users/login`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
            
        } )
        if(res.ok){
            return res.json()
        } else {
            const errorData = await res.json();
            throw new Error(errorData.message || "Failed to log in");
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
}
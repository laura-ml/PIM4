"use client";
import { useState, useEffect } from "react";
import { validateLogin } from "../../helpers/formValidation";
import { LoginErrorProps, LoginProps } from "../../types";
import { login } from "@/helpers/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Login() {
    const router = useRouter();
    const [dataUser, setDataUser] = useState<LoginProps>({
        email: "",
        password: ""
    });
    const [errorUser, setErrorUser] = useState<LoginErrorProps>({
        email: "",
        password: ""
    });
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await login(dataUser);
            const { token, user } = response;

            localStorage.setItem('userSession', JSON.stringify({ token: token, userData: user }));
            alert("You have successfully logged in");
            router.push("/home");
        } catch (error: any) {
            alert(error.message);
        }
    };

    useEffect(() => {
        const errors = validateLogin(dataUser);
        setErrorUser(errors);
        setIsSubmitDisabled(Object.values(errors).some(error => error !== ""));
    }, [dataUser]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-center text-2xl font-semibold mb-6">Sign in</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            type="text"
                            value={dataUser.email}
                            required
                            onChange={handleChange}
                            className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        {errorUser.email && <p className="text-xs mt-1">{errorUser.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={dataUser.password}
                            required
                            onChange={handleChange}
                            className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        {errorUser.password && <p className="text-xs mt-1">{errorUser.password}</p>}
                    </div>
                    <div className="flex justify-center">
                        <button type='submit' disabled={isSubmitDisabled} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Are you not registered yet? 
                    <Link href="/register">
                        <span className="text-blue-600 hover:underline"> Sign up</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
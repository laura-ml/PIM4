"use client";
import { useState, useEffect } from "react";
import { validateRegister } from "../../helpers/formValidation";
import { RegisterErrorProps, RegisterProps } from "../../types";
import { register } from "../../helpers/auth";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<RegisterProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });
  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value, 
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setFormError(null); 

    try {
      const response = await register(dataUser);

 
      alert("You have successfully registered");
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };


  useEffect(() => {
    const errors = validateRegister(dataUser);
    setErrorUser(errors);
    setIsSubmitDisabled(Object.values(errors).some((error) => error !== ""));
  }, [dataUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold mb-6">Sign up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
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
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
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

          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              value={dataUser.name}
              required
              onChange={handleChange}
              className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            />
            {errorUser.name && <p className="text-xs mt-1">{errorUser.name}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
              Address
            </label>
            <input
              id="address"
              name="address"
              placeholder="Street 123"
              type="text"
              value={dataUser.address}
              required
              onChange={handleChange}
              className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            />
            {errorUser.address && <p className="text-xs mt-1">{errorUser.address}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              placeholder="34 5783 255"
              type="text"
              value={dataUser.phone}
              required
              onChange={handleChange}
              className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            />
            {errorUser.phone && <p className="text-xs mt-1">{errorUser.phone}</p>}
          </div>
          {formError && <div className="text-red-500 text-xs mt-1">{formError}</div>}
          <div className="flex justify-center">
            <button type="submit" disabled={isSubmitDisabled} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
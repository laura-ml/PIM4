import {LoginProps,  LoginErrorProps, RegisterProps, RegisterErrorProps } from "../types"


export function validateLogin(values: LoginProps) : LoginErrorProps {
  let errors: LoginErrorProps = {}

  if(!values.email){
    errors.email = "Email is Required"
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Invalid email"
} else if (!values.password) {
    errors.password = "Password is required"
  }

  return errors
}

export function validateRegister(values: RegisterProps): RegisterErrorProps {
  let errors: RegisterErrorProps = {}

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email"
  }
  if (!values.password) {
    errors.password = "Password is required"
  }

  if (!values.name) {
    errors.name = "Name is required"
  }

  if (!values.address) {
    errors.address = "Address is required"
  }

  if (!values.phone) {
    errors.phone = "Phone is required"
  } else if (values.phone.length < 8) {
    errors.phone = "Phone must be at least 8 characters"
  }

  return errors
}

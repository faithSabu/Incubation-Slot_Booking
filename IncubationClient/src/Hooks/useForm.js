import React, { useState } from 'react'
import {omit} from 'lodash'

const useForm = (formLoginFn) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {


        switch (name) {
            case 'name':
                if(
                    !new RegExp(/^[a-zA-Z ]*$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        name:'Name must not contain any numbers or special characters'
                    })
                }else{
                    let newObj = omit(errors,'name');
                    setErrors(newObj);
                }
                break;
            case 'email':
                if(
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Email is not valid'
                    })
                }else{
                    let newObj = omit(errors,'email');
                    setErrors(newObj);
                }
                break;
                case 'phone':
                    if(
                        !new RegExp(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/).test(value)
                    ){
                        setErrors({
                            ...errors,
                            phone:'Phone number is not valid'
                        })
                    }else{
                        let newObj = omit(errors,'phone');
                        setErrors(newObj);
                    }
                    break;
                case 'password':
                    if(value.length<2 ){
                        setErrors({
                            ...errors,
                            password:'Password is not valid'
                        })
                    }else{
                        let newObj = omit(errors,'password');
                        setErrors(newObj);
                    }
                    break;

            default:
                break;
        }

    }

    const handleFormChange = (event) => {
        event.persist()
        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        setValues({
            ...values,
            [name]: val,
        })
    }

    const handleSubmit = (event) =>{
        if(event) event.preventDefault();
        if(Object.keys(errors).length === 0 && Object.keys(values).length === 4 ){
            formLoginFn();
        }else{
            alert('Please enter valid Details')
        }
    }
    return ({
        values,
        errors,
        handleFormChange,
        handleSubmit
    })
}

export default useForm
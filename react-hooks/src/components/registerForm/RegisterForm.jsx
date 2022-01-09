import React, { useState} from 'react';
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import './register.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {signup} from "../../services/auth.service";
import { ToastContainer, toast } from 'react-toastify';


function RegisterForm (props) {
    const validationSchema = Yup.object ().shape ({
        name: Yup.string ()
            .required ('Введите логин')
            .min (3, 'Username must be at least 6 characters')
            .max (20, 'Username must not exceed 20 characters'),
        email: Yup.string ()
            .required ('Поле Email обязательно для запалнения')
            .email ('Email is invalid'),
        password: Yup.string ()
            .required ('Введите пароль')
            .min (3, 'Password must be at least 6 characters')
            .max (40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string ()
            .required ('Повторите пароль')
            .oneOf ([ Yup.ref ('password'), null ], 'Пароли не совпадают'),
        acceptTerms: Yup.bool ().oneOf ([ true ], 'Accept Terms is required')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const [loading, setLoading] = useState(false);
    const [registered, setRegistered] = useState(false);

    const onSubmit = signupRequest => {
        setLoading(true);
        signup(signupRequest)
            .then(response => {
                toast.success("You're successfully registered. Please login to continue!")
                setLoading(false)
                setRegistered(true)
                //props.history.push("/");
                console.log (JSON.stringify (signupRequest, null, 2));

            }).catch(error => {
            setLoading(false)
            console.log (JSON.stringify (error.message));
            toast.error(error.message || 'Oops! Something went wrong. Please try again!')
        });
    }


    return (
        <>
            <ToastContainer />
        <div className="register-form">
            <h1>Форма регистрации</h1>
            <form onSubmit={ handleSubmit (onSubmit) }>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        name="username"
                        type="text"
                        { ...register ('name') }
                        className={ `form-control ${ errors.name ? 'is-invalid' : '' }` }
                    />
                    <div className="invalid-feedback">{ errors.name?.message }</div>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        name="email"
                        type="text"
                        { ...register ('email') }
                        className={ `form-control ${ errors.email ? 'is-invalid' : '' }` }
                    />
                    <div className="invalid-feedback">{ errors.email?.message }</div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        { ...register ('password') }
                        className={ `form-control ${ errors.password ? 'is-invalid' : '' }` }
                    />
                    <div className="invalid-feedback">{ errors.password?.message }</div>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        name="confirmPassword"
                        type="password"
                        { ...register ('confirmPassword') }
                        className={ `form-control ${
                            errors.confirmPassword ? 'is-invalid' : ''
                        }` }
                    />
                    <div className="invalid-feedback">
                        { errors.confirmPassword?.message }
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary float-left"
                            disabled={loading}>
                        {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                        Register
                    </button>
                    <Button
                        type="button" onClick={ () => reset () }
                        disabled={loading}
                        className="btn btn-warning float-centre">
                        {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                        Reset
                    </Button>
                    <Button className="btn btn-dark float-right"
                            disabled={loading}
                            as={Link} to="/login">Назад</Button>
                </div>
            </form>
        </div>
        </>
    );
}

export default RegisterForm;
import React from 'react';
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import './register.css';

function Register () {
    const validationSchema = Yup.object ().shape ({
        username: Yup.string ()
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
        formState: { errors }
    } = useForm ({
        resolver: yupResolver (validationSchema)
    });
    const onSubmit = data => {
        console.log (JSON.stringify (data, null, 2));
    };
    return (
        <div className="register-form">
            <form onSubmit={ handleSubmit (onSubmit) }>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        name="username"
                        type="text"
                        { ...register ('username') }
                        className={ `form-control ${ errors.username ? 'is-invalid' : '' }` }
                    />
                    <div className="invalid-feedback">{ errors.username?.message }</div>
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
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                    <button
                        type="button"
                        onClick={ () => reset () }
                        className="btn btn-warning float-right"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
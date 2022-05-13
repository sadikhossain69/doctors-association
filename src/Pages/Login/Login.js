import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    if (googleLoading || emailLoading) {
        return <Loading />
    }

    if (googleError || emailError) {
        toast.error(googleError?.message || emailError?.message, { id: "error" })
    }

    if (googleUser || emailUser) {
        toast.success("User Logged In", { id: 'Login' })
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    }


    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center font-bold text-2xl">Login</h2>




                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide A Valid Email'
                                }
                            })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className="label-text-alt text-red-500">{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className="label-text-alt text-red-500">{errors.email.message}</p>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 character or longer"
                                },
                            })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p className=' mt-2 text-center'>
                        <small>
                            New to Doctors Association? <Link className=' text-primary' to='/signup'>Create A New Account</Link>
                        </small>
                    </p>


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full max-w-xs">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
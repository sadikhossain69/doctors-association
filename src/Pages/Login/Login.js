import React from 'react';
import { useSignInWithGoogle, } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        toast.error(error.message, { id: "error" })
    }

    if (user) {
        toast.success("User Logged In", { id: 'Login' })
    }

    const onSubmit = data => {
        console.log(data);
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


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full max-w-xs">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
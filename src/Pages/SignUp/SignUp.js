import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile, } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';


const SignUp = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const [token] = useToken(googleUser || emailUser)
    


    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    if (googleLoading || emailLoading || updating) {
        return <Loading />
    }

    if (googleError || emailError || updateError) {
        toast.error(googleError?.message || emailError?.message || updateError?.message, { id: "error" })
    }

    if (token) {
        // console.log(googleUser || emailUser);
        toast.success("User Logged In", { id: 'SignUp' })
        navigate(from, { replace: true });
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        reset()
    }

    return (
        <div className='flex items-center justify-center mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center font-bold text-2xl">Sign Up</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required"
                                },
                                minLength: {
                                    value: 5,
                                    message: "Minimum 5 Character Needed"
                                }
                            })} type="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <p className="label-text-alt text-red-500">{errors.name?.message}</p>}
                                {errors.name?.type === 'minLength' && <p className="label-text-alt text-red-500">{errors.name?.message}</p>}
                            </label>
                        </div>
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

                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                    <p className=' mt-2 text-center'>
                        <small>
                            Already Have An Account? <Link className=' text-primary' to='/login'>Login Here</Link>
                        </small>
                    </p>


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full max-w-xs">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
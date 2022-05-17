import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = '7da2b2086b902054d13e6c94a30f0b6a'

    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }

                    fetch(`http://localhost:5000/doctor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor Added', { id: 'doctor added' })
                            }
                            else {
                                toast.error("Failed to add the doctor", { id: 'Failed to add the doctor' })
                            }
                        })

                }
                console.log("imgbb", result);
                reset()
            })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h3 className="text-3xl text-center">Add a new Doctor!</h3>
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
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register("speciality", {
                        required: {
                            value: true,
                            message: "Specialization is Required"
                        }
                    })} className="select select-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                    <label className="label">
                        {errors.speciality?.type === 'required' && <p className="label-text-alt text-red-500">{errors.speciality.message}</p>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register("image", {
                        required: {
                            value: true,
                            message: "Image is Required"
                        },
                    })} type="file" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.image?.type === 'required' && <p className="label-text-alt text-red-500">{errors.image?.message}</p>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;
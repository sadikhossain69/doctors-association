import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='font-semibold'>{review.description}</p>
                <div className=" flex items-center space-x-5 mt-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-green-500 ring-offset-base-100">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">
                            {review.name}
                        </h4>
                        <p>
                            {review.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
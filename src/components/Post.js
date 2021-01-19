import React from 'react';

export default ({post}) => {
    return (
        <div className='card' style={{marginBottom: '10px'}}>
            <div className='card-body'>
                <h5 className='card-title' className='text-center'>
                    {post.title}
                </h5>
            </div>
        </div>
    )
}

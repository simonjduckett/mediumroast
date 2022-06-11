import React from 'react';

const ContentBlock = (props) => {
    return ( 
        <section data-scroll-section className='contentBlock abovePageBorder'>
            <div className='w-50'><h2 className='text-stroke'>{props.title}</h2></div>
            <div className='w-50 position-relative'>
                <div className='contentBlock__textBottomRight'>
                    <p>{props.text}</p>
                </div>
            </div>
        </section>
     );
}

export default ContentBlock;
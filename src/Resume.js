import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className = "resume">
            <div class=" text-center mt-20 mb-10 ml-5">
                <span class="block uppercase text-pink-700 text-2xl font-bold">
                    Resume</span>

<button class="md:w-1/4 h-10 items-center justify-center border border-gray-400 font-semibold m-10" type="button">
     <Link to="Files/Portia Ansah.pdf" target="_blank" download>Download my Resume </Link></button>
</div>
        </div>
    )
}

export default Resume

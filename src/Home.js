import React from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
 <div className="container">

      <div class="rounded-xl p-8">
      <div class="mt-8 grid md:grid-cols-2 gap-5">
   
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-semibold">
    Hi World, I am Portia Ansah.
      </p>
    </blockquote>
  
      <div class="text-cyan-600 text-4xl font-semibold">
        I'm a freelance Software developer, with Computer Science background, specializing in Front-end and web dev.
      </div>
      <div class="mt-8 ml-20 flex-auto flex space-x-3">
        <button class="w-1/3 h-10 flex items-center justify-center rounded-md bg-blue-500 text-white font-semibold" type="button"><Link to = '/projects'> My works</Link></button>
        <button class="w-1/3 flex items-center justify-center rounded-md border border-blue-500 font-semibold" type="button"><Link to = '/contact'> Let's talk</Link></button>
      </div>
 
  </div>

  <img class="md:w-100 md:h-auto rounded-full mx-auto" src="img/memoji1.jpg" alt="" width="384" height="520"/>
        
  </div>
</div>

<About />
<Projects />
<Resume />
<Contact />
<Footer />
</div>
    )
}

export default Home

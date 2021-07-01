import React from 'react';

const Contact = () => {
    return (
       <div className="contact">
           <div class = "text-center mt-20">
               <span class = "block uppercase text-pink-700 text-2xl font-bold">Contact</span>
           </div>

           <div class="rounded-xl p-8">
               <div class = "mt-8 grid md:grid-cols-2 gap-10">
                   <div class = "md:m-20">
                     <p class="text-gray-600 text-xl font-medium mb-20">Have an inquiry or some feedback for me? <br/>
                     Need a website or a front end developer? 
                     <br/> </p>

                     <span class="text-gray-500 md:mt-10">Get in touch:</span>

                     <div class="flex items-baseline mt-4 mb-6">
                     <div class="flex"></div>
                   <a href="https://github.com/PAnsah98" target = "_blank" rel="noreferrer" class = "w-7 h-7 mr-3 flex items-center">
                    <img src="img/github.png" alt="git"/></a>

                    <a href="http://linkedin.com/in/portia-ansah-8b4677199" target = "_blank" rel="noreferrer" class = "w-7 h-7 mr-3 flex items-center">
                    <img src="img/linkedin.png" alt="linkedin"/></a> 

                    <a href = "mailto:portiaansah15@gmail.com" target = "_blank" rel="noreferrer" class = "w-7 h-7 mr-3 flex items-center">
                   <img src="img/email.png" alt="email" className="email" /></a> 
                   </div>
                   </div>

                   <div><img class="md:w-100 ml-20 mt-0" src="img/memoji2.jpg" alt="" width="384" height="450"/></div>
                   </div>
                   </div>

                   </div>
                  
                   
              
       
    )
}

export default Contact

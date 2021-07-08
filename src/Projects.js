import React from 'react'

const Projects = () => {
    return (
        <div className = "projects">
            <div class="lg:mt-20 lg:ml-20">
          <span class="block uppercase text-pink-700 text-2xl font-bold mb-10 text-center ">
            Projects</span>

            
            <div class = "bg-purple-50 p-5 m-5">
            <span  class="text-left text-cyan-600 text-xl font-bold mt-10 ml-10">PnP Events</span>
  
              <div class = "grid lg:grid-cols-2">
                <p class = "mr-10 ml-10 mb-10 mt-5 text-lg font-medium">
               An event booking page, where after you register, you will be 
               able to post an event and join an event posted by someone else. 
               You get to see the events available and the days they will take place.
               This is a joint project where I developed the front end, from the 
               registration pages to user dashboard and every other thing
                <li>
                    React JS
                </li>
                <li>
                    Tailwind CSS
                </li>
                <li>
                  CSS
                </li>
                </p>
                <div class = "grid lg:grid-row-2">
                <img class="lg:w-100 lg:h-auto mx-auto shadow-lg mb-5" src="img/Events2.png" alt="" width="384" height="520"/>
                <img class="lg:w-100 lg:h-auto mx-auto shadow-lg mb-5" src="img/Events.png" alt="" width="384" height="520"/>
                </div>
               </div>
              </div>

           <div class = "grid lg:grid-cols-3">
           <div class = "bg-red-50 p-5 m-5 mt-10">
            <span  class="text-left text-cyan-600 text-xl font-bold mt-10 ml-10">PanFood</span>
                  <div>
                  <p class = "mr-10 ml-10 mb-10 mt-5 text-lg font-medium">
               PanFood, a website dedicated to teach how to prepare 
               some meals and the time it takes to prepare them.
                This project is purely frontend.
                <li>
                    HTML
                </li>
                <li>
                    Tailwind CSS
                </li>
                <li>
                    JS
                </li>
                </p>
                  <img class="lg:w-100 lg:h-auto mx-auto shadow-lg" src="img/panfood.png" alt="" width="384" height="520"/>
              
                  </div>
                 </div>

                 <div class = "bg-blue-50 p-5 m-5 mt-10">
            <span  class="text-left text-cyan-600 text-xl font-bold mt-10 ml-10">RegisterNow</span>
                  <div>
                  <p class = "mr-10 ml-10 mb-10 mt-5 text-lg font-medium">
               RegisterNow is a single webpage for registration
                This project is purely frontend.
                <li>
                    HTML
                </li>
                <li>
                    Bootsrap
                </li>
                <li>
                    JS
                </li>
                </p>
                  <img class="lg:w-100 lg:h-auto mx-auto shadow-lg" src="img/Registration.png" alt="" width="384" height="520"/>
              
                  </div>
                 </div>
              

              <div class = "bg-purple-50 p-5 m-5 mt-10">
            <span  class="text-left text-cyan-600 text-xl font-bold mt-10 ml-10">Standards Catalogue</span>
  
              <div>
                <p class = "mr-10 ml-10 mb-10 mt-5 text-lg font-medium">
               This is a catalogue website, where you get to know the prices 
               of stuff. It goes on to show other products available. Entirely frontend.
                <li>
                    HTML
                </li>
                <li>
                    Tailwind CSS
                </li>
                <li>
                    JS
                </li>
                </p>

                <img class="lg:w-100 lg:h-auto mx-auto shadow-lg" src="img/standards.png" alt="" width="384" height="520"/>
              </div>
              </div>
              </div>

              <div class = "grid lg:grid-cols-3">
           <div class = "bg-red-50 p-5 m-5 mt-10">
            <span  class="text-left text-cyan-600 text-xl font-bold mt-10 ml-10">Ekumfi Atwa</span>
                  <div>
                  <p class = "mr-10 ml-10 mb-10 mt-5 text-lg font-medium">
             A town webapp, that incudes clans,family tree of each 
             clan, and registration for new members. Frontend dev by me.
                <li>
                    Bootstrap
                </li>
                <li>
                    HTML
                </li>
                </p>
                  <img class="lg:w-100 lg:h-auto mx-auto shadow-lg" src="img/Family.png" alt="" width="384" height="520"/>
              
                  </div>
                 </div>

                 <div class = "bg-blue-50 p-5 m-5 mt-10">
            <span  class="text-left text-cyan-600 text-xl font-bold mt-10 ml-10">Today</span>
                  <div>
                  <p class = "mr-10 ml-10 mb-10 mt-5 text-lg font-medium">
              This is a simple JS application that tells you the current date and time
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    JS
                </li>
                </p>
                  <img class="lg:w-100 lg:h-auto mx-auto shadow-lg" src="img/Time.png" alt="" width="384" height="520"/>
              
                  </div>
                 </div>

                 <div class = "bg-pink-50 p-5 m-5 mt-10">
            <span  class="text-left text-cyan-600 text-xl font-bold mt-10 ml-10">MyCalculator</span>
                  <div>
                  <p class = "mr-10 ml-10 mb-10 mt-5 text-lg font-medium">
               A simple JS application that allows you to make basic calculations.
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    JS
                </li>
                </p>
                  <img class="lg:w-100 lg:h-auto mx-auto shadow-lg" src="img/Calculator.png" alt="" width="384" height="520"/>
              
                  </div>
                 </div>
              </div>

            </div>
</div>
    )
}

export default Projects

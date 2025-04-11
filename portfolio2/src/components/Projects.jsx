import React from "react"

const Projects = () => {
    const pro =[
      {
        title:"Real-Time ChatApplication",
        date:"Date: 9/7/2024",
        techno:"Using Reactjs Expressjs Node.js and Mongodb (Mern Stack)",
        description: "A full-featured real-time chat application that allows multiple users to communicate instantly using WebSockets. Includes features like online/offline indicators, message timestamps, typing indicators, and private messaging. Built with React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for storing user data and chat history."

      },
      {
        title:"Tick Tack Toe Game",
        date:"Date: 2/3/2024",
        techno:"Using HTML CSS JavaScript",
        description: "A fun and interactive browser-based Tic Tac Toe game built with HTML, CSS, and JavaScript. Features include player vs. player mode, instant win detection, draw logic, and a clean, responsive UI with smooth transitions and a restart option."

      },
      
        {
            title:"Bouble Game",
            date:"Date: 7/4/2024",
            techno:"Using HTML CSS JavaScript",
            description: "An engaging and fast-paced bubble popping game built using HTML, CSS, and JavaScript. Players aim to pop bubbles with matching numbers within a time limit, enhancing focus and reflexes. Includes timer, scoring system, and dynamic difficulty for an addictive experience."

          }
      
    ]
  return (
    <div className="w-screen gap-10 h-max p-10 flex flex-col items-center">
      <div>
        <h1 className="text-5xl font-bold text-red-500">Projects</h1>
      </div>
      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {
            pro.map((pr)=>(
                <div key={pr.title} className="rounded-2xl min-w-[80vw] flex justify-between py-5 md:py-10 px-10 border-2 shadow-2xl md:min-w-[32vw] hover:scale-102 transition-transform duration-400">
                    <div className="text-1xl space-y-3">
                        <h2 className="font-bold text-2xl">{pr.title}</h2>
                        <p>{pr.date}</p>
                        <p>{pr.techno}</p>
                        <p>{pr.description}</p>
                    </div>
                    
                    </div>
            )) }
      </div>
     
    </div>
  )
};

export default Projects;

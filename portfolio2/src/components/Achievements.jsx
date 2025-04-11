import React from "react"

const Achievements = () => {
    const Achieve =[
        {
            title:"Blind C Inter Collage Compitition",
            description:"2nd Position Achieved"
        },
        {
            title:"Triple Jump University Level Compotion",
            description:"2nd Position Achieved"
        },
        {
            title:"Inter-Collage Android Development workshop",
            description:"participent"
        },
        {
            title:"Bite Bettle Hackathon",
            description:"Participant"
        },
        {
            title:"Inter Collage Sports Event Kho",
            description:"1st Position Achieved"
        },{
            title:"Balod Technofest Project Presentation",
            description:"Participation"
        }
    ]
  return (
    <div className="w-screen h-max p-10 gap-10 flex flex-col items-center">
      <div>
        <h1 className="text-5xl font-bold text-red-500">Achievements</h1>
      </div>
      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {
            Achieve.map((ach)=>(
                <div key={ach.title} className="hover:scale-102 transition-transform duration-400 rounded-2xl min-w-[80vw] border-2 flex justify-between px-5 py-5 md:py-10 shadow-2xl md:min-w-[32vw]">
                    <div className="text-1xl">
                        <h2 className="font-medium flex flex-wrap">{ach.title}</h2>
                        <p>{ach.description}</p>
                    </div>
                    
                    </div>
            )) }
      </div>
     
    </div>
  )
};

export default Achievements;

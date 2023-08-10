import React from "react";

const SkillsCard = ({skill}) => {
  return (
    <div className="flex ">
      {skill.map((skillItem, index) => (
        <div key={index} className="card w-[300px] h-[100px] flex items-center cursor-pointer">
            <div className="w-full h-full flex items-center gap-2 p-1 flex-col">
                <img className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain" src={skillItem.icon} alt="" />
                <span className="text-xl font-playfair font-semibold">
                    {skillItem.title}
                </span>
            </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;

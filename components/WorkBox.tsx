import React from "react";

type WorkBoxProps = {
  index: number;
  bgColor: string;
  heading: string;
  body: string;
  textColor: string
};

const WorkBox = ({ index, bgColor, heading, body, textColor }: WorkBoxProps) => {
  return (
    <div>
      <div className={`py-2 px-6 rounded-lg w-fit text-[35px] font-bold`} style={{backgroundColor: bgColor, color: textColor}}>{index}</div>
      <h1 className="mt-5 font-bold text-blue-950 text-lg">{heading}</h1>
      <p className="text-textColor text-[15px] mt-5 leading-normal">{body}</p>
    </div>
  );
};

export default WorkBox;

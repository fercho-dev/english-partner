import React, { Children } from "react";
import {Image} from "@nextui-org/react";
import ParseText from './ParseText'

export function Message({userName, text}) {
  return (
    <div className={`my-2 flex flex-col ${userName.trim() === 'Partner:' ? 'text-left items-start' : 'text-right items-end'}`}>
      <div className="flex">
        <Image
          className="w-[30px]"
          src= "/icon_person.svg"
          alt="user icon"
        />
        <p><b className="font-bold">{userName}</b></p>
      </div>
      <ParseText text={text} />
    </div>
  );
}

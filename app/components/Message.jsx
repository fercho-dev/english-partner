import React, { Children } from "react";
import {Image} from "@nextui-org/react";

//className="flex m-[50px]"

export function Message({userName, children}) {
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
      <p>{children}</p>
    </div>
  );
}

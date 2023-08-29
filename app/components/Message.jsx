import React, { Children } from "react";
import {Image} from "@nextui-org/react";

export function Message({userName, children}) {
  return (
    <div className="flex m-[50px]">
      <Image
        className="mr-[50px] w-[30px]"
          src= "/icon_person.svg"
      />
      <div>
      <h3 className="font-bold">{userName}</h3>
      {children}
      </div>
    </div>
  );
}

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
      <p><b className="font-bold">{userName}</b></p>
      <p>{children}</p>
      </div>
    </div>
  );
}

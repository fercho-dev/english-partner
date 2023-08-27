import React from "react";
import {Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Image from "next/image";

export function Input() {
  const [userMessage, setUserMessage] = React.useState("");

  const handleMessageSended = () => {
    //TODO: send message to backend; api not implemented yet
    console.log(userMessage);
  }

  return (
    <div className="p-4 flex items-center gap-4">
      <Textarea
        label=""
        labelPlacement="inside"
        minRows={1}
        placeholder="Type your questions here"
        className="max-w-2xl"
        classNames={{
          inputWrapper: "border border-2 border-gray-300 bg-white",
        }}
        value={userMessage}
        onValueChange={setUserMessage}
      />

      <Button isIconOnly color="primary" aria-label="send-message" className="self-end" onPress={() => handleMessageSended()}>
        <Image src="/send.svg" alt="send message" width="24" height="24" />
      </Button>
    </div>
  );
}

"use client";

import React from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react";

export function CardComponent({ title, body, button }) {
  return (
    <Card className="max-w-[400px] bg-foreground-100">
      <CardHeader className="text-[1.5rem] font-bold">
        <h3>{title}</h3>
      </CardHeader>

      <CardBody>
        <p>{body}</p>
      </CardBody>

      <CardFooter className="flex flex-row-reverse">
        <Button
          href={button.url}
          as={Link}
          color="primary"
          variant="solid"
          size="lg"
        >
          {button.text}
        </Button>
      </CardFooter>
    </Card>
  );
};

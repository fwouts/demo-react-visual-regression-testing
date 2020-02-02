import Button from "@atlaskit/button";
import React from "react";

export const WelcomingButton = (props: { name?: string }) => {
  return <Button appearance="primary">Hello, {props.name || "World"}!</Button>;
};

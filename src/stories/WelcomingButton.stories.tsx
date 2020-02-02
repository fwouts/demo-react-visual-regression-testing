import { storiesOf } from "@storybook/react";
import React from "react";
import { WelcomingButton } from "../WelcomingButton";

storiesOf("WelcomingButton", module)
  .add("no name", () => <WelcomingButton />)
  .add("with name", () => <WelcomingButton name="React Sydney" />);

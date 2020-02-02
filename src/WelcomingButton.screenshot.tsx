import React from "react";
import { ReactScreenshotTest } from "react-screenshot-test";
import "./index.css";
import { WelcomingButton } from "./WelcomingButton";

ReactScreenshotTest.create("WelcomingButton")
  .viewport("Desktop", {
    width: 1024,
    height: 768
  })
  .viewport("iPhone X", {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    isLandscape: false
  })
  .shoot("no name", <WelcomingButton />)
  .shoot("with name", <WelcomingButton name="React Sydney" />)
  .run();

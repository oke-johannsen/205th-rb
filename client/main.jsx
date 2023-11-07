import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import App from "../imports/ui/App";

Meteor.startup(() => {
  document.documentElement.setAttribute("lang", "de");
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  root.render(<App />);
});

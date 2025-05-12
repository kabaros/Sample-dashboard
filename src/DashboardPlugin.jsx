import { DashboardPluginWrapper } from "@dhis2/analytics";
import React from "react";
import Plugin from "./App.jsx";

const DashboardPlugin = (props) => {
  return (
    <DashboardPluginWrapper {...props}>
      {(parentProps) => <Plugin {...parentProps} />}
    </DashboardPluginWrapper>
  );
};

export default DashboardPlugin;
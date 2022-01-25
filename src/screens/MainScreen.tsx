import React, { useMemo } from "react";
import GridLayout from "react-grid-layout";
import SideMenu from "../components/SideMenu.tsx";
import useWindowDimensions from "../hooks/useWindowDimensions.tsx";
import { Input } from "@mantine/core";
import { RiSearchEyeFill } from "react-icons/ri";
import { Colors } from "../utils/colors.ts";
const { ipcRenderer } = window.require("electron");
function MainScreen() {
  const { width, height } = useWindowDimensions();
  const dynamicHeight = useMemo(() => height / 100, [height]);

  const layout = [
    {
      i: "sidemenu",
      x: 0,
      y: 0,
      w: 3,
      h: 100 - 50 / dynamicHeight,
      static: true,
    },
    {
      i: "mainMenu",
      x: 3,
      y: 0,
      w: 9,
      h: 100 - 50 / dynamicHeight,
      static: true,
    },
    {
      i: "bottomBar",
      x: 0,
      y: 100 - 50 / dynamicHeight,
      w: 12,
      h: 20 / dynamicHeight,
      static: true,
    },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      margin={[0, 0]}
      cols={12}
      rowHeight={dynamicHeight}
      width={width - 2}
      style={{ backgroundColor: "transparent" }}
    >
      <div key="sidemenu" style={{ backgroundColor: "#362" }}>
        <SideMenu />
      </div>
      <div key="mainMenu" style={{ backgroundColor: "rgba(0,0,0,0.9)" }}>
        b
        <Input
          icon={<RiSearchEyeFill style={{ width: 30, height: 30 }} />}
          variant="filled"
          placeholder="Your email"
          radius="md"
          size="xl"
        />
      </div>
      <div key="bottomBar" style={{ backgroundColor: "#f62" }}></div>
    </GridLayout>
  );
}

export default MainScreen;

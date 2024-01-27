import React from "react";
import Text from "@components/Text"
import { ReactSVG } from "src/assets/svg";
import LineChart from "@components/LineChart";

const SkillGraph = () => {

  return (
    <div className="flex flex-1 py-10 justify-center flex-col">
      <Text className="text-2xl text-center font-bold">Skill Graph</Text>
      <div className="flex-row flex">
        <div className="flex flex-1 flex-row items-center justify-center">
          <LineChart />
        </div>
      </div>
    </div>
  )
}

const SkillGraphView = () => {

  return (
    <div></div>
  )
}

const SkillGraphItem = () => {}

export default SkillGraph;
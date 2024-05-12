import StarRating from "../rating";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {

    const {loading, enabledFlags } = useContext(FeatureFlagsContext)
  const componentsToRender = [
    {
      key: "showStarRating",
      component: <StarRating />,
    },
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
  ];

  function checkEnabledFlags(getCurrentKey){
    return enabledFlags[getCurrentKey]
  }

  if(loading) return <h1>Loading data, please wait...</h1>
  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null )
      }
    </div>
  );
}

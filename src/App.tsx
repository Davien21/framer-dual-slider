// Blogpost and origin:
//https://webanimation.blog/blog/react-dual-range-slider-framer-motion/
import React from "react";
import "./styles.css";
import { useState } from "react";
import { Slider } from "./Slider";

export default function App() {
  const minValue = 200;
  const maxValue = 1500;
  const [sliderMin, setSliderMin] = useState(minValue);
  const [sliderMax, setSliderMax] = useState(maxValue);

  return (
    <div className="App">
      <Slider
        defaultMinBudget={minValue}
        defaultMaxBudget={maxValue}
        label={"Slider!"}
        max={4000}
        setSliderMin={setSliderMin}
        setSliderMax={setSliderMax}
      />
      <input type="hidden" name={"minBudget"} defaultValue={sliderMin} />
      <input type="hidden" name={"maxBudget"} defaultValue={sliderMax} />
    </div>
  );
}

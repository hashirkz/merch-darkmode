import { apply, tw } from "twind";
import { animation, css } from "twind/css";
import { useState } from "preact/hooks";

export default function DarkToggle() {
  const slideRight = animation("0.4s ease normal", {
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0)" },
  });

  let [appearance, setAppearance] = useState("light");

  const toggle = () => {
    appearance === "light" ? setAppearance("dark"): setAppearance("light");
    console.log(appearance);
  }

  return (
    <>
      <div class="flex flex-row items-center justify-between">
        <p class="mx-2 font-extralight">light</p>

        <input type="checkbox" id="switch" class="hidden"
          onClick={toggle()}></input>
        <label for="switch" class="cursor-pointer">
          <div class="flex w-10 h-5 items-center justify-start bg-gray-100 rounded-full">
            <span class="flex w-4 h-4 bg-gray-800 rounded-full"></span>
          </div>
        </label>

        <p class="mx-2 font-bold">dark</p>
      </div>
    </> 
  );
}

import { useState } from "react";

function NavBG() {
  let colors = [
    { name: "Bright Red", hex: "#FF0000" },
    { name: "Deep Blue", hex: "#0000FF" },
    { name: "Lime Green", hex: "#00FF00" },
    { name: "Sunshine Yellow", hex: "#FFFF00" },
    { name: "Vivid Purple", hex: "#800080" },
    { name: "Cool Cyan", hex: "#00FFFF" },
    { name: "Jet Black", hex: "#000000" },
    { name: "Pure White", hex: "#FFFFFF" },
    { name: "Soft Pink", hex: "#FFC0CB" },
    { name: "Golden Amber", hex: "#FFBF00" },
  ];
  const [color, setColor] = useState("#FFFFFF");
  // console.log(color);

  // function handleColorChange() {
  //   document.getElementById("root").style.backgroundColor = color;
  // }
  // handleColorChange();

  return (
    <div className="h-screen duration-500" style={{ backgroundColor: color }}>
      <div className="mx-auto flex w-[90%] flex-wrap items-center justify-between gap-4 rounded-3xl border border-black bg-emerald-600 bg-gradient-to-t p-2 text-center">
        {colors.map((color) => (
          <p
            className="rounded-3xl p-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{
              border:
                color.hex == "#FFFFFF"
                  ? " 1px solid #000000"
                  : " 1px solid #ffffff",
              backgroundColor: color.hex,
              color: color.hex == "#000000" ? "white" : "",
            }}
            key={color.hex}
            onClick={() => setColor(color.hex)}
          >
            {color.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NavBG;

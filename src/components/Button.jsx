import React from 'react'
const BUTTON_VARIANTS = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-300",
    secondary: "bg-[#faefe1] text-black hover:bg-white",
    tertiary : "bg-[#8C5A3C] text-yellow-300 hover:bg-[#6d403b]  ",
};
const BUTTON_SIZES = {
    small: "text-sm px-6 py-2",
    medium: "text-base px-6 py-2",
    large: "text-lg px-6 py-2",
};
function Button({
  title,
  onClick=() => {},
  variant = "primary",
  size = "medium",
}) {
  return (
    <button
    onClick={onClick}
    className={`rounded-full font-bold cursor-pointer ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]}`}
  >
    {title}
  </button>
  )
}

export default Button
"use client"

import { useEffect, useState } from "react"

const Toggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    } else {
      document.documentElement.classList.add("light")
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newValue = !isDark
    setIsDark(newValue)
    if (newValue) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      html.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <label className="flex cursor-pointer items-center justify-end mx-auto max-w-6xl my-2">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isDark}
        onChange={toggleTheme}
      />
      <div className=" relative h-5 w-9 rounded-full bg-foreground/40 transition-all peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/40 peer-checked:bg-foreground after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-background after:transition-all peer-checked:after:translate-x-full " ></div>
      <span className="ms-3 select-none text-sm font-medium text-foreground">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  )
}

export default Toggle

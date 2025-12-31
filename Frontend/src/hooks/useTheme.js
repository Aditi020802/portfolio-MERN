import { useEffect } from "react";

export default function useTheme(){
  useEffect(()=>{
    if(localStorage.theme === "dark"){
      document.body.classList.add("dark");
    }
  },[]);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    localStorage.theme =
      document.body.classList.contains("dark") ? "dark" : "light";
  };

  return { toggleTheme };
}

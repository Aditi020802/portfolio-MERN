import { useEffect, useState } from "react";

export default function useTyping(words, speed = 120) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(words[i].slice(0, j));

      if (!deleting) {
        setJ(j + 1);
        if (j === words[i].length + 1) setDeleting(true);
      } else {
        setJ(j - 1);
        if (j === 0) {
          setDeleting(false);
          setI((i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [j, deleting, i, words, speed]);

  return text;
}

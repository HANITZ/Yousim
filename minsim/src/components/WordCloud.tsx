import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";



export default function SimpleWordCloud() {
  const [hasMounted, setHasMounted] = useState(false);


  const words = [
    {
      text: "told",
      value: 64,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
  ];
  console.log(words)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasMounted(true);
    }
  }, []);



  return (
    <>
      <ReactWordcloud
        words={words}
        options={{ fontSizes: [10, 100], }}
      />
    </>
  );
}

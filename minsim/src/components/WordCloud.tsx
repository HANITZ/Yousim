import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";



export default function SimpleWordCloud() {
  const [hasMounted, setHasMounted] = useState(false);
<<<<<<< HEAD
  // const options = {}

=======
>>>>>>> 112a583358a872e34ef397a85958df2b0b2db0bb

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
<<<<<<< HEAD
  console.log(words)
=======

>>>>>>> 112a583358a872e34ef397a85958df2b0b2db0bb
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasMounted(true);
    }
  }, []);

<<<<<<< HEAD

  return (
    
=======
  return (    
>>>>>>> 112a583358a872e34ef397a85958df2b0b2db0bb
    <>
        {/* process.browser &&  */}
        {/* suppressHydrationWarning={true} */}
        {hasMounted && <ReactWordcloud words={words} options={{fontSizes: [10, 100],}}/>}
        {/* <ReactWordcloud words={words} options={{fontSizes: [10, 100],}} /> */}
<<<<<<< HEAD
      <ReactWordcloud
        words={words}
        options={{ fontSizes: [10, 100], }}
      />
=======
>>>>>>> 112a583358a872e34ef397a85958df2b0b2db0bb
    </>
  );
}

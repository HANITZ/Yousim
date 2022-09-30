import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";


interface ITrendTag {
  text: string;
  value: number;
}

interface ITrendKeyword {
  text: string;
  value: number;
}

interface Iprops {
  _id: string;
  tags: ITrendTag[];
  keywords: ITrendKeyword[];
}


export default function SimpleWordCloud(datas: Iprops) {
  const [hasMounted, setHasMounted] = useState(false);
  // const options = {}

  // const words = [
  //   {
  //     text: "told",
  //     value: 64,
  //   },
  //   {
  //     text: "mistake",
  //     value: 11,
  //   },
  //   {
  //     text: "thought",
  //     value: 16,
  //   },
  //   {
  //     text: "bad",
  //     value: 17,
  //   },
  // ];
  // console.log(words)
  const words = datas.tags
  console.log(datas)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasMounted(true);
    }
  }, []);

  return (
      
    <>
        {/* process.browser &&  */}
        {/* suppressHydrationWarning={true} */}
        {hasMounted && <ReactWordcloud words={words} options={{fontSizes: [10, 100],}}/>}
        {/* <ReactWordcloud words={words} options={{fontSizes: [10, 100],}} /> */}

      <ReactWordcloud
        words={words}
        options={{ fontSizes: [10, 100], }}
      />
    </>
  );
}

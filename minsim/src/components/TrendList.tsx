import React from 'react';
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
  props: ITrendTag[] | undefined;
}


export default function SimpleWordCloud(props: Iprops) {

  const [hasMounted, setHasMounted] = useState(false);  
  const words = props.props
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasMounted(true);
    }
  }, []);

  return (
    <>
        {words ? hasMounted && <ReactWordcloud words={words} options={{fontSizes: [20, 50],}}/> : <></>}
    </>
  );
}
import type { CharacterCounterProps } from "../../types";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";



export default function CharacterCounter({
    minWords=25,
    maxWords=500,
    targetReadingTime
}: CharacterCounterProps){
   const [text, setText] = useState("");

   const wordCount = text;
   const readingTime = wordCount / 250;
   
    return (
        <>
  
        </>
    )
}

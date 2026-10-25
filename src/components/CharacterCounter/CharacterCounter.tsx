import type { CharacterCounterProps } from "../../types";


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

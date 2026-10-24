import type { CharacterCounterProps } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

export default function CharacterCounter({

}: CharacterCounterProps){
    return (
        <>
        <TextInput />
        <StatsDisplay stats/>
        </>
    )
}

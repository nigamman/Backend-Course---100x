import { useMemo, useState } from "react";

const words = ["hi", "my", "is", "khan", "ok", "bye"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

    for (let i=0; i<TOTAL_LINES; i++) {
        let sentence = "";
        for(let j=0; j<words.length; j++) {
            sentence += (words[Math.floor(words.length * Math.random())]);
            sentence += " ";
        }
        ALL_WORDS.push(sentence);
    }

export function Ass2UseMemo() {
    const [sentence, setSentence] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");

    // actual filtring code...
    const filteredSentence = useMemo(
        () => sentence.filter(x => x.includes(filter)),
        [sentence, filter]
    );

    return(
        <div>
            <input type = "text" onChange = {(e) => {
                setFilter(e.target.value)}}>
            </input>

            {filteredSentence.map(word => 
                <div>
                    {word}
                </div>)
            }
        </div>
    );
}
export default Ass2UseMemo;
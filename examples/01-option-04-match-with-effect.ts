import { Option } from "std-typed";
import { tryTakeSecond } from "./01-option.js";
import { Match } from "effect";

for (const value of [[1], [1, 2, 3]]) {
  const result = tryTakeSecond(value);
  Match.value(result.toObject()).pipe(
    Match.when(Option._Some, ({ value }) => console.log(`Some(${value})`)),
    Match.when(Option._None, () => console.log("None")),
    Match.exhaustive
  )
}


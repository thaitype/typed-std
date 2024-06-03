import { T } from "../libs";
import { tryTakeSecond } from "./01-option";
import { match } from "ts-pattern";

for (const value of [[1], [1, 2, 3]]) {
  const result = tryTakeSecond(value);
  match(result.toObject())
    .with(T.Some, ({ value }) => console.log(`Some(${value})`))
    .with(T.None, () => console.log("None"))
    .exhaustive();
}
import { Std, Number, Array, Result } from "std-typed";

const parseNumberAndLogStr = (str: string) =>
  Result.func<number, Number.ParseIntError>(() => {
    const num = Number.parseInt(str).unwrapOrThrow();
    console.log(`Parsed number successfully: ${num}`);
    return Result.ok(num);
  });

Std.runExit(async () => {
  const strVec = Array.from([
    "",
    "0",
    "23,00",
    "40",
    "seven",
    "11111111111111111111111111",
  ]);
  for (const item of strVec) {
    const num = parseNumberAndLogStr(item);
    console.log(`Result: ${num.toString()}`);
  }
});

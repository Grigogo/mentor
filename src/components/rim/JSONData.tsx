import type { Result } from "./RimMain.types";

export const JSONData = ({
  character,
}: {
  character: Result;
}) => {
  return (
    <pre>
      {JSON.stringify(character, null, 2)}
    </pre>
  );
};

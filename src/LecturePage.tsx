import { useParams } from "react-router";
import { Lecture } from "./Lecture";

export function LecturePage() {
  const id = useParams().id;

  if (!id) {
    return null;
  }

  return <Lecture id={Number(id)} />;
}

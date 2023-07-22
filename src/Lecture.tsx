import { useEffect } from "react";
import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

export function Lecture({ id }: { id: number }) {
  useEffect(() => {
    return () => {
      db.lectures
        .update(id, { status: "attended" })
        .then((update) => {
          console.log(update);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  }, [id]);

  const viewed = () => {
    db.lectures
      .update(id, { status: "attended" })
      .then((update) => {
        console.log(update);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const lecture = useLiveQuery(async () =>
    db.lectures.where("id").equals(id).first()
  );

  if (!lecture) return <div>Not found</div>;

  return (
    <>
      <h1>{lecture.name}</h1>
      <p>status: {lecture.status}</p>
      <button onClick={viewed}>Mark as attended</button>
    </>
  );
}

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";
import { Link } from "react-router-dom";

export function LectureList() {
  const lectures = useLiveQuery(() => db.lectures.toArray());

  return (
    <ul>
      {lectures?.map((lecture) => {
        const { id, name, status } = lecture;
        return (
          <li key={id}>
            <Link to={`${id}`}>{name}</Link>
            Status: {status}
          </li>
        );
      })}
    </ul>
  );
}

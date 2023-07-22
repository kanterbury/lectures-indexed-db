import { useState } from "react";
import { db } from "./db";

export function AddLectureForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  async function addLecture() {
    try {
      const id = await db.lectures.add({ name, status: "no-attended" });

      setStatus(`Lecture ${name} successfully added. Got id ${id}`);
      setName("");
    } catch (error) {
      setStatus(`Error: ${error}`);
    }
  }

  return (
    <>
      <p>{status}</p>
      Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addLecture}>Add lecuture</button>
    </>
  );
}

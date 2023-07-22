import "./App.css";
import { useState } from "react";
import { AddLectureForm } from "./AddLectureForm";
import { LectureList } from "./LectureList";

function App() {
  return (
    <>
      <h2>Add Lecture</h2>
      <AddLectureForm />

      <h2>Lecture List</h2>
      <LectureList />
    </>
  );
}

export default App;

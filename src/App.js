import React from "react";
import AddPersonForm from "./components/AddPersonForm";
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <AddPersonForm />
      <PeopleList />
    </div>
  );
}

export default App;

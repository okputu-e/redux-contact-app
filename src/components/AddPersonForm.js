import React from "react";
import { useDispatch } from "react-redux";

import { personAdded } from "../features/peopleSlice";

export default function AddPersonForm(props) {
  const [person, setPerson] = React.useState("");

  const dispatch = useDispatch();

  function handleChange(event) {
    setPerson(event.target.value);
  }
  function handleSubmit(event) {
    if (person) {
      dispatch(personAdded(person));
    }
    setPerson("");

    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="person"
        id="person"
        onChange={handleChange}
        value={person}
        placeholder="Add new Contact"
      />
      <button>Add</button>
    </form>
  );
}

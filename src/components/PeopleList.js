import React from "react";
import { useSelector } from "react-redux";
import { selectAllPeopleList } from "../features/peopleSlice";

export default function PeopleList() {
  const listArr = useSelector(selectAllPeopleList);
  const listItems = listArr.map((list, index) => {
    return <li key={index}> {list}</li>;
  });
  return <ul>{listItems}</ul>;
}

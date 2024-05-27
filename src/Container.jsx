import { Component, useEffect, useState } from "react";

export default function Container({ query, l }) {
  return (
    <ul>
      {l.map((e) => {
        return <li>{e}</li>;
      })}
    </ul>
  );
}

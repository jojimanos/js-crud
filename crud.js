import React from "react";

const onSubmit = async (url, title, content) => {
  await fetch(url, {
    body: JSON.stringify({
      title: title,
      content: content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    mode: "cors",
  });
};

const fetchNote = async (url, params, setNotes) => {
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("The data", data[params]), setNotes(data[params]);
    });
};

export { onSubmit, fetchNote };

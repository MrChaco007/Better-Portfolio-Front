import React, { useState } from "react";
import axios from "axios";

function MyForm() {
  /* NEW: Input state handling vvvv */
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  /* End input state handling ^^^^ */

  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/xzbkkgqk",
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(
          true,
          "Thanks for your message! Will be sure to reply shortly."
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <div>
      <h2 className="header">CONTACT</h2>
      <hr className="header-line" />
      <form id="form" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          required
          onChange={handleOnChange}
          value={inputs.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          onChange={handleOnChange}
          value={inputs.email}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          value={inputs.message}
        ></textarea>
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p
            id="form-reply"
            className={!serverState.status.ok ? "errorMsg" : ""}
          >
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
}

export default MyForm;

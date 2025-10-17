import React, { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  // Simple email regex for validation
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordIsValid = password.length >= 6;

  // Show error only if input is touched and invalid
  const emailError = !emailIsValid && emailTouched;
  const passwordError = !passwordIsValid && passwordTouched;

  // Form is valid if both inputs are valid
  const formIsValid = emailIsValid && passwordIsValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    alert(`Submitted with email: ${email} and password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
        />
        {emailError && (
          <div style={{ color: "red", fontSize: "0.9em" }}>
            Please enter a valid email.
          </div>
        )}
      </div>

      <div style={{ marginTop: "1em" }}>
        <label htmlFor="password">Password (min 6 characters):</label><br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
        />
        {passwordError && (
          <div style={{ color: "red", fontSize: "0.9em" }}>
            Password must be at least 6 characters.
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!formIsValid}
        style={{ marginTop: "1em" }}
      >
        Submit
      </button>
    </form>
  );
}

export default FormValidation;

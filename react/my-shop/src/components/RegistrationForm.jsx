import { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";

export default function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!state.name) errors.name = "name can not be empty";
    if (!state.email) errors.email = "email can not be empty";
    if (state.password !== state.confirmPassword) {
      errors.confirmPassword = "pass not equal";
    }
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => handleChange("name", e.target.value)}
        value={state.name}
        placeholder="name..."
        type="text"
      />
      {state.errors.name && <span>{state.errors.name}</span>}
      <br />

      <input
        onChange={(e) => handleChange("email", e.target.value)}
        value={state.email}
        placeholder="email..."
        type="email"
      />
      {state.errors.email && <span>{state.errors.email}</span>}
      <br />
      <input
        onChange={(e) => handleChange("password", e.target.value)}
        value={state.password}
        placeholder="password..."
        type="password"
        name=""
        id=""
      />
      <br />
      <input
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        value={state.confirmPassword}
        placeholder="confirmpassword..."
        type="password"
        name=""
        id=""
      />
      {state.errors.confirmPassword && (
        <span>{state.errors.confirmPassword}</span>
      )}
      <br />
      <button type="submit">Register</button>
      <button type="button">Reset</button>
    </form>
  );
}

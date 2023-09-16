import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [password, setPassword] = useState("");
  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (includeSpecial) charset += "!@#$%^&*()";
    if (includeNumber) charset += "0123456789";
    if (includeLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
    document.getElementById("generated-password").value = password;
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card
          bg="light"
          key="light"
          text="black"
          style={{ width: "40rem" }}
          className="mb-2 "
        >
          <Card.Header>Password Generator</Card.Header>
          <Card.Body>
            This is how we generate password using the react and bootstrap.
            <br />
            <label htmlFor="customRange2" className="form-label">
              Give password range from 8 - 32
            </label>
            <input
              type="range"
              className="form-range"
              min="8"
              max="32"
              id="customRange2"
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
            <div className="include-objects ">
              <input
                type="text"
                className="form-control p-2"
                id="generated-password"
                placeholder="Generated password"
              ></input>
              <label
                className="form-check-label mx-5"
                htmlFor="flexCheckDefault"
              >
                Include Number
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) => {
                  setIncludeNumber(e.target.checked);
                }}
              />
              <br />
              <label
                className="form-check-label mx-5"
                htmlFor="flexCheckDefault"
              >
                Include Uppercase
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) => {
                  setIncludeUpperCase(e.target.checked);
                }}
              />
              <br />
              <label
                className="form-check-label mx-5"
                htmlFor="flexCheckDefault"
              >
                Include Lowercase
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) => {
                  setIncludeLowerCase(e.target.checked);
                }}
              />
              <br />

              <label
                className="form-check-label mx-5"
                htmlFor="flexCheckDefault"
              >
                Include Special Character
              </label>
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) => {
                  setIncludeSpecial(e.target.checked);
                }}
              />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={generatePassword}
              >
                Generate Password
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default App;

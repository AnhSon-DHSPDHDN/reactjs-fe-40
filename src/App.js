import { useState } from "react";
import "./App.css";
import useMagicColor from "./hooks/useMagicColor";

function App() {
  const magicColor = useMagicColor();
  const magicColor2 = useMagicColor();
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    address: "",
  });

  const handleChangeInputForm = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues, "formValues");
    setFormValues({
      name: "",
      age: "",
      address: "",
    });
  };

  return (
    <div className="App">
      <div
        className="magic-color"
        style={{ backgroundColor: magicColor }}
      ></div>
      <div
        className="magic-color"
        style={{ backgroundColor: magicColor2 }}
      ></div>

      <h3>Form Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            value={formValues.name}
            name="name"
            onChange={handleChangeInputForm}
            placeholder="Name..."
          />
        </div>
        <div>
          <label>Age</label>
          <input
            value={formValues.age}
            name="age"
            onChange={handleChangeInputForm}
            placeholder="Age..."
          />
        </div>
        <div>
          <label>Address</label>
          <input
            value={formValues.address}
            name="address"
            onChange={handleChangeInputForm}
            placeholder="Address..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

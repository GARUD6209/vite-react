import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <div className="form-container">
        <h1>form example</h1>
        <form action="">
          {/* text field */}
          <div className="form-field">
            <label>Text: </label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          </div>

          {/* checkbox field */}
          <div className="form-field">
            <label>
              <input
                type="checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
              ></input>
              Checkbox
            </label>
          </div>

          {/* Radio field */}

          <div className="form-field">
            <label>Radio : </label>
            <label>
              <input
                type="radio"
                name="radio"
                value="option1"
                checked={formData.radio === "option1"}
                onChange={handleChange}
              />
              Option1
            </label>
            <label>
              <input
                type="radio"
                name="radio"
                value="option2"
                checked={formData.radio === "option2"}
                onChange={handleChange}
              />
              option2
            </label>

            {/* Dropdown field */}

            <div className="form-field">
              <label>Select: </label>
              <select
                name="select"
                value={formData.select}
                onChange={handleChange}
              >
                <option value="">-- choose an option --</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
            </div>
            <div className="form-data">
              <h3>Form Data</h3>
              <p>
                <strong>Text : </strong>
                {formData.text || "N/a"}
              </p>
              <p>
                <strong>Checkbox : </strong>
                {formData.checkbox ? "Checked" : "Unchecked"}
              </p>
              <p>
                <strong>Radio : </strong>
                {formData.radio || "N/a"}
              </p>
              <p>
                <strong>Select : </strong>
                {formData.select || "N/a"}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;

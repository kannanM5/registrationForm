import React, { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { handle_submit } from "./redux/actionCreater";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [item, setItems] = useState({
    name: "",
    age: "",
    gender: false,
    course: "",
  });
  const [isCorrect, setIsCorrect] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const { name, age, gender, course } = item;
    e.preventDefault();
    if (name && age && gender && course && isCorrect) {
      dispatch(handle_submit(item));
      setItems({ name: "", age: "", gender: "", course: "" });
      setIsCorrect(!isCorrect);
    } else {
      alert("Please Fill all the Required fields");
    }
  };

  return (
    <div className="tab">
      <h1>Registration Form</h1>
      <div className="newApp">
        <form>
          <div className="form-group">
            <div className="name">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
            </div>
            <input
              className="text"
              type=" text"
              placeholder="Enter Your Name"
              required
              value={item.name}
              onChange={(e) => setItems({ ...item, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div className="name">
              <label htmlFor="age">
                <strong>Age</strong>
              </label>
            </div>
            <input
              type=" text"
              placeholder="Enter Your Age"
              className="text"
              required
              value={item.age}
              onChange={(e) => setItems({ ...item, age: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div className="name">
              <label htmlFor="gender">
                <strong>Gender</strong>
              </label>
            </div>
            <div className="rtn">
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  className="radio"
                  value="male"
                  checked={item.gender === "male"}
                  onChange={(e) =>
                    setItems({ ...item, gender: e.target.value })
                  }
                />
                Male
              </label>
            </div>
            <div className="rtn">
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  className="radio"
                  value="female"
                  checked={item.gender === "female"}
                  onChange={(e) =>
                    setItems({ ...item, gender: e.target.value })
                  }
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="name">
              <label htmlFor="name">
                <strong>Course</strong>
              </label>
            </div>
            <select
              name="courses"
              className="form-control"
              value={item.course}
              onChange={(e) => setItems({ ...item, course: e.target.value })}
            >
              <option value="select course" defaultValue={item.course}>
                Select Course
              </option>
              <option value="html">Html</option>
              <option value="css">Css</option>
              <option value="js">JavaScript</option>
              <option value="react js">React JS</option>
              <option value="node js">Node js</option>
            </select>
          </div>
          <div className="form-group">
            <div>
              <input
                type="checkbox"
                id="check"
                checked={isCorrect}
                onChange={(e) => setIsCorrect(!isCorrect)}
              />
              <label className="checkbox" htmlFor="check">
                Above informations are true
              </label>
            </div>
          </div>

          <div>
            <button className="btn btn-success btn-sm" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </form>
      </div>
      <br />
      <div className="pager">
        <div className="left">
          <Link to="/">Previous Page</Link>
        </div>
        <div className="right">
          <Link to="/table">Next Page</Link>
        </div>
      </div>
    </div>
  );
};
export default App;

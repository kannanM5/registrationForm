import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handle_delete } from "../redux/actionCreater";

import "./table.css";

const Table = () => {
  const object = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(handle_delete(index));
  };
  return (
    <div className="container">
      <h1>Students Details</h1>
      <div>
        <table className="table table-striped  table-responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Courses</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {object.data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.gender}</td>
                  <td>{e.course}</td>
                  <td>
                    <button
                      className=" btn btn-danger btn-sm"
                      onClick={() => handleDelete(i)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />

      <div className="pager">
        <div className="left">
          <Link to="/">Home Page</Link>
        </div>
        <div className="right">
          <Link to="/app">Previous Page</Link>
        </div>
      </div>
    </div>
  );
};

export default Table;

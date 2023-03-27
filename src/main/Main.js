import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import photo from "../main/photo.jpg";

function Main() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("./app");
  };
  return (
    <div>
      <div className="container-fluid">
        <nav class="navbar navbar-orange">
          <span class="navbar-brand ">
            <h2>
              Doodle<span className="text-primary">Blue</span> Academy
            </h2>
          </span>
          <button className="btn btn-primary" onClick={handleCreate}>
            Register
          </button>
        </nav>
      </div>
      <section>
        <div>
          <img src={photo} alt="photo" />
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default Main;

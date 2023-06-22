import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import memories from "../../images/memories.png";
import Form from "../Form/Form";
import { Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, setAuth } from "../../actions/auth";
import auth from "../../reducers/auth";
export const Navbar = ({ show, setShow, currentId, setCurrentId }) => {
  const [user, setUser] = useState(null);
  const authData = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setCurrentId(null);
  };
  const handleLogout = () => {
    dispatch(logout("LOGOUT"));
    setUser(null);
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("profile"));
    // console.log(data);
    dispatch(setAuth(data));
  }, []);
  useEffect(() => {
    if (authData) {
      setUser(authData);
    }
  }, [authData]);
  return (
    <nav
      className="appBar d-flex justify-content-around"
      position="static"
      color="inherit"
    >
      <img className="app-image " src={memories} alt="memories" height="60" />
      <div
        className="d-flex align-items-center p-2  ms-auto gap-3"
        variant="primary"
      >
        {/* {console.log("user", user)} */}
        {user && (
          <>
            <IconButton
              className="icon-button"
              color="secondary"
              aria-label="Upload"
              onClick={handleShow}
            >
              <AddAPhotoIcon fontSize="large" />
            </IconButton>
            <Dropdown>
              <Dropdown.Toggle
                className="drop-down-toggler"
                id="dropdown-basic"
              >
                <Avatar sx={{ width: 50, height: 50 }}>A</Avatar>
              </Dropdown.Toggle>

              <Dropdown.Menu className="mt-3 ">
                <h5 className="container text-secondary text-center">
                  {user.user.name}
                </h5>
                <h5 className="container text-dark text-center">
                  {user.user.email}
                </h5>
                <div className="container text-center">
                  {" "}
                  <Button
                    className=""
                    variant="contained"
                    onClick={handleLogout}
                  >
                    Logut
                  </Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}

        {!user && (
          <>
            {" "}
            <Button
              className="mx-4"
              variant="contained"
              onClick={() => {
                navigate("/auth");
              }}
            >
              Login
            </Button>
          </>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form
            show={show}
            setShow={setShow}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        </Modal.Body>
      </Modal>
    </nav>
  );
};

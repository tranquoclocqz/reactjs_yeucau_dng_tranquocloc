import "./LoginPage/login.css";
import { Link } from "react-router-dom";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { useState, useEffect } from "react";

function RegisterPage() {
  const [formData, setFormData] = useState({
    nickName: {
      value: "",
      message: "",
    },
    userName: {
      value: {},
      message: {},
    },
    password: {
      value: "",
      message: "",
    },
    confirmPassword: {
      value: "",
      message: "",
    },
    email: {
      value: "",
      message: "",
    },
  });

  const handleSetMessage = (key, message) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          message: message,
        },
      };
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    onCheckValidate(name, value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onCheckValidate = (key, value) => {
    let message = "";
    if (key === "userName") {
      if (!value) {
        message = "Vui lòng nhập tài khoản";
      }
    }
    if (key === "email") {
      if (!value || validateEmail(value)) {
        message = "Vui lòng nhập email";
      }
    }
    return message;
  };

  const initRule = () => {
    handleSetMessage("nickName", "Vui lòng nhập nickname");
    handleSetMessage("userName", "Vui lòng nhập tài khoản");
    handleSetMessage("password", "Vui lòng nhập mật khẩu");
    handleSetMessage("confirmPassword", "Vui lòng nhập mật khẩu");
    handleSetMessage("email", "Vui lòng nhập email");
  };

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <form autoComplete="off">
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  name="nickName"
                  onChange={handleChange}
                />
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="userName"
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  placeholder="Email ..."
                  name="email"
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="password"
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  label="Xác nhận mật khẩu"
                  placeholder="Xác nhận mật khẩu ..."
                  autoComplete="new-password"
                  name="confirmPassword"
                  onChange={handleChange}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
                    Đăng ký
                  </Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default RegisterPage;

import "./LoginPage/login.css";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { actRegisterAync, actLoginAsync } from "../store/auth/actions";
import { useState, useEffect } from "react";
import { validateEmail } from "../helpers";
import { useDispatch, useSelector } from "react-redux";

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isFormDirty, setIsFormDirty] = useState(true);
  const [formData, setFormData] = useState({
    nickName: {
      value: "",
      message: "",
    },
    userName: {
      value: "",
      message: "",
    },
    password: {
      value: "",
      message: "",
    },
    email: {
      value: "",
      message: "",
    },
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const message = onCheckValidate(name, value);
    setFormData({
      ...formData,
      [name]: {
        value,
        message: message,
      },
    });
    setIsFormDirty(false);
  };

  const onCheckValidate = (key, value) => {
    let message = "";
    if (key === "userName") {
      if (!value) {
        message = "Vui lòng nhập tài khoản";
      }
    }
    if (key === "email") {
      if (!value) {
        message = "Vui lòng nhập email";
      }
      if (!validateEmail(value)) {
        message = "Email không đúng định dạng";
      }
    }
    if (key === "password") {
      if (!value) {
        message = "Vui lòng nhập mật khẩu";
      }
      if (value.length < 6) {
        message = "Mật khẩu phải lớn hơn 6 ký tự";
      }
    }
    return message;
  };

  const checkInValid = () => {
    const newFormData = {};
    for (const key in formData) {
      const element = formData[key];
      const value = element["value"];
      newFormData[key] = {
        value: value,
        message: onCheckValidate(key, value),
      };
    }
    setFormData(newFormData);
    return !(
      formData.userName.message ||
      formData.password.message ||
      formData.email.message
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkInValid()) {
      // do something here
      const payload = {
        email: formData.email.value,
        username: formData.userName.value,
        password: formData.password.value,
        nickname: formData.nickName.value,
      };
      dispatch(actRegisterAync(payload)).then((response) => {
        if (response.ok) {
          handleLogin();
        }
      });
    }
  };

  const handleLogin = () => {
    dispatch(
      actLoginAsync(formData.userName.value, formData.password.value)
    ).then((response) => {
      if (response.ok) {
        history.push("/");
      }
    });
  };

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  name="nickName"
                  onChange={handleChange}
                  error={formData.nickName.message}
                />
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="userName"
                  onChange={handleChange}
                  error={formData.userName.message}
                />
                <Input
                  label="Email"
                  placeholder="Email ..."
                  name="email"
                  onChange={handleChange}
                  error={formData.email.message}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="password"
                  onChange={handleChange}
                  error={formData.password.message}
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

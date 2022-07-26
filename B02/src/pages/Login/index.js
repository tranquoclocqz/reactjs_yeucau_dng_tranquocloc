import "./login.css";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
function Login() {
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form>
                <div className="form-control">
                  <label>Username</label>
                  <Input placeholder="Enter Username ..." />
                </div>
                <div className="form-control">
                  <label>Password</label>
                  <Input type="password" placeholder="Enter Password ..." />
                </div>
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Submit</Button>
                  <a href="register.html">Regiter</a>
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
export default Login;

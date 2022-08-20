import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchMeAsync, actLogout } from "../../store/auth/actions";
import {useHistory} from "react-router-dom"

function HeaderMenus() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentUser } = useSelector((state) => state.Auth);

  const handleLogout = () => {
    dispatch(actLogout())
    history.push("/")
  };

  const RenderLiUser = () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      if (!currentUser) dispatch(actFetchMeAsync(accessToken));
      if (currentUser)
        return (
          <li className="user">
            <Link to="/">{currentUser.user_name}</Link>
            <ul>
              <li>
                <a href="#" onClick={handleLogout}>Đăng xuất</a>
              </li>
            </ul>
          </li>
        );
    }
    return (
      <li className="user">
        <Link to="/login">
          <i className="icons ion-person" /> Tài khoản
        </Link>
      </li>
    );
  };

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Our Team</a>
            <ul>
              <li>
                <a href="/">Our Team 1</a>
              </li>
              <li>
                <a href="/">Our Team 2</a>
              </li>
              <li>
                <a href="/">Our Team 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contact</a>
            <ul>
              <li>
                <a href="/">Contact 1</a>
              </li>
              <li>
                <a href="/">Contact 2</a>
              </li>
              <li>
                <a href="/">Contact 3</a>
                <ul>
                  <li>
                    <a href="/">Contact 11</a>
                  </li>
                  <li>
                    <a href="/">Contact 12</a>
                  </li>
                  <li>
                    <a href="/">Contact 13</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="header-nav__lists">
          <RenderLiUser />
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;

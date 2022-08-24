import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchMeAsync, actLogout } from "../../store/auth/actions";
import { useHistory } from "react-router-dom";
import MenuItem from "../MenuItem";
import React from "react";
function HeaderMenus() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentUser } = useSelector((state) => state.Auth);
  const { menus } = useSelector((state) => state.Menu);


  const handleLogout = () => {
    dispatch(actLogout());
    history.push("/");
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
                <a href="#" onClick={handleLogout}>
                  Đăng xuất
                </a>
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
          <MenuItem menu={menus} />
        </ul>
        <ul className="header-nav__lists">
          <RenderLiUser />
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
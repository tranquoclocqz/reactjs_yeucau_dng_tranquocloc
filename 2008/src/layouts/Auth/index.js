import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actFetchMeAsync } from "../../store/auth/actions";
export default function Auth({ children }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    dispatch(actFetchMeAsync(accessToken)).then((response) => {
      if (response.ok) {
        history.push("/");
      }
    });
  }
  return <div id="auth-page">{children}</div>;
}

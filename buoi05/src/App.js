import { useDispatch, useSelector } from "react-redux";
import { getListPostAsync } from "./redux/actions";
import React from "react";
function App() {
  const dispatch = useDispatch();
  const listPosts = useSelector((state) => state.postReducer.listPosts);
  function handleAddList() {
    dispatch(getListPostAsync());
  }
  const PostItem = React.forwardRef((props, ref) => {
    return (
      <div className="col-3">
        <div className="card">
          <img src={props.url_image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.fullname}</h5>
            <p className="card-text">{props.post_content}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="App">
      <button onClick={handleAddList}>Click me</button>
      {listPosts && (
        <div className="row">
          {listPosts.map((element) => {
            return <PostItem key={element.PID} {...element} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;

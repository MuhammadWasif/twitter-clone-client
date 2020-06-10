import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserByID } from "../../helpers/api-user";

function Media(props) {
  let { userID } = props;

  let [user, setUser] = useState({});
  let [username, setUsername] = useState("");

  useEffect(() => {
    async function getUserData(userID) {
      return await getUserByID(userID);
    }

    getUserData(userID).then((res) => {
      setUser(res.additionalData);
      setUsername(res.username);
    });
  }, [userID]);
  let to = `/${username}`;
  return (
    <div className="user-media">
      <Link to={to}>
        <div className="img-container">
          <div
            className="img"
            style={{
              backgroundImage: `url("${user.profilePic}")`,
            }}
          ></div>
        </div>
      </Link>

      <div className="user-media-body">
        <Link to={to}>
          <h4 className="name"> {user.name} </h4>
        </Link>
        <small className="username">@{username}</small>
        <div className="bio">
          <p> {user.bio} </p>
        </div>
      </div>
    </div>
  );
}

export default Media;
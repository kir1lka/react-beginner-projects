import React, { useEffect, useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [succes, setSucces] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //обращение к backend для получения данных
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        window.alert("ошибка при получении данных");
      })
      .finally(() => setLoading(false));
  }, []);

  const OnChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const OnClickInvite = (id) => {
    if (invites.includes(id))
      setInvites((prev) => prev.filter((_id) => _id != id));
    else setInvites((prev) => [...prev, id]);
  };

  const OnClickSendInvite = () => {
    setSucces(true);
  };

  return (
    <div className="App">
      {succes ? (
        <Success count={invites.length} />
      ) : (
        <Users
          OnClickSendInvite={OnClickSendInvite}
          OnClickInvite={OnClickInvite}
          invites={invites}
          OnChangeSearchValue={OnChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;

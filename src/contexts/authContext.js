import { createContext, useState, useEffect } from "react";

const getUser = () => {
  const json = localStorage.getItem("loggedInUser");
    const storedUser = JSON.parse(json || '""');
    if (storedUser) {
      return storedUser
    } else {
      return { token: "", user: {} }
    }
}

const AuthContext = createContext(getUser());

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState(getUser());

  useEffect(() => {
    const json = localStorage.getItem("loggedInUser");
    const storedUser = JSON.parse(json || '""');
    if (storedUser) {
      setLoggedInUser({ ...storedUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };

import { useState, useEffect } from "react";
import { auth, provider } from "../Config/Config";
import { signInWithPopup } from "firebase/auth";
import Home from "../../Home/Home";

const SignIn = ({ setUser, user }) => {
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      const userData = result.user;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setLoading(false);
    });
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      ) : user ? (
        <Home />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span onClick={handleClick}>Login with Google</span>
          </button>
        </div>
      )}
    </>
  );
};

export default SignIn;

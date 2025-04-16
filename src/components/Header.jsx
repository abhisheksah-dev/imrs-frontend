import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header({ setLoading }) {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleLogInClick = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#48CAE4] to-[#0077B6] h-[90px] font-sans">
      <div>
        <img
          className="w-[100px] bg-inherit"
          src="/images/MetroLogo5.png"
          alt="logo"
        />
      </div>
      <div className="text-lg mr-3 font-sans">
        {isAuthenticated && <span> welcome {user.name} &nbsp; </span>}
        {isAuthenticated ? (
          <button
            type="button"
            className="btn btn-warning hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab "
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Sign Out
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab font-sans "
            onClick={() => {
              handleLogInClick();
              loginWithRedirect();
            }}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;

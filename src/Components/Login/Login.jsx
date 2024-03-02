import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfile(null);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log(decoded.email);
    setIsLoggedIn(true);
  };

  const handleFacebookSuccess = (response) => {
    setProfile(response.data);
    console.log(response);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <button onClick={openLogin} disabled={isLoggedIn}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {showLogin && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white shadow rounded-lg lg:w-1/3 md:w-1/2 w-full p-10">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                onClick={closeLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-2xl font-extrabold leading-6 text-gray-800">
              Login to{" "}
              <span className="text-red-500 text-2xl">
                D<span className="text-black">ubizzle</span>
              </span>
            </p>
            <div className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 flex justify-center items-center w-96 mt-10">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>

            <div>
              {!profile ? (
                <LoginSocialFacebook
                  appId="757792036288625"
                  onResolve={handleFacebookSuccess}
                  onReject={(error) => {
                    console.log(error);
                  }}
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>
              ) : (
                ""
              )}
            </div>

            {isLoggedIn && (
              <div className="flex justify-center">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}

            <div>
              {profile ? (
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width={32}
                    height={32}
                    fill="#1877F2"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>

                  <span>{profile.name}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

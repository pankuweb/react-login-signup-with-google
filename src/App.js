import logo from "./logo.svg";
import "./App.css";
import Reducer from "./views/Reducer";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "939485535093-ho73906fe6ojrrc50p4offti2dunib1d.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:4000/api/v1/users/googlelogin",
      data: { tokenId: response.tokenId, position: "user_admin" },
    }).then((response) => {
      console.log("google response", response);
    });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId="939485535093-ho73906fe6ojrrc50p4offti2dunib1d.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;

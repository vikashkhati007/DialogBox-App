import React, { useState, useEffect } from "react";
import Button from "./Button";
import { CiFaceFrown, CiFaceSmile } from "react-icons/ci";
import "../styles.css";

export default function DialogBox() {
  const [cancel, setcancel] = useState(true);
  const [icon, seticon] = useState("");
  const [subscribe, setsubscribe] = useState({
    title: "Hello,",
    para: "Would You Like to Subscribe?",
    state: false,
    justifyContent: "space-between",
    boxShadow: "2rem 20rem 100rem 100rem rgba(0,0,0,0.5)"
  });

  const dialogcontainerStyle = {
    margin: "0px auto",
    width: "20rem",
    height: "13rem",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: `${subscribe.boxShadow}`,
    border: "2px solid rgba(255,255,255,1)"
  };

  const titleStyle = {
    margin: 20
  };

  const dialogupperitems = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const iconStyleRed = {
    marginRight: "20px",
    fontSize: "4.5rem",
    color: "rgba(255,0,0,0.5)"
  };

  const iconStyleGreen = {
    marginRight: "20px",
    fontSize: "4.5rem",
    color: "rgba(0,255,0,0.5)"
  };

  const dialogloweritems = {
    margin: "3rem 0px"
  };

  const buttoncontainer = {
    display: "flex",
    justifyContent: `${subscribe.justifyContent}`,
    alignItems: "center",
    margin: 10
  };

  const parastyle = {
    position: "relative",
    bottom: "2rem",
    left: "1rem",
    fontWeight: 600
  };

  function buttonhandler() {
    setsubscribe((prevdata) => ({
      ...prevdata,
      state: true,
      title: "Thank You",
      para: "Thanks for Subscribed •ᴗ•",
      justifyContent: "flex-end",
      boxShadow: "2rem 20rem 100rem 100rem rgba(0,255,0,0.5)"
    }));
    seticon("subscribed");
  }
  function UnSubscribebuttonhandler() {
    setsubscribe((prevdata) => ({
      ...prevdata,
      state: false,
      title: "Sorry",
      para: "Sorry To see you go •-•",
      justifyContent: "space-between",
      boxShadow: "2rem 20rem 100rem 100rem rgba(255,0,0,0.5)"
    }));
    seticon("Unsubscribed");
  }

  function canclebuttonhandler() {
    setcancel(false);
  }

  const [bounce, setbounce] = useState();

  useEffect(() => {
    setTimeout(() => {
      setbounce("");
    }, 1000);
    return () => setbounce("bounce");
  }, [subscribe.state]);

  return (
    <div>
      {cancel ? (
        <div
          className={`dialogcontainer ${bounce}`}
          style={dialogcontainerStyle}
        >
          <div className="dialogItems">
            <div style={dialogupperitems}>
              <h1 className="title" style={titleStyle}>
                {subscribe.title}
              </h1>
              <div className="iconcontainer">
                {icon === "Unsubscribed" ? (
                  <CiFaceFrown style={iconStyleRed} />
                ) : null}
                {icon === "subscribed" ? (
                  <CiFaceSmile style={iconStyleGreen} />
                ) : null}
              </div>
            </div>
            <div style={dialogloweritems}>
              <p className="para" style={parastyle}>
                {subscribe.para}
              </p>
              <div style={buttoncontainer}>
                {!subscribe.state ? (
                  <Button
                    title="Cancel"
                    buttonhandler={canclebuttonhandler}
                    className="cancel"
                    bgcolor="linear-gradient(45deg, #fff, #fff"
                    color="black"
                  />
                ) : null}
                {subscribe.state ? (
                  <Button
                    title="Unsubscribe"
                    buttonhandler={UnSubscribebuttonhandler}
                    style={subscribe.justifyContent}
                    bgcolor="linear-gradient(45deg, #FF0032, #FF8E53)"
                    color="white"
                  />
                ) : (
                  <Button
                    title="Subscribe"
                    buttonhandler={buttonhandler}
                    bgcolor="linear-gradient(45deg, #FF0032, #FF8E53)"
                    color="white"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1> Welcome To Home Page </h1>
      )}
    </div>
  );
}

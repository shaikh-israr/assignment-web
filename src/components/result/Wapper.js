import React from "react";
import TabView from "./../tabview/TabView";
import Navbar from "./../navbar/Navbar";
import Search from "./../search/SearchPage";
function Wapper() {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" + "https://wallpaperaccess.com/full/346725.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: 0,
          height: 700,
          position: "relative",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "90px",
          minWidth: 100,
          width: "100%",
        }}
      >
        <div
          style={{
            marginLeft: "40px",
            marginRight: "40px",
          }}
        >
          <Navbar />
          <Search />
          <TabView />
        </div>
      </div>
    </div>
  );
}

export default Wapper;

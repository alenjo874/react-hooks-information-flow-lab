import React, { useState } from "react";

function Header({ onDarkModeClick, isDarkMode }) {
    
  function handleDarkModeClick() {
    onDarkModeClick((dark) => !dark);
  }

  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;

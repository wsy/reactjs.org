import React from "react";
import languages from "../../../content/languages.yml";

const HeaderLanguage = () => {
  const baseHostname = "reactjs.org";
  const hostname = window.location.hostname;
  const currentCountryCode =
    hostname === baseHostname
      ? "en"
      : hostname.substring(0, hostname.indexOf("."));

  const languageChoose = () => {
    const code = document.getElementById("language_select").value;
    if (code) {
      const prefix = code === "en" ? "" : `${code}.`;
      window.location.hostname = prefix + baseHostname;
    } else {
      window.location.assign("/languages");
    }
  };

  return (
    <select
      id="language_select"
      onChange={languageChoose}
      style={{
        backgroundColor: "hsl(216, 22%, 48%)",
        border: "none",
        fontSize: "14px",
        height: "24px",
        width: "100px",
        marginLeft: "5px",
        marginTop: "5px",
        marginBottom: "5px"
      }}
    >
      {languages.map(language => (
        <option
          value={language.code}
          selected={currentCountryCode === language.code}
        >
          {language.translated_name}
        </option>
      ))}
    </select>
  );
};

export default HeaderLanguage;

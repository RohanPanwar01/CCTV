import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/691357bc15a4d61959d4a4a1/1j9potf8l";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null; // nothing to render
};

export default TawkTo;

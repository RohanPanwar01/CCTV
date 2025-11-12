import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/691454dade65351959f239c6/1j9rmmttk";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null; // nothing to render
};

export default TawkTo;

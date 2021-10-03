import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="copyright">
        {/* This will return 2022, 2023 in the following years, even if you developed in 2021 */}
        {/* this is a case where hardcoding 2021 by typing it, is the correct approach -1 */}
        &copy; {new Date().getFullYear()} {"\u2022"} Dakouri M. Kobri
      </p>
    </footer>
  );
}

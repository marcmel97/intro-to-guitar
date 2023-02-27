import React from "react";
import Gh from "./github";
import Tw from "./twitter";
import Li from "./linkedin";
import Ins from "./instagram";

export default function Footer({ twitter, linkedin, github, instagram }) {
  return (
    <footer className="footer">
      <ul className="socials">
        {twitter ? (
          <li className="social">
            <a href={`https://twitter.com/${twitter}`}>
              <Tw />
            </a>
          </li>
        ) : null}
        {github ? (
          <li className="social">
            <a href={`https://github.com/${github}`}>
              <Gh />
            </a>
          </li>
        ) : null}
        {linkedin ? (
          <li className="social">
            <a href={`https://linkedin.com/in/${linkedin}`}>
              <Li />
            </a>
          </li>
        ) : null}
        {linkedin ? (
          <li className="social">
            <a href={`https://instagram.com/${instagram}/`}>
              <Ins />
            </a>
          </li>
        ) : null}
        <li className="social">
          <div className="terms">
            <p>
              Site Designed by{" "}
              <a href="music-marcmel.mystrikingly.com">Marcmel</a>
            </p>
          </div>
        </li>
      </ul>
    </footer>
  );
}

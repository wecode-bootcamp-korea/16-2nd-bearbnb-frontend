import React, { useState, useEffect } from 'react';
import './Footer.scss';

export const Footer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/Footer.json')
      .then(res => res.json())
      .then(res => {
        setData(res.FOOTER_DATA);
      });
  }, []);

  return (
    <footer className="Footer">
      <div>
        {Object.entries(data)
          .map(data => data)
          .map(data => (
            <ul className="listContainer">
              {data[1].map(data => {
                return <li className="listItem">{data}</li>;
              })}
            </ul>
          ))}
      </div>
      <div className="footerContainer">
        <p>© 2021 Bearbnb, Inc. All rights reserved</p>
        <div>
          <img alt="facebook" src="/images/Footer/facebook.png" />
          <img alt="twitter" src="/images/Footer/twitter.png" />
          <img alt="instagram" src="/images/Footer/instagram.png" />
        </div>
      </div>
    </footer>
  );
};

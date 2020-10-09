import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>KwikDef</span>
          </a>
          <span>人工智慧惡意程式監測系統</span>
        </h1>
      </div>
    </header>
  );
}

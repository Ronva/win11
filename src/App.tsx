import React from 'react';

import TrayClock from 'components/TrayClock';
import Windows from 'assets/windows.svg?component';
import Edge from 'assets/edge.svg?component';
import Excel from 'assets/excel.svg?component';
import Chevron from 'assets/chevron.svg?component';
import Recycle from 'assets/recycling-bin.svg?component';

const App = () => {
  return (
    <div className="app">
      <picture>
        <source srcSet="/wallpaper-dark.jpg" media="(prefers-color-scheme: dark)" />
        <img src="/wallpaper.jpg" alt="" id="wallpaper" />
      </picture>
      <main id="desktop" aria-label="Desktop">
        <div className="desktop-icon">
          <Edge />
          <span>Microsoft Edge</span>
        </div>
        <div className="desktop-icon">
          <Recycle />
          <span>Recycle Bin</span>
        </div>
      </main>
      <nav id="start-menu" aria-label="Start menu">
        <section className="start-menu-content">
          <section>
            <header className="">
              <h2 id="pinned">Pinned</h2>
            </header>
            <ul aria-labelledby="pinned" role="list" className="pinned-applications">
              <li>
                <Edge />
                <span>Edge</span>
              </li>
              <li></li>
              <li>
                <Excel />
                <span>Excel</span>
              </li>
            </ul>
          </section>
          <section>
            <header className="">
              <h2 id="recommended">Recommended</h2>
            </header>
            <ul aria-labelledby="recommended" role="list" className="recommended-items">
              <li></li>
            </ul>
          </section>
        </section>
        <footer></footer>
      </nav>
      <nav id="task-bar" aria-label="Taskbar" className="frosted">
        <ul role="list" id="dock" aria-label="dock">
          <li className="dock-item" aria-selected>
            <Windows />
          </li>
          <li className="dock-item">
            <Edge />
          </li>
          <li className="dock-item">
            <Excel />
          </li>
        </ul>
        <div id="tray">
          <Chevron />
          <TrayClock />
        </div>
      </nav>
    </div>
  );
};

export default App;

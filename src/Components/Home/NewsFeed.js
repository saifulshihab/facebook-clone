import React from 'react';

function Newsfeed() {
  return (
    <>
      <div id="newsfeed">
        <div className="mydayList">
          <ul>
            <li>
              <div className="myday">
                <img src="#" />
                <p>Saiful Shihab</p>
              </div>
            </li>
            <li>
              <div className="myday">
                <img src="#" />
                <p>Saiful Shihab</p>
              </div>
            </li>
            <li>
              <div className="myday">
                <img src="#" />
                <p>Saiful Shihab</p>
              </div>
            </li>
            <li>
              <div className="myday">
                <div className="img">
                  <img src="#" />
                </div>
                <div className="p">
                  <p>Saiful Shihab</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="post_form"></div>
        <div className="posts"></div>
      </div>
    </>
  );
}
export default Newsfeed;

import React from "react";
//import ResizePanel from "react-resize-panel";
import ResizePanel from "../../src/ResizePanel";
import style from "./App.css";
import classNames from "classnames/bind";

let cx = classNames.bind(style);

export default () => {
  const clickHandler = (event) => {
    console.log(event, "onCLick");
  };
  return (
    <div className={cx("container")}>
      <div className={cx("body")}>
        <div className={cx("content", "panel")}>content</div>
      </div>

      <ResizePanel
        direction="n"
        style={{ height: "200px" }}
        onClick={clickHandler}
      >
        <div className={cx("footer", "panel")}>
          <div className={cx("footerArea")}>
            <div className={cx("footerAreaContent")}>
              <span>footer area, min height: 100px</span>
            </div>
          </div>
        </div>
      </ResizePanel>
    </div>
  );
};

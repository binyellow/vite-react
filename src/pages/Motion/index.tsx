import React, { useState } from "react";
import Motion from "rc-motion";
import { Button } from "antd";
import "./index.less";

const index = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Motion
        visible={visible}
        motionName="animation"
        leavedClassName="animation-hidden"
      >
        {({ style, className }, ref) => {
          console.log(className);
          return (
            <div ref={ref} style={{ ...style, height: "100%" }} className={className}>
              123
            </div>
          );
        }}
      </Motion>
      <Button onClick={() => setVisible(!visible)}>Click</Button>
    </div>
  );
};

export default index;

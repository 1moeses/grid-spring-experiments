import React, { useMemo } from "react";
import { animated } from "react-spring";
import useMeasure from "react-use-measure";

import { NUM_COLS } from "./constants";
import { getItemDimensions } from "./utils";
import "./styles.css";

import useAnimatedItems from "./useAnimatedItems";
import CloseIcon from "./CloseIcon";

const DraggableList = ({ items, removeItem }) => {
  const [gridRef, gridDimensions] = useMeasure();
  // prettier-ignore
  const itemDimensions = useMemo(() => (
    getItemDimensions(gridDimensions)
  ), [gridDimensions]);

  const { animatedItems, bindGesture } = useAnimatedItems({
    items,
    itemDimensions
  });

  const handleStopPropogation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="container">
      <div
        ref={gridRef}
        className="grid"
        style={{
          width: "100%",
          height: Math.ceil(items.length / NUM_COLS) * itemDimensions.height
        }}
      >
        {animatedItems.map(({ id, controller, gradient }) => (
          <animated.div
            key={id}
            className="itemWrapper"
            style={controller.springs}
            {...bindGesture(id)}
          >
            <div className="item" style={{ background: gradient }}>
              <button
                className="removeButton"
                onMouseDown={handleStopPropogation}
                onTouchStart={handleStopPropogation}
                onClick={() => removeItem(id)}
              >
                <CloseIcon />
              </button>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default DraggableList;

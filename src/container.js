import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import { useState, useCallback, useId } from "react";
import Box from "./box";

const Container = (props) => {
  const [containerBoxes, setContainerBoxes] = useState([]);
  const moveBox = useCallback((id, left, top) => {
    setContainerBoxes((prevList) => {
      const selectedItem = prevList.find((obj) => obj.id === id);
      const newList = prevList.filter((item) => item.id !== id);
      return [{ ...selectedItem, left, top }, ...newList];
    });
  }, []);
  const [{ hovered }, drop] = useDrop(
    () => ({
      accept: "BOX",
      collect: (monitor) => {
        return {
          hovered: monitor.isOver(),
        };
      },
      drop(item, monitor) {
        if (containerBoxes.some((ele) => ele.id === item.id)) {
          const delta = monitor.getDifferenceFromInitialOffset();
          const left = Math.round(item.left + delta.x);
          const top = Math.round(item.top + delta.y);
          moveBox(item.id, left, top);
        } else {
          const dropCoor = monitor.getClientOffset(); // from main document axis
          const containerCoor = document // from main document axis
            .getElementsByClassName("container")[0]
            .getBoundingClientRect();
          const left = Math.round(dropCoor.x - containerCoor.x - 25);
          const top = Math.round(dropCoor.y - containerCoor.y - 25);
          setContainerBoxes((prevList) => [
            ...prevList,
            { ...item, left, top },
          ]);
          console.log(monitor.getInitialClientOffset());
          props.updateArray(item.id);
        }
      },
    }),
    [containerBoxes, setContainerBoxes]
  );
  return (
    <div
      ref={drop}
      style={{ borderColor: hovered ? "red" : "green" }}
      key={"container"}
      className="container"
    >
      {hovered && <span key={"circle"} className="circle"></span>}
      {containerBoxes.map((item) => (
        <Box key={uuidv4()} position="absolute" {...item}></Box>
      ))}
    </div>
  );
};
export default Container;

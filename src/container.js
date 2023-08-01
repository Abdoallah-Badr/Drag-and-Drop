import "./styles/container.css";
import { useDrop } from "react-dnd";
import { v4 as uuid } from "uuid";
import Box from "./box";
import { useSelector, useDispatch } from "react-redux";
import { moveBox, addBoxToContainer } from "./store/containerBoxesSlice";
import { removeBoxFromRow } from "./store/boxesRowSlice";
const Container = () => {
  const containerBoxes = useSelector((state) => state.container);
  const dispatch = useDispatch();

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
          dispatch(moveBox({ ...item, left, top }));
        } else {
          const dropCoor = monitor.getClientOffset(); // from main document axis
          const containerCoor = document // from main document axis
            .getElementsByClassName("container")[0]
            .getBoundingClientRect();
          const left = Math.round(dropCoor.x - containerCoor.x - 25);
          const top = Math.round(dropCoor.y - containerCoor.y - 25);
          dispatch(addBoxToContainer({ ...item, left, top }));
          dispatch(removeBoxFromRow(item.id));
        }
      },
    }),
    [containerBoxes]
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
        <Box key={uuid()} dropped={true} {...item}></Box>
      ))}
    </div>
  );
};
export default Container;

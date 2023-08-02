import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeBoxContainer } from "./store/containerBoxesSlice";
import { addBoxToRow } from "./store/boxesRowSlice";

const Box = (props) => {
  const dispatch = useDispatch();
  const { top, left, id, dropped } = { ...props };
  const [{}, drag] = useDrag(
    () => ({
      type: "BOX",
      item: { id, left, top },
      collect: (monitor) => ({
        isDropped: monitor.didDrop(),
      }),
    }),
    [id, left, top]
  );
  return (
    <div
      ref={drag}
      id={id}
      className="box"
      style={{ left, top, position: dropped ? "absolute" : "relative" }}
    >
      {dropped && (
        <>
          <p>{`x: ${left}`}</p>
          <p>{`y: ${top}`}</p>
          <button
            onClick={() => {
              dispatch(removeBoxContainer(id));
              dispatch(addBoxToRow(id));
            }}
            className="deleteBtn"
          >
            <p>+</p>
          </button>
        </>
      )}
    </div>
  );
};

export default Box;

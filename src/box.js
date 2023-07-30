import { useDrag } from "react-dnd";

const Box = ({ left, top, id, position, children }) => {
  const [{ isDragging, dropped, pos }, drag] = useDrag(
    () => ({
      type: "BOX",
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        dropped: monitor.didDrop(),
        pos: monitor.getDifferenceFromInitialOffset(),
      }),
    }),
    [id, left, top]
  );
  console.log(pos);
  return (
    <div
      ref={drag}
      id={id}
      className="box"
      style={{ left, top, position: position }}
    >
      {position && ( // because we pass a value for it when only drop on the container when we need this texts shown
        <>
          <p>{`x: ${left}`}</p>
          <p>{`y: ${top}`}</p>
        </>
      )}
    </div>
  );
};

export default Box;

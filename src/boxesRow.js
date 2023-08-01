import { useSelector } from "react-redux/es/hooks/useSelector";
import Box from "./box";

const BoxesRow = () => {
  const arrayBoxes = useSelector((state) => state.row);
  return (
    arrayBoxes.length > 0 && (
      <div className="boxes-row">
        {arrayBoxes.map((item) => (
          <Box key={item.id} id={item.id} />
        ))}
      </div>
    )
  );
};
export default BoxesRow;

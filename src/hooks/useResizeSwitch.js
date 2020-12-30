import { useDispatch, useSelector } from "react-redux";
import { selectCurrentBoard, setBoard } from "../redux/currentBoardSlice";

export const useResizeSwitch = (id) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);

  const resizeClickHandler = () => {
    if (currentBoard === id) {
      dispatch(setBoard(0));
      return;
    }

    dispatch(setBoard(id));
  };

  return resizeClickHandler;
};

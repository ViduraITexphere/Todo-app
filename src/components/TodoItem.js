import { Checkbox } from "@material-ui/core";
import React from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TodoItem({ todo, done, id }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todo_item">
      <Checkbox
        checked={done}
        onChange={handleClick}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      {/* <Checkbox
        checked={done}
        color="primary"
        onChange={handleClick}
        inputProps={{ "aria-label": "secondary checkbox" }}
      /> */}
      <p className={done && "todoItem_done"}>{todo}</p>
    </div>
  );
}

export default TodoItem;

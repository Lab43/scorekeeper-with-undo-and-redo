import { useSelector, useDispatch } from 'react-redux';

import { redo } from '../store/history';



const RedoButton = () => {

  const dispatch = useDispatch();

  // disable the button when there are no actions to redo
  const disabled = useSelector((state) => (
    state.history.cursor + 1 >= state.history.redos.length
  ));

  const handleClick = () => {
    dispatch(redo());
  }

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
    >
      Redo ⏩
    </button>
  );
}

export default RedoButton;

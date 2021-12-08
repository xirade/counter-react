const Counter = ({
  value,
  name,
  onDelete,
  onDecrement,
  onIncrement,
  id,
}) => {
  const formatCount = () => {
    return !value ? "empty" : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge p-2 m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };
  return (
    <div>
      <span>{name}</span>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        className="btn btn-primary btn-lg m-2"
        onClick={() => onIncrement(id, value)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => onDecrement(id, value)}
      >
        -
      </button>
      <button
        onClick={() => onDelete(id)}
        className="btn btn-danger btn-lg m-2"
      >
        Delete
      </button>
    </div>
  );
};
export default Counter;

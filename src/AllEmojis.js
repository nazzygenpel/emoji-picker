import { useEmoji } from "./context/EmojisContext";

function AllEmojis() {
  const { emojis, getAllEmojis, handleCancel } = useEmoji();
  return (
    <span>
      {emojis.length < 1 ? (
        <button onClick={getAllEmojis} className="btn">
          Get All Emojis
        </button>
      ) : (
        <button onClick={handleCancel} className="btn-cancel">
          cancel
        </button>
      )}
    </span>
  );
}

export default AllEmojis;

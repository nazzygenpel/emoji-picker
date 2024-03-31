import EmojiItems from "./EmojiItems";
import { useEmoji } from "./context/EmojisContext";

function Emoji() {
  const { emojis } = useEmoji();
  return (
    <ul className="emoji">
      {emojis.map((emoji) => (
        <EmojiItems key={emoji.htmlCode} emoji={emoji} />
      ))}
    </ul>
  );
}

export default Emoji;

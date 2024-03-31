function EmojiItems({ emoji }) {
  const { htmlCode } = emoji;
  return (
    <li className="list" dangerouslySetInnerHTML={{ __html: htmlCode[0] }} />
  );
}

export default EmojiItems;

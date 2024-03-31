import AllEmojis from "./AllEmojis";
import Emoji from "./Emoji";
import Form from "./Form";
import { useEmoji } from "./context/EmojisContext";

function App() {
  // console.log(emojis);

  const { isLoading } = useEmoji();

  if (isLoading) return <p className="loader"> Loading...</p>;
  return (
    <div className="container">
      <AllEmojis />
      <Form />
      <Emoji />
    </div>
  );
}

export default App;

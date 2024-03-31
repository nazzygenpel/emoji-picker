import { createContext, useContext, useState } from "react";
import { getEmojis } from "../api/fetchEmojis";

const EmojiContext = createContext();

function EmojiProvider({ children }) {
  const [query, setQuery] = useState("");
  const [emojis, setEmojis] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(searchInput) {
    if (!searchInput) return;

    try {
      setIsLoading(true);
      const searchData = await getEmojis();
      const searchedData = searchData.filter((data) =>
        data.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      setEmojis(searchedData);
    } catch (error) {
      throw new Error("Invalid search input");
    } finally {
      setIsLoading(false);
    }
  }

  async function getAllEmojis() {
    setIsLoading(true);

    try {
      const allEmojis = await getEmojis();
      setEmojis(allEmojis);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCancel() {
    setEmojis([]);
  }
  return (
    <EmojiContext.Provider
      value={{
        query,
        setQuery,
        emojis,
        isLoading,
        handleSearch,
        getAllEmojis,
        handleCancel,
      }}
    >
      {children}
    </EmojiContext.Provider>
  );
}

function useEmoji() {
  const context = useContext(EmojiContext);

  if (context === undefined)
    throw new Error("Emojis context was used outside the emoji provider");

  return context;
}

export { EmojiProvider, useEmoji };

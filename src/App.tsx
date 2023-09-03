import { useState } from "react";
import { itemTypes } from "./itemTypes";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Item } from "./types";
import { Card } from "./card/Card";
import { Cards } from "./card/Cards";

const defaultCardContent: Item = {
  title: "",
  description: "",
  price: "",
  weight: "",
  type: itemTypes[0],
};

function App() {
  const [cards, setCards] = useState<Item[]>([defaultCardContent]);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const columns = 4;
  const rows = 2;

  return (
    <div className="min-h-screen flex flex-col gap-5">
      <div className="flex flex-wrap items-center grow-0 shrink-0 justify-between p-4">
        <div className="flex gap-2 flex-wrap">
          {cards.map((_card, idx) => (
            <button
              className={`rounded-full border border-white h-16 w-16 text-lg border-opacity-25 ${
                idx === activeIdx
                  ? "bg-white text-gray-900"
                  : "hover:bg-gray-600"
              }`}
              key={idx}
              onClick={() => setActiveIdx(idx)}
            >
              {idx + 1}
            </button>
          ))}
          {cards.length < columns * rows && (
            <button
              className={`rounded-full border border-white h-16 w-16 text-lg hover:bg-gray-600 border-opacity-25`}
              onClick={() => {
                setCards((prev) => [...prev, defaultCardContent]);
                setActiveIdx(cards.length);
              }}
            >
              +
            </button>
          )}
        </div>
        <Cards cards={cards} columns={columns} rows={rows} />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 grow">
        <div className="flex gap-4 flex-col p-4">
          <FormControl>
            <FormLabel>Item Name</FormLabel>
            <Input
              value={cards[activeIdx].title}
              onChange={(e) =>
                setCards((prev) =>
                  prev.map((card, idx) =>
                    idx === activeIdx
                      ? { ...card, title: e.target.value }
                      : card
                  )
                )
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={cards[activeIdx].description}
              onChange={(e) =>
                setCards((prev) =>
                  prev.map((card, idx) =>
                    idx === activeIdx
                      ? { ...card, description: e.target.value }
                      : card
                  )
                )
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              value={cards[activeIdx].price}
              onChange={(e) =>
                setCards((prev) =>
                  prev.map((card, idx) =>
                    idx === activeIdx
                      ? { ...card, price: e.target.value }
                      : card
                  )
                )
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Weight</FormLabel>
            <Input
              value={cards[activeIdx].weight}
              onChange={(e) =>
                setCards((prev) =>
                  prev.map((card, idx) =>
                    idx === activeIdx
                      ? { ...card, weight: e.target.value }
                      : card
                  )
                )
              }
            />
          </FormControl>
          <div>
            <FormLabel>Type</FormLabel>
            {itemTypes.map((item) => (
              <button
                className={`border-4 h-16 w-16 rounded-full ${
                  cards[activeIdx].type.name === item.name
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                title={item.name}
                onClick={() =>
                  setCards((prev) =>
                    prev.map((card, idx) =>
                      idx === activeIdx ? { ...card, type: item } : card
                    )
                  )
                }
                key={item.name}
              >
                <img src={item.url} />
              </button>
            ))}
          </div>
        </div>
        <Card item={cards[activeIdx]} />
      </div>
    </div>
  );
}

export default App;

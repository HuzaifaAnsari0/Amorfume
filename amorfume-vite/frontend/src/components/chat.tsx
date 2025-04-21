import { useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  fragranceNotes?: {
    olfactiveFamily: string;
    top: string;
    heart: string;
    base: string;
  };
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState<string[]>([]);
  const [chatStep, setChatStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;

  // Define questions and options
  const questions = [
    "Who will be using this perfume?", // category: "kids", "unisex", etc.
    "What kind of feeling would you like the perfume to evoke?", // feelings
    "Which type of fragrance notes do you enjoy?", // fragranceNotes
    "When do you plan to wear the perfume?", // occasions
    "Which bottle style and size do you prefer?" // bottleOptions
  ];
  
  const options = [
    ["A child", "A teen", "An adult", "Anyone! I want something unisex"],
    ["Fresh", "Uplifting", "Relaxing", "Joyful"],
    ["Fruity", "Floral", "Citrus", "Spicy", "Woody", "Powdery", "Gourmand"],
    ["Daily wear", "Parties", "School/Work", "Family outings", "Gifting"],
    ["Round Tall – 30ml", "Cylindrical – 30ml", "Flat – 50ml", "Rectangle – 50ml", "Flat – 100ml"]
  ];

  const toggleChat = () => {
    setIsOpen((prev) => {
      if (prev) {
        // Chat is open, so when closing, clear recommendations and reset state if desired.
        setRecommendations(null);
        setAnswers([]);
        setChatStep(0);
        setConversation([]);
      }
      return !prev;
    });
  };

  const fetchRecommendations = async (allAnswers: string[]): Promise<Product[]> => {
    try {
      const response = await fetch(`${url}/recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          answers: allAnswers
        })
      });
      if (!response.ok) {
        console.error("API error:", response.statusText);
        return [];
      }
      const data = await response.json();
      return data as Product[];
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      return [];
    }
  };

  const handleOptionSelect = async (choice: string) => {
    setConversation((prev) => [...prev, `You: ${choice}`]);
    const newAnswers = [...answers, choice];
    setAnswers(newAnswers);

    if (chatStep < questions.length - 1) {
      const nextStep = chatStep + 1;
      setChatStep(nextStep);
      setConversation((prev) => [...prev, `Bot: ${questions[nextStep]}`]);
    } else {
      setLoading(true);
      const results = await fetchRecommendations(newAnswers);
      console.log("Recommendations:", results);
      setLoading(false);
      const names = results.length
        ? results.map((p) => p.name).join(", ")
        : "Sorry, we couldn’t find a perfect match. Please try adjusting your answers.";
      setRecommendations(results);
      setConversation((prev) => [
        ...prev,
        `Bot: Based on your answers, we recommend: ${names}`
      ]);
    }
  };

  return (
    <>
      {/* Chat Icon */}
      {!isOpen && (
        <div
          className="fixed bottom-4 right-4 cursor-pointer"
          onClick={toggleChat}
          onMouseEnter={() => {
            if (!isOpen && conversation.length === 0) {
              setConversation([`Bot: ${questions[0]}`]);
            }
          }}
        >
          <div className="bg-indigo-600 p-4 rounded-full shadow-lg">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.957 9.957 0 01-4.255-.971L3 20l1.271-3.822A8.966 8.966 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-[90%] sm:w-[32rem] min-h-[400px] sm:min-h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-indigo-600 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
            <span>Chat</span>
            <button onClick={toggleChat}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto border-b border-gray-200">
            {conversation.map((msg, idx) => (
              <div key={idx} className="mb-2">
                <div
                  className={`px-3 py-2 rounded inline-block ${
                    msg.startsWith("Bot:")
                      ? "bg-gray-100 text-left"
                      : "bg-indigo-100 text-right ml-auto"
                  }`}
                >
                  {msg}
                </div>
              </div>
            ))}
          </div>

          {/* Multiple-choice options */}
          {!recommendations && (
            <div className="p-4">
              {options[chatStep].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionSelect(opt)}
                  className="m-1 px-3 py-2 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
                  disabled={loading}
                >
                  {opt}
                </button>
              ))}
              {loading && <p className="mt-2 text-sm text-gray-500">Thinking...</p>}
            </div>
          )}

          {/* Start Over Button */}
          {recommendations && (
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              onClick={() => {
                setChatStep(0);
                setAnswers([]);
                setRecommendations(null);
                setConversation([`Bot: ${questions[0]}`]);
              }}
            >
              Start Over
            </button>
          )}
        </div>
      )}

      {/* Render recommendations below chat if desired */}
      {recommendations && (
        <div className="fixed bottom-4 right-4 w-[90%] sm:w-[32rem] max-h-[60%] bg-white rounded-lg shadow-xl p-4 overflow-y-auto mt-[550px]">
          <h3 className="text-lg font-semibold mb-2">Your Recommendations</h3>
          {recommendations.map((prod) => (
            <div key={prod._id} className="border-b border-gray-200 py-2">
              <p className="font-medium">
                {prod.name} (${prod.price})
              </p>
              <p className="text-sm">
                Olfactive Family: {prod.fragranceNotes?.olfactiveFamily}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Chat;

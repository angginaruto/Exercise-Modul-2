import { useState } from "react";
import { useUserStore } from "../store/useUserStore"; // Import Store
import latarPohon from "../assets/Bitmap (2).png";
import bulan from "../assets/Combined Shape.png";

export default function Main() {
  const { email, isLoggedIn, setUser, logout } = useUserStore();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState(""); // State sementara untuk form login

  const [todos, setTodos] = useState([
    { id: 1, text: "Complete online JavaScript course", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleUpdateTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: editText } : t)));
    setEditingId(null);
  };

  const filteredTodos = todos
    .filter((todo) => {
      const matchesFilter =
        filter === "active"
          ? !todo.completed
          : filter === "completed"
            ? todo.completed
            : true;
      const matchesSearch = todo.text
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      return sortOrder === "newest" ? b.id - a.id : a.id - b.id;
    });

  const itemsLeft = todos.filter((t) => !t.completed).length;

  return (
    <main className="bg-white min-h-[100vh] w-[100%] relative z-0 p-0 flex items-center justify-center">
      <img
        src={latarPohon}
        className="absolute inset-0 object-cover h-[300px] w-[100%] z-[-1]"
        alt="background"
      />

      <div className="rounded-lg text-white z-10 w-full max-w-[541px] px-6 md:px-0 min-h-[600px]">
        <div className="flex flex-col mb-[45px]">
          <div className="flex items-center justify-between">
            <p className="text-[40px] font-bold font-josefin tracking-[14px]">
              TODO
            </p>
            <img
              src={bulan}
              className="h-[26px] w-[26px] cursor-pointer"
              alt="icon"
            />
          </div>

          {isLoggedIn && (
            <div className="flex justify-between items-center mt-2 bg-black/10 p-2 rounded backdrop-blur-sm border border-white/20">
              <span className="font-josefin text-sm italic text-white">
                User: {email}
              </span>
              <button
                onClick={logout}
                className="text-xs font-bold hover:text-red-200 underline"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {!isLoggedIn ? (
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full text-center">
            <h2 className="text-[#494C6B] text-2xl font-bold mb-6 font-josefin">
              SIGN IN
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-4 border border-[#E3E4F1] rounded-[5px] outline-none text-[#494C6B] font-josefin"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              <input
                type="password" // Agar teks jadi bintang/bulatan
                placeholder="Password"
                className="p-4 border border-[#E3E4F1] rounded-[5px] outline-none text-[#494C6B] font-josefin"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <button
                onClick={() => {
                  if (inputEmail && inputPassword) {
                    setUser(inputEmail, inputPassword);
                  } else {
                    alert("Please fill both fields!");
                  }
                }}
                className="bg-gradient-to-r from-[#55DDFF] to-[#C058F3] text-white p-4 rounded-[5px] font-bold font-josefin hover:opacity-90 transition-all"
              >
                ENTER APP
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Input Area */}
            <div className="h-[64px] w-full bg-white rounded-[5px] flex items-center p-[20px] mb-[24px] shadow-lg">
              <button
                onClick={handleAddTodo}
                className="h-[24px] min-w-[24px] rounded-full border-2 border-[#E3E4F1] mr-[24px] hover:border-[#C058F3] transition-all"
              ></button>
              <input
                type="text"
                className="text-[#494C6B] font-josefin text-[18px] w-full outline-none"
                placeholder="Create a new todo..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
              />
            </div>

            {/* Search & Sort UI */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Search tasks..."
                className="flex-grow p-3 rounded-[5px] bg-white text-[#494C6B] shadow-md outline-none font-josefin text-[14px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="p-3 rounded-[5px] bg-white text-[#494C6B] shadow-md outline-none font-josefin text-[14px] cursor-pointer"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>

            {/* Todo List Container */}
            <div className="w-full rounded-[5px] bg-white shadow-2xl overflow-hidden">
              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center p-[20px] border-b border-[#E3E4F1] group"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`h-[24px] min-w-[24px] rounded-full border flex items-center justify-center mr-[24px] transition-all ${
                      todo.completed
                        ? "bg-gradient-to-br from-[#55DDFF] to-[#C058F3] border-none"
                        : "border-[#E3E4F1]"
                    }`}
                  >
                    {todo.completed && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                      >
                        <path
                          fill="none"
                          stroke="#FFF"
                          strokeWidth="2"
                          d="M1 4.304L3.696 7l6-6"
                        />
                      </svg>
                    )}
                  </button>

                  {editingId === todo.id ? (
                    <input
                      className="font-josefin text-[18px] flex-grow outline-none border-b-2 border-[#3A7CFD] text-[#494C6B]"
                      value={editText}
                      autoFocus
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={() => handleUpdateTodo(todo.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleUpdateTodo(todo.id);
                        if (e.key === "Escape") setEditingId(null);
                      }}
                    />
                  ) : (
                    <p
                      onDoubleClick={() => {
                        setEditingId(todo.id);
                        setEditText(todo.text);
                      }}
                      className={`font-josefin text-[18px] flex-grow cursor-pointer transition-all ${
                        todo.completed
                          ? "text-[#D1D2DA] line-through"
                          : "text-[#494C6B]"
                      }`}
                    >
                      {todo.text}
                    </p>
                  )}

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="hidden group-hover:block ml-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                    >
                      <path
                        fill="#494C6B"
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.192 9.192l8.485 8.485-.707.708L8.485 9.9 0 18.385l-.707-.708L7.778 9.192-.707.707 0 0l8.485 8.485L16.97 0z"
                      />
                    </svg>
                  </button>
                </div>
              ))}

              {/* Footer Status */}
              <div className="flex items-center justify-between p-[20px] text-[14px] text-[#9495A5]">
                <span className="font-josefin">{itemsLeft} items left</span>
                <div className="hidden md:flex gap-4 font-bold">
                  {["all", "active", "completed"].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`capitalize font-josefin hover:text-[#494C6B] ${filter === f ? "text-[#3A7CFD]" : ""}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <button
                  onClick={clearCompleted}
                  className="hover:text-[#494C6B] font-josefin"
                >
                  Clear Completed
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

import { useState } from "react";
import latarPohon from "../assets/Bitmap (2).png";
import bulan from "../assets/Combined Shape.png";

export default function Main() {
  // 1. State untuk menyimpan daftar tugas
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete online JavaScript course", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
  ]);

  // 2. State untuk input text & filter
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  // Fungsi: Tambah Todo (dipanggil tombol lingkaran atau Enter)
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

  // Fungsi: Toggle Selesai/Belum
  const toggleTodo = (id: any) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Fungsi: Hapus satu item
  const deleteTodo = (id: any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Fungsi: Hapus semua yang sudah dicentang
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filter Logika: Menentukan apa yang tampil di layar
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
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
        {/* Header */}
        <div className="flex items-center justify-between h-[auto] mb-[45px]">
          <p className="text-[40px] font-bold font-josefin tracking-[14px]">
            TODO
          </p>
          <img
            src={bulan}
            className="h-[26px] w-[26px] cursor-pointer"
            alt="icon"
          />
        </div>

        {/* Input Area */}
        <div className="h-[64px] w-full bg-white rounded-[5px] flex items-center p-[20px] mb-[24px] shadow-lg">
          {/* Button Lingkaran Putih untuk Submit */}
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

        {/* Todo List Container */}
        <div className="w-full rounded-[5px] bg-white shadow-2xl overflow-hidden">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center p-[20px] border-b border-[#E3E4F1] group"
            >
              {/* Tombol Checkbox */}
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`h-[24px] min-w-[24px] rounded-full border flex items-center justify-center mr-[24px] transition-all ${
                  todo.completed
                    ? "bg-gradient-to-br from-[#55DDFF] to-[#C058F3] border-none"
                    : "border-[#E3E4F1] hover:border-[#C058F3]"
                }`}
              >
                {todo.completed && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path
                      fill="none"
                      stroke="#FFF"
                      strokeWidth="2"
                      d="M1 4.304L3.696 7l6-6"
                    />
                  </svg>
                )}
              </button>

              {/* Teks Todo */}
              <p
                onClick={() => toggleTodo(todo.id)}
                className={`font-josefin text-[18px] flex-grow cursor-pointer transition-all ${
                  todo.completed
                    ? "text-[#D1D2DA] line-through"
                    : "text-[#494C6B]"
                }`}
              >
                {todo.text}
              </p>

              {/* Tombol Hapus - Muncul saat hover */}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="hidden group-hover:block ml-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path
                    fill="#494C6B"
                    fillRule="evenodd"
                    d="M16.97 0l.708.707L9.192 9.192l8.485 8.485-.707.708L8.485 9.9 0 18.385l-.707-.708L7.778 9.192-.707.707 0 0l8.485 8.485L16.97 0z"
                  />
                </svg>
              </button>
            </div>
          ))}

          {/* Footer (Status Bar) */}
          <div className="flex items-center justify-between p-[20px] text-[14px] text-[#9495A5]">
            <span className="font-josefin">{itemsLeft} items left</span>

            <div className="hidden md:flex gap-4 font-bold">
              <button
                onClick={() => setFilter("all")}
                className={`font-josefin hover:text-[#494C6B] ${filter === "all" ? "text-[#3A7CFD]" : ""}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`font-josefin hover:text-[#494C6B] ${filter === "active" ? "text-[#3A7CFD]" : ""}`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`font-josefin hover:text-[#494C6B] ${filter === "completed" ? "text-[#3A7CFD]" : ""}`}
              >
                Completed
              </button>
            </div>

            <button
              onClick={clearCompleted}
              className="hover:text-[#494C6B] font-josefin"
            >
              Clear Completed
            </button>
          </div>
        </div>

        {/* Mobile Filter*/}
        <div className="md:hidden mt-4 bg-white p-[20px] rounded-[5px] flex justify-center gap-6 font-bold text-[#9495A5] shadow-lg">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "text-[#3A7CFD]" : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={filter === "active" ? "text-[#3A7CFD]" : ""}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "text-[#3A7CFD]" : ""}
          >
            Completed
          </button>
        </div>
      </div>
    </main>
  );
}

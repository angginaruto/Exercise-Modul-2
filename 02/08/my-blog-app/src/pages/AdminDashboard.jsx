import { useState, useEffect } from "react";
import Backendless from "../api/backendless";

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", content: "" });

  const fetchPosts = async () => {
    try {
      const data = await Backendless.Data.of("Posts").find();
      setPosts(data);
    } catch (err) {
      console.error("Gagal ambil data", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const savePost = async (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.content.trim()) {
      alert("Waduh! Judul dan Isi Blog nggak boleh kosong ya.");
      return;
    }

    await Backendless.Data.of("Posts").save(form);
    setForm({ title: "", author: "", content: "" });
    fetchPosts();
    alert("Sip! Blog berhasil disimpan.");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
        Admin - Tambah Blog
      </h1>

      <form onSubmit={savePost} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Judul Blog
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Masukkan judul menarik..."
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Penulis
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Nama kamu"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Isi Konten
          </label>
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Tulis cerita blog di sini..."
            rows="5"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-200">
          Simpan Blog Sekarang
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Daftar Blog Tersimpan:
        </h2>
        <ul className="divide-y divide-gray-200">
          {posts.map((p) => (
            <li key={p.objectId} className="py-3 flex justify-between">
              <span className="font-medium">{p.title}</span>
              <span className="text-gray-500 text-sm italic">
                oleh {p.author}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;

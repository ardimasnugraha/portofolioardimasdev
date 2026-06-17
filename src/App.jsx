import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegram, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  { title: "Perpustakaan Sekolah Digital", desc: "Sistem manajemen buku, e-book, data anggota, serta transaksi peminjaman.", img: "/images/project1.png", github: "#" },
  { title: "Task Manager App", desc: "Aplikasi manajemen tugas modern untuk mencatat dan mengatur progres pekerjaan.", img: "/images/project2.png", github: "#" },
  { title: "Website Penjualan E-Commerce", desc: "Toko online modern dengan manajemen stok dan laporan penjualan.", img: "/images/project3.png", github: "#" }
];

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-gray-100">
        <h2 className="text-2xl font-bold italic tracking-tighter">Ardimas<span className="text-blue-600">Dev</span></h2>
        <ul className="flex gap-8 font-medium text-gray-600">
          {['Beranda', 'Proyek', 'Kontak'].map(item => (
            <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">{item}</a></li>
          ))}
        </ul>
      </nav>

      {/* HERO - Dengan Background Gradient */}
      <header id="beranda" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-blue-200">
            Available for Work
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            Membangun Masa Depan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Satu Baris Kode.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Halo, saya Ardimas. Web Developer yang berfokus pada performa, estetika, dan pengalaman pengguna yang luar biasa.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all transform hover:scale-105">Hubungi Saya</a>
          </div>
        </div>
      </header>

      {/* PROJECTS - Grid yang Lebih Elegan */}
      <section id="proyek" className="py-24 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Proyek Pilihan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden rounded-xl mb-4">
                <img src={proj.img} alt={proj.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{proj.desc}</p>
              <div className="flex gap-4 border-t pt-4">
                <a href="#" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600"><FaExternalLinkAlt /> Live Demo</a>
                <a href={proj.github} className="flex items-center gap-2 text-sm font-semibold hover:text-gray-900"><FaGithub /> GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="kontak" className="py-20 bg-gray-950 text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-10">Mari Bekerja Sama</h2>
        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"><FaInstagram size={24} /></a>
          <a href="#" className="p-4 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"><FaWhatsapp size={24} /></a>
          <a href="#" className="p-4 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors"><FaTelegram size={24} /></a>
        </div>
        <p className="text-gray-500">© 2026 Ardimas Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
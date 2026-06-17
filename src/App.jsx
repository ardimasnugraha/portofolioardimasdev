import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegram, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// UPDATE DATA PROYEK DI SINI
const projects = [
  { 
    title: "Perpustakaan Sekolah Digital", 
    desc: "Sistem manajemen buku, e-book, data anggota, serta transaksi peminjaman.", 
    img: "/images/project1.png", 
    demo: "https://your-demo-link.com", 
    github: "https://github.com/yourusername/project1" 
  },
  { 
    title: "Task Manager App", 
    desc: "Aplikasi manajemen tugas modern untuk mencatat dan mengatur progres pekerjaan.", 
    img: "/images/project2.png", 
    demo: "https://your-demo-link.com", 
    github: "https://github.com/yourusername/project2" 
  },
  { 
    title: "Website Penjualan E-Commerce", 
    desc: "Toko online modern dengan manajemen stok dan laporan penjualan.", 
    img: "/images/project3.png", 
    demo: "https://your-demo-link.com", 
    github: "https://github.com/yourusername/project3" 
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      
      {/* NAVBAR: Dibuat lebih renggang di mobile agar mudah ditekan jari */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 p-4 md:p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold italic tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Ardimas<span className="text-blue-600">Dev</span>
        </h2>
        {/* Gap dikurangi di mobile (gap-4) dan membesar di desktop (md:gap-8) */}
        <ul className="flex gap-4 md:gap-8 font-medium text-sm md:text-base text-gray-600">
          {['Beranda', 'Proyek', 'Kontak'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header id="beranda" className="py-16 md:py-24 px-6 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-blue-50 via-indigo-50/30 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 shadow-lg shadow-blue-200">
            Available for Work
          </span>
          <h1 className="text-3xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight">
            Membangun Masa Depan <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-blue-600 via-purple-600 to-indigo-600">
              Satu Baris Kode.
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Halo, saya <span className="font-semibold text-gray-900">Ardimas</span>. Web Developer yang berfokus pada performa, estetika, dan pengalaman pengguna yang luar biasa.
          </p>
          <div className="flex justify-center">
            <a href="#kontak" className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3.5 md:py-4 rounded-full font-bold text-center hover:bg-blue-600 shadow-lg hover:shadow-blue-200 transition-all duration-300 transform active:scale-95 md:hover:-translate-y-1">
              Hubungi Saya
            </a>
          </div>
        </div>
      </header>

      {/* PROJECTS SECTION */}
      <section id="proyek" className="py-16 md:py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center">Proyek Pilihan</h2>
        <p className="text-gray-500 text-center mb-10 md:mb-16 text-sm md:text-base max-w-md mx-auto">Berikut adalah beberapa project terbaik yang pernah saya kerjakan baru-baru ini.</p>
        
        {/* Grid otomatis 1 kolom di HP, 3 kolom di Laptop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Aspek rasio gambar dijaga tetap pas di layar Android */}
                <div className="overflow-hidden rounded-xl mb-4 bg-gray-100 aspect-video">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600" }}
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1.5 group-hover:text-blue-600 transition-colors">{proj.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">{proj.desc}</p>
              </div>
              
              <div className="flex gap-4 border-t border-gray-100 pt-3 mt-auto">
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  <FaExternalLinkAlt size={10} /> Live Demo
                </a>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors ml-auto">
                  <FaGithub size={12} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT SECTION */}
      <footer id="kontak" className="py-16 md:py-20 bg-gray-950 text-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Mari Bekerja Sama</h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-10">Punya ide luar biasa atau butuh bantuan pembuatan website? Hubungi saya melalui platform di bawah ini.</p>
          
          {/* Ikon sosial media yang pas untuk disentuh jempol (tidak terlalu kecil) */}
          <div className="flex justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <a href="https://instagram.com/username_kamu" target="_blank" rel="noopener noreferrer" className="p-3.5 md:p-4 bg-gray-900 rounded-full hover:bg-pink-600 text-gray-300 transition-all duration-300 shadow-md" title="Instagram">
              <FaInstagram size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="https://wa.me/628xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="p-3.5 md:p-4 bg-gray-900 rounded-full hover:bg-green-500 text-gray-300 transition-all duration-300 shadow-md" title="WhatsApp">
              <FaWhatsapp size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="t.me/Paijoyyyksn" target="_blank" rel="noopener noreferrer" className="p-3.5 md:p-4 bg-gray-900 rounded-full hover:bg-blue-500 text-gray-300 transition-all duration-300 shadow-md" title="Telegram">
              <FaTelegram size={20} className="md:w-6 md:h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-900 pt-6 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} Ardimas Portfolio. Built with React & Tailwind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
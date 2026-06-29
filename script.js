// ============================================================
// DATA - HenLogoDesign
// ============================================================

const layananData = [
    { icon: 'fa-bolt', title: 'HenLogo Modern', desc: 'Desain minimalis & futuristik dengan warna berani untuk brand masa kini.' },
    { icon: 'fa-crown', title: 'HenLogo Premium', desc: 'Logo mewah & eksklusif untuk brand kelas atas dengan sentuhan elegan.' },
    { icon: 'fa-cube', title: 'HenLogo 3D', desc: 'Desain tiga dimensi yang dinamis & berkesan untuk brand modern.' },
    { icon: 'fa-building', title: 'HenLogo Bisnis', desc: 'Desain profesional untuk korporasi & bisnis dengan kesan solid.' },
    { icon: 'fa-leaf', title: 'HenLogo Ekologis', desc: 'Konsep ramah lingkungan dengan warna alami yang menenangkan.' },
    { icon: 'fa-star', title: 'HenLogo Kreatif', desc: 'Desain unik & out-of-the-box untuk brand yang ingin tampil beda.' }
];

const portofolioData = [
    { id: 1, title: 'HenLogo Modern 1', category: 'modern', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Modern+1' },
    { id: 2, title: 'HenLogo Modern 2', category: 'modern', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Modern+2' },
    { id: 3, title: 'HenLogo Klasik', category: 'klasik', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Klasik' },
    { id: 4, title: 'HenLogo Minimalis', category: 'minimalis', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Minimalis' },
    { id: 5, title: 'HenLogo Bisnis', category: 'bisnis', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Bisnis' },
    { id: 6, title: 'HenLogo Kreatif', category: 'kreatif', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Kreatif' },
    { id: 7, title: 'HenLogo Premium', category: 'premium', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Premium' },
    { id: 8, title: 'HenLogo Modern 3', category: 'modern', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Modern+3' },
    { id: 9, title: 'HenLogo Klasik 2', category: 'klasik', image: 'https://placehold.co/600x400/1a1a1a/fbbf24?text=HenLogo+Klasik+2' }
];

const paketData = [
    {
        name: 'Basic',
        price: '199',
        features: ['1 Konsep HenLogo', '2x Revisi', 'File PNG', '3 Hari Pengerjaan'],
        popular: false
    },
    {
        name: 'Standard',
        price: '399',
        features: ['3 Konsep HenLogo', '5x Revisi', 'File PNG + SVG', 'Buku Panduan', '2 Hari Pengerjaan'],
        popular: true
    },
    {
        name: 'Premium',
        price: '699',
        features: ['5 Konsep HenLogo', 'Unlimited Revisi', 'File Semua Format', 'Buku Panduan', '1 Hari Pengerjaan', 'Prioritas Support'],
        popular: false
    }
];

const prosesData = [
    { step: 1, title: 'Konsultasi HenLogo', desc: 'Diskusikan kebutuhan & konsep logo dengan tim HenLogoDesign.' },
    { step: 2, title: 'Sketsa & Konsep', desc: 'Tim HenLogoDesign membuat sketsa awal untuk dipilih.' },
    { step: 3, title: 'Revisi & Finalisasi', desc: 'Lakukan revisi hingga logo HenLogo sempurna.' },
    { step: 4, title: 'Serah Terima', desc: 'Logo HenLogo siap pakai untuk bisnis Anda.' }
];

const testimoniData = [
    { name: 'Andi Pratama', desc: 'HenLogoDesign membuat logo yang sangat profesional dan sesuai dengan visi brand kami.', rating: 5 },
    { name: 'Siti Rahayu', desc: 'Proses cepat dan hasil memuaskan. HenLogoDesign rekomendasi banget!', rating: 5 },
    { name: 'Budi Santoso', desc: 'Tim HenLogoDesign kreatif dan sangat membantu dalam proses desain.', rating: 4 },
    { name: 'Dewi Lestari', desc: 'Desain HenLogo unik dan modern. Sangat puas dengan hasilnya!', rating: 5 },
    { name: 'Rudi Hartono', desc: 'Pelayanan HenLogoDesign ramah dan profesional. Logo kami jadi lebih berkelas.', rating: 4 },
    { name: 'Maya Sari', desc: 'Harga terjangkau dengan kualitas premium HenLogoDesign. Terima kasih!', rating: 5 }
];

const faqData = [
    { q: 'Berapa lama proses pengerjaan HenLogo?', a: 'Pengerjaan logo HenLogo biasanya memakan waktu 1-3 hari kerja tergantung paket yang dipilih.' },
    { q: 'Apakah bisa revisi desain HenLogo?', a: 'Ya, setiap paket HenLogo sudah termasuk revisi. Untuk paket Premium, revisi tidak terbatas.' },
    { q: 'Format file HenLogo apa yang diberikan?', a: 'Kami memberikan file PNG, JPG, SVG, EPS, dan PDF untuk logo HenLogo Anda.' },
    { q: 'Bagaimana cara memesan HenLogo?', a: 'Klik tombol "Pesan Sekarang" atau chat via WhatsApp untuk konsultasi HenLogo.' },
    { q: 'Apakah ada garansi untuk desain HenLogo?', a: 'Ya, kami memberikan garansi kepuasan 100%. Jika tidak puas, uang kembali.' }
];

const blogData = [
    { title: '5 Tren Desain HenLogo 2026', desc: 'Temukan tren desain logo HenLogo terbaru yang akan mendominasi tahun ini.', tag: 'Tren' },
    { title: 'Pentingnya HenLogo untuk Brand', desc: 'HenLogo adalah wajah bisnis Anda. Pelajari mengapa logo itu penting.', tag: 'Branding' },
    { title: 'Tips Memilih Warna HenLogo', desc: 'Panduan memilih warna yang tepat untuk logo HenLogo bisnis Anda.', tag: 'Tips' },
    { title: 'HenLogo Minimalis: Elegan & Fungsional', desc: 'Mengapa gaya minimalis menjadi pilihan banyak brand modern.', tag: 'Inspirasi' }
];

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function renderLayanan() {
    const container = document.getElementById('layananContainer');
    container.innerHTML = layananData.map((item, index) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="service-card">
                <div class="service-icon"><i class="fas ${item.icon}"></i></div>
                <h5>${item.title}</h5>
                <p class="text-muted">${item.desc}</p>
                <a href="https://wa.me/6281248141031?text=Halo%2C%20saya%20ingin%20memesan%20jasa%20desain%20logo%20HenLogoDesign." 
                   class="btn btn-warning btn-sm rounded-pill px-4">Pesan HenLogo</a>
            </div>
        </div>
    `).join('');
}

function renderPortofolio(filter = 'all') {
    const container = document.getElementById('portofolioContainer');
    const filtered = filter === 'all' ? portofolioData : portofolioData.filter(p => p.category === filter);
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center text-white py-5">
                <i class="fas fa-search fa-3x text-warning mb-3"></i>
                <h4>Tidak ada karya HenLogo dalam kategori ini</h4>
                <p class="text-light opacity-75">Coba filter lain atau lihat semua karya HenLogoDesign</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map((item, index) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="portfolio-item">
                <img src="${item.image}" alt="${item.title}" loading="lazy" 
                     onerror="this.src='https://placehold.co/600x400/1a1a1a/fbbf24?text=${item.title}'" />
                <div class="portfolio-overlay">
                    <h5>${item.title}</h5>
                    <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                    <a href="https://wa.me/6281248141031?text=Halo%2C%20saya%20ingin%20memesan%20jasa%20desain%20logo%20HenLogoDesign." 
                       class="btn btn-warning btn-sm rounded-pill">Pesan HenLogo</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPaket() {
    const container = document.getElementById('paketContainer');
    container.innerHTML = paketData.map((item, index) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 150}">
            <div class="package-card ${item.popular ? 'popular' : ''}">
                ${item.popular ? '<div class="package-badge mb-3">Paling Laris</div>' : ''}
                <h4>${item.name}</h4>
                <div class="price">Rp ${item.price} <span>/paket</span></div>
                <ul class="my-4">
                    ${item.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <a href="https://wa.me/6281248141031?text=Halo%2C%20saya%20ingin%20memesan%20jasa%20desain%20logo%20HenLogoDesign." 
                   class="btn ${item.popular ? 'btn-warning' : 'btn-outline-dark'} w-100 rounded-pill py-2">
                    Pilih Paket HenLogo
                </a>
            </div>
        </div>
    `).join('');
}

function renderProses() {
    const container = document.getElementById('prosesContainer');
    container.innerHTML = prosesData.map((item, index) => `
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="process-step">
                <div class="step-number">${item.step}</div>
                <h5>${item.title}</h5>
                <p>${item.desc}</p>
                ${index < prosesData.length - 1 ? '<div class="step-line"></div>' : ''}
            </div>
        </div>
    `).join('');
}

function renderTestimoni() {
    const container = document.getElementById('testimoniContainer');
    container.innerHTML = testimoniData.map((item, index) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="testimonial-card">
                <div class="d-flex align-items-center gap-3 mb-3">
                    <div class="testimonial-avatar">${item.name.charAt(0)}</div>
                    <div>
                        <h6 class="mb-0 fw-bold">${item.name}</h6>
                        <div class="stars">${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div>
                    </div>
                </div>
                <p class="text-muted mb-0">"${item.desc}"</p>
            </div>
        </div>
    `).join('');
}

function renderFAQ() {
    const container = document.getElementById('faqAccordion');
    container.innerHTML = faqData.map((item, index) => `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#faq${index}" aria-expanded="${index === 0}">
                    ${item.q}
                </button>
            </h2>
            <div id="faq${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
                 data-bs-parent="#faqAccordion">
                <div class="accordion-body">${item.a}</div>
            </div>
        </div>
    `).join('');
}

function renderBlog() {
    const container = document.getElementById('blogContainer');
    container.innerHTML = blogData.map((item, index) => `
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="blog-card">
                <img src="https://placehold.co/600x300/1a1a1a/fbbf24?text=${item.tag}" alt="${item.title}" loading="lazy" />
                <div class="blog-body">
                    <span class="blog-tag">${item.tag}</span>
                    <h5 class="mt-2">${item.title}</h5>
                    <p class="text-muted small">${item.desc}</p>
                    <a href="https://wa.me/6281248141031?text=Halo%2C%20saya%20ingin%20memesan%20jasa%20desain%20logo%20HenLogoDesign." 
                       class="btn btn-warning btn-sm rounded-pill">Baca</a>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================================
// FILTER PORTOFOLIO
// ============================================================

document.addEventListener('click', function(e) {
    const filterBtn = e.target.closest('.btn-filter');
    if (filterBtn) {
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
        renderPortofolio(filterBtn.dataset.filter);
    }
});

// ============================================================
// SEARCH
// ============================================================

function performSearch(query) {
    if (query.trim()) {
        const found = layananData.filter(l => 
            l.title.toLowerCase().includes(query.toLowerCase()) || 
            l.desc.toLowerCase().includes(query.toLowerCase())
        );
        if (found.length > 0) {
            document.getElementById('layananContainer').innerHTML = found.map((item, index) => `
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="service-card">
                        <div class="service-icon"><i class="fas ${item.icon}"></i></div>
                        <h5>${item.title}</h5>
                        <p class="text-muted">${item.desc}</p>
                        <a href="https://wa.me/6281248141031?text=Halo%2C%20saya%20ingin%20memesan%20jasa%20desain%20logo%20HenLogoDesign." 
                           class="btn btn-warning btn-sm rounded-pill px-4">Pesan HenLogo</a>
                    </div>
                </div>
            `).join('');
            document.querySelector('#layanan').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Layanan HenLogo tidak ditemukan. Coba kata kunci lain.');
        }
    }
}

document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    performSearch(query);
});

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch(this.value);
    }
});

document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const value = this.dataset.search;
        document.getElementById('searchInput').value = value;
        performSearch(value);
    });
});

// ============================================================
// DARK MODE
// ============================================================

let darkMode = localStorage.getItem('darkMode') === 'true';
const themeToggle = document.getElementById('themeToggle');

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    themeToggle.innerHTML = darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('darkMode', darkMode);
}

themeToggle.addEventListener('click', toggleDarkMode);
if (darkMode) {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// ============================================================
// BACK TO TOP
// ============================================================

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    backToTop.classList.toggle('show', window.scrollY > 500);
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// NAVBAR SCROLL
// ============================================================

const nav = document.getElementById('mainNav');
window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 100);
});

// ============================================================
// LOADING SCREEN
// ============================================================

let progress = 0;
const loadingBar = document.getElementById('loadingBarFill');

function simulateLoading() {
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loadingScreen').classList.add('hidden');
                AOS.init({
                    duration: 800,
                    once: true,
                    offset: 100
                });
                animateStats();
                animateHeroStats();
            }, 500);
        }
        loadingBar.style.width = Math.min(progress, 100) + '%';
    }, 150);
}

simulateLoading();

// ============================================================
// ANIMATE STATS
// ============================================================

function animateStats() {
    document.querySelectorAll('.stat-number-lg').forEach(stat => {
        const target = parseFloat(stat.dataset.count);
        const isFloat = target % 1 !== 0;
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
        }, 30);
    });
}

function animateHeroStats() {
    document.querySelectorAll('.hero-stats .stat-number').forEach(stat => {
        const target = parseFloat(stat.dataset.count);
        const isFloat = target % 1 !== 0;
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
        }, 30);
    });
}

// ============================================================
// PARTICLES
// ============================================================

function createParticles() {
    const container = document.getElementById('heroParticles');
    const colors = ['#fbbf24', '#f59e0b', '#ffffff', '#ffd700', '#ff6b35'];
    for (let i = 0; i < 70; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.1};
            animation: float-particle ${Math.random() * 15 + 8}s ease-in-out infinite;
            animation-delay: ${Math.random() * 6}s;
            box-shadow: 0 0 ${size * 3}px ${color}44;
        `;
        container.appendChild(particle);
    }
}

if (!document.getElementById('particle-style')) {
    const style = document.createElement('style');
    style.id = 'particle-style';
    style.textContent = `
        @keyframes float-particle {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
            20% { transform: translate(40px, -30px) scale(1.3); opacity: 0.6; }
            40% { transform: translate(-20px, -70px) scale(0.7); opacity: 0.3; }
            60% { transform: translate(50px, -20px) scale(1.5); opacity: 0.7; }
            80% { transform: translate(-30px, -50px) scale(0.9); opacity: 0.4; }
        }
    `;
    document.head.appendChild(style);
}
createParticles();

// ============================================================
// INIT RENDER
// ============================================================

renderLayanan();
renderPortofolio('all');
renderPaket();
renderProses();
renderTestimoni();
renderFAQ();
renderBlog();

// ============================================================
// CONTACT FORM
// ============================================================

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const pesan = this.querySelector('textarea').value;
    const waLink = `https://wa.me/6281248141031?text=Halo%2C%20saya%20${encodeURIComponent(nama)}%20(${encodeURIComponent(email)}).%20Saya%20ingin%20memesan%20jasa%20desain%20logo%20HenLogoDesign.%20${encodeURIComponent(pesan)}`;
    window.open(waLink, '_blank');
});

// ============================================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            const navCollapse = document.querySelector('.navbar-collapse');
            if (navCollapse && navCollapse.classList.contains('show')) {
                navCollapse.classList.remove('show');
            }
        }
    });
});

// ============================================================
// CONSOLE
// ============================================================

console.log('🚀 HenLogoDesign - Siap membantu brand Anda bersinar!');
console.log('📞 Hubungi: +62 812 4814 1031');
console.log('💡 Klik tombol WhatsApp untuk konsultasi gratis HenLogo!');
console.log('🎨 Desain logo premium untuk brand Anda!');
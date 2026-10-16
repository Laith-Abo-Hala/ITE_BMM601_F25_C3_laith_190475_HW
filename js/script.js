// Smart Land Digital Products & Software Solutions Dataset
const projects = [
    {
        id: 1,
        title: "Smart Signal Analytics",
        category: "AI",
        tagline: "AI-Powered Sign Language Translation Platform",
        image: "assets/images/smart-signal.webp",
        description: "An intelligent application designed to translate sign language and facilitate more accessible communication through AI-powered technology.",
        features: ["Edge Signal Processing", "Predictive Analytics", "Real-Time Telemetry Dashboard", "Low-Latency Event Stream"]
    },
    {
        id: 2,
        title: "MyKey Identity System",
        category: "Marketplace",
        tagline: "Digital Property & Vehicle Marketplace Platform",
        image: "assets/images/mykey.webp",
        description: "A unified digital marketplace enabling users to discover, list, sell, and rent properties and vehicles through an intelligent online platform.",
        features: ["Zero-Trust Security", "Multi-Factor Authentication", "Encrypted Key Vault", "API Gateway Integration"]
    },
    {
        id: 3,
        title: "Sada Digital Platform",
        category: "EdTech",
        tagline: "Digital Learning & Education Management Platform",
        image: "assets/images/sada.webp",
        description: "A scalable distance-learning platform delivering digital education experiences with centralized course management and accessible online learning.",
        features: ["Custom Workflow Automation", "Multi-Tenant Architecture", "High-Scale Cloud Infrastructure", "Integrated Analytics"]
    },
    {
        id: 4,
        title: "Smart Welcome Hub",
        category: "E-Commerce",
        tagline: "Multi-Store E-Commerce & Digital Commerce Platform",
        image: "assets/images/welcome.webp",
        description: "A unified e-commerce ecosystem connecting multiple stores, products, and customers through an integrated digital shopping experience.",
        features: ["Interactive Onboarding", "Self-Service Portal", "Custom Client Branding", "Omnichannel Messaging"]
    },
    {
        id: 5,
        title: "Hospital Management System",
        category: "HealthTech",
        tagline: "Enterprise Healthcare Operations Management Suite",
        image: "assets/images/hospital-management.webp",
        description: "An integrated hospital management solution designed to streamline healthcare operations, administrative workflows, and organizational data management.",
        features: ["EHR & Medical Records", "Patient Portal", "Resource Scheduling", "HIPAA-Compliant Vault"]
    }
];

let activeCategory = 'all';

// Render Digital Project Cards
function renderProjects(items) {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-500">
                <i class="fa-solid fa-folder-open text-4xl mb-3 text-slate-300"></i>
                <p class="text-lg font-semibold">No products found for this category.</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group";
        card.innerHTML = `
            <div class="relative h-60 overflow-hidden bg-slate-900">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100">
                <span class="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    ${item.category}
                </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">${item.title}</h3>
                    <p class="text-xs font-semibold text-brand-blue uppercase tracking-wider mt-1">${item.tagline}</p>
                    <p class="text-slate-600 text-sm mt-3 line-clamp-2">${item.description}</p>
                </div>

                <button onclick="openModal(${item.id})" class="mt-6 w-full py-3 bg-slate-100 hover:bg-brand-blue hover:text-white text-slate-800 font-bold text-sm rounded-xl transition-all">
                    View Solution Details
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Category Filter Logic
function filterCategory(category, btn) {
    activeCategory = category;
    document.querySelectorAll('.category-tab').forEach(t => {
        t.className = "category-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all";
    });
    btn.className = "category-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-900 shadow-sm transition-all";

    const filtered = category === 'all' ? projects : projects.filter(p => p.category === category);
    renderProjects(filtered);
}

// Modal Logic
function openModal(id) {
    const item = projects.find(p => p.id === id);
    if (!item) return;

    const modal = document.getElementById('projectModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
        <div class="h-64 sm:h-80 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 relative overflow-hidden bg-slate-900">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
            <span class="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">
                ${item.category}
            </span>
        </div>
        <div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${item.title}</h2>
            <p class="text-brand-blue text-sm font-semibold mt-1">${item.tagline}</p>
        </div>

        <div>
            <h4 class="font-bold text-slate-900 text-base mb-2">Overview</h4>
            <p class="text-slate-600 text-sm leading-relaxed">${item.description}</p>
        </div>

        <div>
            <h4 class="font-bold text-slate-900 text-base mb-2">Key System Features</h4>
            <div class="flex flex-wrap gap-2">
                ${item.features.map(f => `<span class="bg-blue-50 text-brand-blue border border-blue-100 px-3 py-1 rounded-xl text-xs font-semibold"><i class="fa-solid fa-check me-1"></i> ${f}</span>`).join('')}
            </div>
        </div>

        <div class="pt-4 border-t border-slate-100 flex gap-3">
            <button onclick="openToast('Demo request dispatched!')" class="flex-1 py-3 bg-brand-blue hover:bg-brand-hover text-white font-bold rounded-xl text-sm transition-all">
                Request Product Demo
            </button>
            <button onclick="closeModal()" class="py-3 px-5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-sm transition-all">
                Close
            </button>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Form Handlers
function handleContactSubmit(e) {
    e.preventDefault();
    openToast("Thank you! Your project inquiry has been received.");
    e.target.reset();
}

function handleNewsletter(e) {
    e.preventDefault();
    openToast("Subscribed! Check your inbox for updates.");
    e.target.reset();
}

function openToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').innerText = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3500);
}

// Mobile Menu Toggle
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});

// Keydown & Modal Backdrop Listeners
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modal = document.getElementById('projectModal');
        if (modal && !modal.classList.contains('hidden')) closeModal();
    }
});

document.getElementById('projectModal')?.addEventListener('click', (event) => {
    if (event.target.id === 'projectModal') closeModal();
});

// Initialize on load
window.onload = function () {
    renderProjects(projects);
};
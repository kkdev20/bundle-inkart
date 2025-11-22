// Template 4 - Dark Mode Vue.js App
const { createApp } = Vue;

// Artists Data
const artistsData = {
    uluwatu: [
        {
            id: 'uluwatu-1',
            name: 'Arya Wijaya',
            specialty: 'Realistic & Portrait',
            branch: 'Uluwatu',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
            status: 'available',
            nextAvailable: '2024-12-16',
            bookings: ['2024-12-15', '2024-12-18', '2024-12-20']
        },
        {
            id: 'uluwatu-2',
            name: 'Sari Dewi',
            specialty: 'Japanese & Traditional',
            branch: 'Uluwatu',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
            status: 'free',
            nextAvailable: 'Today',
            bookings: ['2024-12-16', '2024-12-19']
        },
        {
            id: 'uluwatu-3',
            name: 'Made Kurniawan',
            specialty: 'Geometric & Minimalist',
            branch: 'Uluwatu',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
            status: 'busy',
            nextAvailable: '2024-12-18',
            bookings: ['2024-12-15', '2024-12-16', '2024-12-17', '2024-12-19', '2024-12-20', '2024-12-21']
        }
    ],
    canggu: [
        {
            id: 'canggu-1',
            name: 'Luna Putri',
            specialty: 'Watercolor & Abstract',
            branch: 'Canggu',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
            status: 'free',
            nextAvailable: 'Today',
            bookings: ['2024-12-15', '2024-12-18']
        },
        {
            id: 'canggu-2',
            name: 'Rio Santoso',
            specialty: 'Tribal & Polynesian',
            branch: 'Canggu',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
            status: 'available',
            nextAvailable: '2024-12-16',
            bookings: ['2024-12-16', '2024-12-20']
        },
        {
            id: 'canggu-3',
            name: 'Dewi Sari',
            specialty: 'Floral & Nature',
            branch: 'Canggu',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
            status: 'available',
            nextAvailable: '2024-12-17',
            bookings: ['2024-12-17', '2024-12-19']
        },
        {
            id: 'canggu-4',
            name: 'Budi Pratama',
            specialty: 'Blackwork & Dotwork',
            branch: 'Canggu',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
            status: 'busy',
            nextAvailable: '2024-12-19',
            bookings: ['2024-12-15', '2024-12-16', '2024-12-17', '2024-12-18']
        }
    ],
    denpasar: [
        {
            id: 'denpasar-1',
            name: 'Agung Wira',
            specialty: 'Realistic & 3D',
            branch: 'Denpasar',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
            status: 'busy',
            nextAvailable: '2024-12-19',
            bookings: ['2024-12-15', '2024-12-16', '2024-12-17', '2024-12-18', '2024-12-20', '2024-12-22']
        },
        {
            id: 'denpasar-2',
            name: 'Kartika Sari',
            specialty: 'Mandala & Sacred Geometry',
            branch: 'Denpasar',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
            status: 'free',
            nextAvailable: 'Today',
            bookings: ['2024-12-16', '2024-12-19']
        },
        {
            id: 'denpasar-3',
            name: 'Wayan Surya',
            specialty: 'Traditional Balinese',
            branch: 'Denpasar',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
            status: 'available',
            nextAvailable: '2024-12-16',
            bookings: ['2024-12-17', '2024-12-21']
        },
        {
            id: 'denpasar-4',
            name: 'Putu Ayu',
            specialty: 'Fine Line & Minimalist',
            branch: 'Denpasar',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
            status: 'available',
            nextAvailable: '2024-12-16',
            bookings: ['2024-12-18']
        },
        {
            id: 'denpasar-5',
            name: 'Ketut Adi',
            specialty: 'Neo-traditional & Color',
            branch: 'Denpasar',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
            status: 'free',
            nextAvailable: 'Today',
            bookings: ['2024-12-19']
        }
    ]
};

createApp({
    data() {
        return {
            currentLang: localStorage.getItem('language') || 'id',
            mobileMenuOpen: false,
            currentSlide: 0,
            carouselInterval: null,
            heroSlides: [
                {
                    image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
                    alt: 'Professional tattoo artist creating intricate arm design'
                },
                {
                    image: 'https://images.pexels.com/photos/32203196/pexels-photo-32203196.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
                    alt: 'Tattoo artist at work'
                },
                {
                    image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
                    alt: 'Tattoo studio professional work'
                }
            ],
            studios: [
                { name: 'Uluwatu', address: 'Jl. Pantai Suluban', artists: 3, hours: '10:00-22:00', id: 'uluwatu' },
                { name: 'Canggu', address: 'Jl. Batu Bolong', artists: 4, hours: '10:00-22:00', id: 'canggu' },
                { name: 'Denpasar', address: 'Jl. Gajah Mada', artists: 5, hours: '09:00-21:00', id: 'denpasar' }
            ],
            branches: [
                { id: 'uluwatu', name: 'Uluwatu Studio', artists: 3 },
                { id: 'canggu', name: 'Canggu Studio', artists: 4 },
                { id: 'denpasar', name: 'Denpasar Studio', artists: 5 }
            ],
            artistsData: artistsData,
            bookingState: {
                branch: null,
                artist: null,
                date: null,
                time: null
            },
            bookingForm: {
                name: '',
                email: '',
                phone: '',
                description: ''
            },
            portfolioItems: {
                graywash: [
                    { image: 'https://images.pexels.com/photos/32203196/pexels-photo-32203196.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Graywash tattoo', title: 'Graywash Design' },
                    { image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Black and gray tattoo', title: 'Black & Gray' },
                    { image: 'https://images.pexels.com/photos/32203196/pexels-photo-32203196.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Portrait tattoo', title: 'Portrait Work' },
                    { image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Realistic tattoo', title: 'Realistic Style' }
                ],
                fineline: [
                    { image: 'https://images.pexels.com/photos/32203196/pexels-photo-32203196.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Fineline tattoo', title: 'Fineline Design' },
                    { image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Script tattoo', title: 'Script Lettering' },
                    { image: 'https://images.pexels.com/photos/32203196/pexels-photo-32203196.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Small tattoo', title: 'Small Tattoo' },
                    { image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Minimalist tattoo', title: 'Minimalist' }
                ],
                color: [
                    { image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Color tattoo', title: 'Color Work' },
                    { image: 'https://images.pexels.com/photos/32203196/pexels-photo-32203196.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Vibrant tattoo', title: 'Vibrant Colors' },
                    { image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Watercolor tattoo', title: 'Watercolor' },
                    { image: 'https://images.pexels.com/photos/32203196/pexels-photo-32203196.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop', alt: 'Neo-traditional tattoo', title: 'Neo-Traditional' }
                ]
            },
            testimonials: [
                { initials: 'JD', name: 'John Doe', studio: 'Uluwatu Studio', text: 'Amazing work! The artist was professional and the result exceeded my expectations. Highly recommend!' },
                { initials: 'SM', name: 'Sarah Miller', studio: 'Canggu Studio', text: 'Best tattoo experience ever! Clean studio, talented artists, and beautiful results. Will definitely come back!' },
                { initials: 'MJ', name: 'Mike Johnson', studio: 'Denpasar Studio', text: 'Professional service from start to finish. The booking system was easy and the artist understood exactly what I wanted.' },
                { initials: 'EW', name: 'Emma Wilson', studio: 'Uluwatu Studio', text: 'Incredible attention to detail! My fineline tattoo turned out perfect. The artist was patient and very skilled.' },
                { initials: 'TW', name: 'Tom White', studio: 'Canggu Studio', text: 'Absolutely stunning work! The geometric design I got is flawless. The studio atmosphere is welcoming and professional.' },
                { initials: 'SG', name: 'Sophie Green', studio: 'Denpasar Studio', text: 'Perfect experience! The watercolor tattoo exceeded all my expectations. The artist really understood my vision.' },
                { initials: 'JM', name: 'James Moore', studio: 'Uluwatu Studio', text: 'Top notch service! My traditional Balinese tattoo is a masterpiece. Highly skilled artists and great customer service.' },
                { initials: 'OL', name: 'Olivia Lee', studio: 'Canggu Studio', text: 'Incredible talent! My mandala tattoo is so detailed and beautiful. The healing process was smooth too.' }
            ],
            contacts: [
                { type: 'email', icon: 'fas fa-envelope', link: 'mailto:info@inkbali.com', value: 'info@inkbali.com' },
                { type: 'phone', icon: 'fas fa-phone', link: 'tel:+6281234567890', value: '+62 812-3456-7890' },
                { type: 'instagram', icon: 'fab fa-instagram', link: 'https://instagram.com/inkbali', value: '@inkbali' }
            ],
            weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            timeSlots: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
            // English translations only
            translations: {
                'home': 'Home',
                'about-us': 'About Us',
                'portfolio': 'Portfolio',
                'studios': 'Studios',
                'booking': 'Booking',
                'reviews': 'Reviews',
                'contact': 'Contact',
                'tattoo-studio': 'Tattoo Studio',
                'bali': 'BALI',
                'premium-locations': 'Premium tattoo studios in Uluwatu, Canggu, and Denpasar',
                'book-now': 'Book Now',
                'view-portfolio': 'View Portfolio',
                'our-studios': 'Our',
                'artists': 'Artists',
                'our-story': 'Our Story',
                'our-story-text': 'INK Tattoo Studio has been serving Bali with exceptional tattoo artistry since 2015. With three locations across the island, we bring world-class tattoo services to locals and visitors alike.',
                'why-choose-us': 'Why Choose Us',
                'professional-artists': 'Professional & Certified Artists',
                'premium-quality': 'Premium Quality Ink & Equipment',
                'sterile-safe': 'Sterile & Safe Environment',
                'convenient-locations': '3 Convenient Locations',
                'graywash-black-gray': 'Graywash / Black & Gray',
                'small-fineline-script': 'Small - Fineline - Script',
                'color': 'Color',
                'view-more': 'View More',
                'select-branch': 'Select Branch',
                'select-artist': 'Select Artist',
                'select-date-time': 'Select Date & Time',
                'calendar': 'Calendar',
                'available-times': 'Available Times',
                'contact-information': 'Contact Information',
                'full-name': 'Full Name',
                'email': 'Email',
                'whatsapp': 'WhatsApp Number',
                'tattoo-description': 'Tattoo Description',
                'confirm-booking': 'Confirm Booking',
                'summary': 'Summary',
                'testimonials': 'Testimonials',
                'contact-us': 'Us',
                'your-session': 'Your Session'
            }
        };
    },
    computed: {
        availableArtists() {
            if (!this.bookingState.branch) return [];
            return this.artistsData[this.bookingState.branch] || [];
        },
        currentMonthName() {
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return monthNames[new Date().getMonth()];
        },
        currentYear() {
            return new Date().getFullYear();
        },
        calendarDays() {
            const today = new Date();
            const currentMonth = today.getMonth();
            const currentYear = today.getFullYear();
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            
            const days = [];
            
            // Empty cells
            for (let i = 0; i < firstDay; i++) {
                days.push({ day: '', selectable: false });
            }
            
            // Days
            for (let day = 1; day <= daysInMonth; day++) {
                const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const dateObj = new Date(currentYear, currentMonth, day);
                const isPast = dateObj < today;
                const isBooked = this.bookingState.artist && this.bookingState.artist.bookings.includes(dateStr);
                
                days.push({
                    day: day,
                    dateStr: dateStr,
                    selectable: !isPast && !isBooked,
                    isPast: isPast,
                    isBooked: isBooked,
                    isSelected: this.bookingState.date === dateStr
                });
            }
            
            return days;
        },
        bookingSummary() {
            if (!this.bookingState.branch || !this.bookingState.artist || !this.bookingState.date || !this.bookingState.time) {
                return null;
            }
            
            const branchNames = {
                uluwatu: 'Uluwatu Studio',
                canggu: 'Canggu Studio',
                denpasar: 'Denpasar Studio'
            };
            
            const dateObj = new Date(this.bookingState.date);
            const dateFormatted = dateObj.toLocaleDateString('en-US', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
            });
            
            return `
                <div>Studio: ${branchNames[this.bookingState.branch]}</div>
                <div>Artist: ${this.bookingState.artist.name}</div>
                <div>Date: ${dateFormatted}</div>
                <div>Time: ${this.bookingState.time} WITA</div>
            `;
        }
    },
    methods: {
        t(key) {
            return this.translations[key] || key;
        },
        scrollTo(section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        goToSlide(index) {
            this.currentSlide = index;
            this.resetCarousel();
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
        },
        startCarousel() {
            this.carouselInterval = setInterval(() => this.nextSlide(), 5000);
        },
        stopCarousel() {
            if (this.carouselInterval) {
                clearInterval(this.carouselInterval);
                this.carouselInterval = null;
            }
        },
        resetCarousel() {
            this.stopCarousel();
            this.startCarousel();
        },
        selectBranch(branchId) {
            this.bookingState.branch = branchId;
            this.bookingState.artist = null;
            this.bookingState.date = null;
            this.bookingState.time = null;
        },
        selectArtist(artist) {
            if (artist.status === 'busy') return;
            this.bookingState.artist = artist;
            this.bookingState.date = null;
            this.bookingState.time = null;
        },
        getDayClass(day) {
            if (!day.selectable) {
                if (day.isPast) {
                    return 'text-center py-1 rounded text-xs text-gray-600 cursor-not-allowed';
                } else if (day.isBooked) {
                    return 'text-center py-1 rounded text-xs bg-red-900/50 text-gray-400 cursor-not-allowed';
                }
            }
            
            let classes = 'text-center py-1 rounded text-xs cursor-pointer bg-gray-700 hover:bg-red-600 text-white';
            if (day.isSelected) {
                classes += ' bg-red-600 ring-2 ring-red-400';
            }
            return classes;
        },
        selectDate(dateStr) {
            this.bookingState.date = dateStr;
            this.bookingState.time = null;
        },
        selectTime(time) {
            this.bookingState.time = time;
        },
        getStatusClass(status) {
            if (status === 'free') return 'status-free';
            if (status === 'busy') return 'status-busy';
            return 'status-available';
        },
        getStatusIcon(status) {
            if (status === 'free') return 'fa-check-circle';
            if (status === 'busy') return 'fa-times-circle';
            return 'fa-circle';
        },
        getStatusText(status) {
            if (status === 'free') return 'Free Today';
            if (status === 'busy') return 'Busy';
            return 'Available';
        },
        submitBooking() {
            if (!this.bookingState.branch || !this.bookingState.artist || !this.bookingState.date || !this.bookingState.time) {
                alert('Please complete all selections!');
                return;
            }
            
            const branchNames = {
                uluwatu: 'Uluwatu Studio',
                canggu: 'Canggu Studio',
                denpasar: 'Denpasar Studio'
            };
            
            const dateObj = new Date(this.bookingState.date);
            const dateFormatted = dateObj.toLocaleDateString('en-US', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            });
            
            alert(`Booking Successful!\n\n${branchNames[this.bookingState.branch]}\n${this.bookingState.artist.name}\n${dateFormatted}\n${this.bookingState.time} WITA\n\nWe will contact you soon!`);
            
            // Reset form
            this.bookingForm = {
                name: '',
                email: '',
                phone: '',
                description: ''
            };
            this.bookingState = {
                branch: null,
                artist: null,
                date: null,
                time: null
            };
        },
        checkUrlParams() {
            const urlParams = new URLSearchParams(window.location.search);
            const branch = urlParams.get('branch');
            
            if (branch && (branch === 'uluwatu' || branch === 'canggu' || branch === 'denpasar')) {
                setTimeout(() => {
                    this.scrollTo('booking');
                    this.selectBranch(branch);
                }, 500);
            }
        }
    },
    mounted() {
        document.documentElement.lang = 'en';
        this.startCarousel();
        this.checkUrlParams();
    },
    beforeUnmount() {
        this.stopCarousel();
    }
}).mount('#app');


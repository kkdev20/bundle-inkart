// Template 7 - Dashboard Admin Vue.js App
const { createApp } = Vue;

// Artists Data (copied from master/template 7/app.js)
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

// Bookings Data (copied from master/template 7/app.js)
const bookingsData = [
    {
        id: 'BK001',
        customer: 'John Doe',
        email: 'john.doe@email.com',
        phone: '+62 812-3456-7890',
        artistId: 'uluwatu-1',
        artistName: 'Arya Wijaya',
        studio: 'Uluwatu',
        date: '2024-12-15',
        time: '14:00',
        status: 'confirmed',
        description: 'Realistic portrait tattoo'
    },
    {
        id: 'BK002',
        customer: 'Sarah Miller',
        email: 'sarah.miller@email.com',
        phone: '+62 812-3456-7891',
        artistId: 'canggu-1',
        artistName: 'Luna Putri',
        studio: 'Canggu',
        date: '2024-12-15',
        time: '10:00',
        status: 'confirmed',
        description: 'Watercolor design'
    },
    {
        id: 'BK003',
        customer: 'Mike Johnson',
        email: 'mike.johnson@email.com',
        phone: '+62 812-3456-7892',
        artistId: 'denpasar-1',
        artistName: 'Agung Wira',
        studio: 'Denpasar',
        date: '2024-12-16',
        time: '16:00',
        status: 'pending',
        description: '3D realistic tattoo'
    },
    {
        id: 'BK004',
        customer: 'Emma Wilson',
        email: 'emma.wilson@email.com',
        phone: '+62 812-3456-7893',
        artistId: 'canggu-2',
        artistName: 'Rio Santoso',
        studio: 'Canggu',
        date: '2024-12-16',
        time: '11:00',
        status: 'confirmed',
        description: 'Tribal design'
    },
    {
        id: 'BK005',
        customer: 'David Brown',
        email: 'david.brown@email.com',
        phone: '+62 812-3456-7894',
        artistId: 'uluwatu-2',
        artistName: 'Sari Dewi',
        studio: 'Uluwatu',
        date: '2024-12-16',
        time: '13:00',
        status: 'confirmed',
        description: 'Japanese traditional'
    },
    {
        id: 'BK006',
        customer: 'Lisa Anderson',
        email: 'lisa.anderson@email.com',
        phone: '+62 812-3456-7895',
        artistId: 'denpasar-2',
        artistName: 'Kartika Sari',
        studio: 'Denpasar',
        date: '2024-12-16',
        time: '15:00',
        status: 'pending',
        description: 'Mandala design'
    },
    {
        id: 'BK007',
        customer: 'Robert Taylor',
        email: 'robert.taylor@email.com',
        phone: '+62 812-3456-7896',
        artistId: 'canggu-3',
        artistName: 'Dewi Sari',
        studio: 'Canggu',
        date: '2024-12-17',
        time: '10:00',
        status: 'confirmed',
        description: 'Floral tattoo'
    },
    {
        id: 'BK008',
        customer: 'Jennifer Lee',
        email: 'jennifer.lee@email.com',
        phone: '+62 812-3456-7897',
        artistId: 'denpasar-3',
        artistName: 'Wayan Surya',
        studio: 'Denpasar',
        date: '2024-12-17',
        time: '14:00',
        status: 'confirmed',
        description: 'Traditional Balinese'
    },
    {
        id: 'BK009',
        customer: 'Michael Chen',
        email: 'michael.chen@email.com',
        phone: '+62 812-3456-7898',
        artistId: 'uluwatu-1',
        artistName: 'Arya Wijaya',
        studio: 'Uluwatu',
        date: '2024-12-18',
        time: '16:00',
        status: 'confirmed',
        description: 'Portrait tattoo'
    },
    {
        id: 'BK010',
        customer: 'Amanda White',
        email: 'amanda.white@email.com',
        phone: '+62 812-3456-7899',
        artistId: 'denpasar-4',
        artistName: 'Putu Ayu',
        studio: 'Denpasar',
        date: '2024-12-18',
        time: '11:00',
        status: 'pending',
        description: 'Fine line minimalist'
    },
    {
        id: 'BK011',
        customer: 'James Martinez',
        email: 'james.martinez@email.com',
        phone: '+62 812-3456-7900',
        artistId: 'canggu-1',
        artistName: 'Luna Putri',
        studio: 'Canggu',
        date: '2024-12-18',
        time: '13:00',
        status: 'confirmed',
        description: 'Abstract design'
    },
    {
        id: 'BK012',
        customer: 'Patricia Garcia',
        email: 'patricia.garcia@email.com',
        phone: '+62 812-3456-7901',
        artistId: 'denpasar-5',
        artistName: 'Ketut Adi',
        studio: 'Denpasar',
        date: '2024-12-19',
        time: '10:00',
        status: 'confirmed',
        description: 'Neo-traditional color'
    }
];

// Get today's date
const today = new Date();
const todayStr = today.toISOString().split('T')[0];

createApp({
    data() {
        return {
            sidebarOpen: false,
            currentSection: 'dashboard',
            pageTitle: 'Dashboard',
            artistsData: artistsData,
            bookingsData: bookingsData,
            todayStr: todayStr
        };
    },
    computed: {
        stats() {
            const totalBookings = this.bookingsData.length;
            const todayBookings = this.bookingsData.filter(b => b.date === this.todayStr).length;
            
            // Count active artists (not busy)
            let activeArtists = 0;
            for (const branch in this.artistsData) {
                activeArtists += this.artistsData[branch].filter(a => a.status !== 'busy').length;
            }
            
            // Calculate revenue (dummy: $150 per booking)
            const revenue = totalBookings * 150;
            
            return {
                totalBookings,
                todayBookings,
                activeArtists,
                revenue: `${(revenue / 1000).toFixed(1)}K`
            };
        },
        recentBookings() {
            return this.bookingsData
                .sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time))
                .slice(0, 5);
        },
        allBookings() {
            return this.bookingsData
                .sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
        },
        allArtists() {
            let allArtists = [];
            for (const branch in this.artistsData) {
                allArtists = allArtists.concat(this.artistsData[branch]);
            }
            return allArtists;
        }
    },
    methods: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
        },
        showSection(sectionName) {
            this.currentSection = sectionName;
            
            const titles = {
                dashboard: 'Dashboard',
                bookings: 'Bookings',
                artists: 'Artists',
                studios: 'Studios',
                portfolio: 'Portfolio',
                reviews: 'Reviews',
                settings: 'Settings'
            };
            this.pageTitle = titles[sectionName] || 'Dashboard';
            
            // Close mobile menu
            if (window.innerWidth <= 768) {
                this.sidebarOpen = false;
            }
        },
        formatDate(dateStr) {
            const dateObj = new Date(dateStr);
            return dateObj.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
        },
        getStatusClass(status) {
            if (status === 'free') {
                return 'artist-status-free';
            } else if (status === 'busy') {
                return 'artist-status-busy';
            } else {
                return 'artist-status-available';
            }
        },
        getStatusText(status) {
            if (status === 'free') {
                return 'Free Today';
            } else if (status === 'busy') {
                return 'Busy';
            } else {
                return 'Available';
            }
        }
    },
    mounted() {
        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            const sidebar = document.getElementById('sidebar');
            const menuBtn = document.querySelector('[data-menu-btn]');
            
            if (window.innerWidth <= 768) {
                if (sidebar && !sidebar.contains(event.target) && 
                    menuBtn && !menuBtn.contains(event.target) && 
                    this.sidebarOpen) {
                    this.sidebarOpen = false;
                }
            }
        });
    }
}).mount('#app');


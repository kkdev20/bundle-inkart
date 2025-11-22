// Main App for Bundle Index
const { createApp } = Vue;

createApp({
    data() {
        return {
            currentLang: localStorage.getItem('language') || 'id'
        };
    },
    methods: {
        t(key) {
            return LanguageToggle.t(key, this.currentLang, 'bundle');
        },
        toggleLanguage() {
            this.currentLang = this.currentLang === 'id' ? 'en' : 'id';
            localStorage.setItem('language', this.currentLang);
            document.documentElement.lang = this.currentLang === 'id' ? 'id' : 'en';
        }
    },
    mounted() {
        document.documentElement.lang = this.currentLang === 'id' ? 'id' : 'en';
    }
}).mount('#app');


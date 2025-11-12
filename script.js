// DOM yüklendiğinde testi başlat
document.addEventListener('DOMContentLoaded', () => {

    // 100 Soruluk Veritabanı
    // Murat Mutlu tarafından yazılan sorular ve cevap anahtarı kullanılarak oluşturulmuştur.
    const questions = [
        {
            question: "1. Mustafa Kemal Atatürk nerede doğmuştur?",
            options: {
                A: "İstanbul",
                B: "Ankara",
                C: "Selanik",
                D: "İzmir"
            },
            answer: "C" 
        },
        {
            question: "2. Türkiye Cumhuriyeti'nin başkenti neresidir?",
            options: {
                A: "İstanbul",
                B: "Ankara",
                C: "Bursa",
                D: "Konya"
            },
            answer: "B" 
        },
        {
            question: "3. İstiklal Marşı'mızın yazarı kimdir?",
            options: {
                A: "Namık Kemal",
                B: "Ziya Gökalp",
                C: "Mehmet Akif Ersoy",
                D: "Ömer Seyfettin"
            },
            answer: "C" 
        },
        {
            question: "4. İstanbul hangi tarihte fethedilmiştir?",
            options: {
                A: "1071",
                B: "1453",
                C: "1923",
                D: "1299"
            },
            answer: "B" 
        },
        {
            question: "5. Türkiye'nin en yüksek dağı hangisidir?",
            options: {
                A: "Erciyes Dağı",
                B: "Ağrı Dağı",
                C: "Uludağ",
                D: "Kaçkar Dağı"
            },
            answer: "B" 
        },
        {
            question: "6. Türklerin Anadolu'ya giriş kapısı sayılan 1071'deki savaş hangisidir?",
            options: {
                A: "Malazgirt Savaşı",
                B: "Preveze Deniz Savaşı",
                C: "Çanakkale Savaşı",
                D: "Mohaç Meydan Muharebesi"
            },
            answer: "A" 
        },
        {
            question: "7. Türkiye'nin en büyük gölü hangisidir?",
            options: {
                A: "Tuz Gölü",
                B: "Beyşehir Gölü",
                C: "Van Gölü",
                D: "Eğirdir Gölü"
            },
            answer: "C" 
        },
        {
            question: "8. Osmanlı Devleti'nin kurucusu kimdir?",
            options: {
                A: "Osman Bey",
                B: "Orhan Bey",
                C: "Fatih Sultan Mehmet",
                D: "Kanuni Sultan Süleyman"
            },
            answer: "A" 
        },
        {
            question: "9. Cumhuriyet hangi tarihte ilan edilmiştir?",
            options: {
                A: "23 Nisan 1920",
                B: "19 Mayıs 1919",
                C: "30 Ağustos 1922",
                D: "29 Ekim 1923"
            },
            answer: "D" 
        },
        {
            question: "10. Dünyada kaç kıta vardır?",
            options: {
                A: "5",
                B: "6",
                C: "7",
                D: "8"
            },
            answer: "C" 
        },
        {
            question: "11. Atatürk'ü 19 Mayıs 1919'da Samsun'a götüren geminin adı nedir?",
            options: {
                A: "Bandırma",
                B: "Nusret",
                C: "Alemdar",
                D: "Yavuz"
            },
            answer: "A" 
        },
        {
            question: "12. Türkiye'nin kaç coğrafi bölgesi vardır?",
            options: {
                A: "5",
                B: "7",
                C: "9",
                D: "8"
            },
            answer: "B" 
        },
        {
            question: "13. \"Nutuk\" adlı eserin yazarı kimdir?",
            options: {
                A: "İsmet İnönü",
                B: "Mustafa Kemal Atatürk",
                C: "Kazım Karabekir",
                D: "Halide Edib Adıvar"
            },
            answer: "B" 
        },
        {
            question: "14. Tarihte \"Türk\" adıyla kurulan ilk Türk devleti hangisidir?",
            options: {
                A: "Hunlar",
                B: "Uygurlar",
                C: "Göktürkler",
                D: "Selçuklular"
            },
            answer: "C" 
        },
        {
            question: "15. Çanakkale Deniz Zaferi hangi tarihte kutlanır?",
            options: {
                A: "18 Mart",
                B: "23 Nisan",
                C: "19 Mayıs",
                D: "30 Ağustos"
            },
            answer: "A" 
        },
        {
            question: "16. Dünyanın en büyük okyanusu hangisidir?",
            options: {
                A: "Atlas Okyanusu",
                B: "Hint Okyanusu",
                C: "Arktik Okyanusu",
                D: "Pasifik (Büyük) Okyanus"
            },
            answer: "D" 
        },
        {
            question: "17. Türkiye Büyük Millet Meclisi (TBMM) hangi tarihte açılmıştır?",
            options: {
                A: "29 Ekim 1923",
                B: "19 Mayıs 1919",
                C: "23 Nisan 1920",
                D: "30 Ağustos 1922"
            },
            answer: "C" 
        },
        {
            question: "18. Aşağıdakilerden hangisi Türkiye'nin batıdaki komşularından biridir?",
            options: {
                A: "İran",
                B: "Suriye",
                C: "Yunanistan",
                D: "Gürcistan"
            },
            answer: "C" 
        },
        {
            question: "19. \"Ordular, ilk hedefiniz Akdeniz'dir. İleri!\" emri hangi savaşta verilmiştir?",
            options: {
                A: "Çanakkale Savaşı",
                B: "Sakarya Meydan Muharebesi",
                C: "I. İnönü Savaşı",
                D: "Büyük Taarruz"
            },
            answer: "D" 
        },
        {
            question: "20. Mimar Sinan'ın \"Ustalık eserim\" dediği cami hangisidir?",
            options: {
                A: "Sultanahmet Camii",
                B: "Süleymaniye Camii",
                C: "Selimiye Camii",
                D: "Şehzade Camii"
            },
            answer: "C" 
        },
        {
            question: "21. Manda ve himaye fikri, ilk kez kesin olarak nerede reddedilmiştir?",
            options: {
                A: "Amasya Genelgesi",
                B: "Erzurum Kongresi",
                C: "Sivas Kongresi",
                D: "Havza Genelgesi"
            },
            answer: "B" 
        },
        {
            question: "22. 2015 yılında Nobel Kimya Ödülü'nü kazanan Türk bilim insanı kimdir?",
            options: {
                A: "Aziz Sancar",
                B: "Oktay Sinanoğlu",
                C: "Cahit Arf",
                D: "Fuat Sezgin"
            },
            answer: "A" 
        },
        {
            question: "23. Anadolu Selçuklu Devleti'nin başkenti olarak uzun yıllar hizmet etmiş şehir hangisidir?",
            options: {
                A: "Sivas",
                B: "Erzurum",
                C: "Kayseri",
                D: "Konya"
            },
            answer: "D" 
        },
        {
            question: "24. \"İnce Memed\" adlı dünyaca ünlü roman serisinin yazarı kimdir?",
            options: {
                A: "Orhan Pamuk",
                B: "Yaşar Kemal",
                C: "Sabahattin Ali",
                D: "Nazım Hikmet"
            },
            answer: "B" 
        },
        {
            question: "25. \"Çığlık\" (The Scream) adlı ünlü tablo, hangi ressama aittir?",
            options: {
                A: "Vincent van Gogh",
                B: "Pablo Picasso",
                C: "Edvard Munch",
                D: "Salvador Dalí"
            },
            answer: "C" 
        },
        {
            question: "26. Osmanlı Devleti'nde Batı tarzında askeri ıslahatlar yapan ilk padişah kimdir?",
            options: {
                A: "III. Selim",
                B: "II. Mahmut",
                C: "I. Mahmut",
                D: "I. Abdülhamid"
            },
            answer: "A" 
        },
        {
            question: "27. Piri Reis'in, dünya haritasını da içeren ünlü denizcilik kitabının adı nedir?",
            options: {
                A: "Kitab-ı Bahriye",
                B: "Cihannüma",
                C: "Keşfü'z-Zünun",
                D: "Divanü Lügati't-Türk"
            },
            answer: "A" 
        },
        {
            question: "28. Güneş sistemimizdeki en büyük gezegen hangisidir?",
            options: {
                A: "Mars",
                B: "Satürn",
                C: "Jüpiter",

// DOM yüklendiğinde testi başlat
document.addEventListener('DOMContentLoaded', () => {

    // 100 Soruluk Veritabanı
    // Kaynak dosyadaki sorular  ve cevap anahtarı  kullanılarak oluşturulmuştur.
    const questions = [
        {
            question: "1. Mustafa Kemal Atatürk nerede doğmuştur? [cite: 4]",
            options: {
                A: "İstanbul [cite: 5]",
                B: "Ankara [cite: 6]",
                C: "Selanik [cite: 7]",
                D: "İzmir [cite: 8]"
            },
            answer: "C" // [cite: 505]
        },
        {
            question: "2. Türkiye Cumhuriyeti'nin başkenti neresidir? [cite: 9]",
            options: {
                A: "İstanbul [cite: 10]",
                B: "Ankara [cite: 11]",
                C: "Bursa [cite: 12]",
                D: "Konya [cite: 13]"
            },
            answer: "B" // [cite: 506]
        },
        {
            question: "3. İstiklal Marşı'mızın yazarı kimdir? [cite: 14]",
            options: {
                A: "Namık Kemal [cite: 15]",
                B: "Ziya Gökalp [cite: 16]",
                C: "Mehmet Akif Ersoy [cite: 17]",
                D: "Ömer Seyfettin [cite: 18]"
            },
            answer: "C" // [cite: 507]
        },
        {
            question: "4. İstanbul hangi tarihte fethedilmiştir? [cite: 19]",
            options: {
                A: "1071 [cite: 20]",
                B: "1453 [cite: 21]",
                C: "1923 [cite: 22]",
                D: "1299 [cite: 23]"
            },
            answer: "B" // [cite: 508]
        },
        {
            question: "5. Türkiye'nin en yüksek dağı hangisidir? [cite: 24]",
            options: {
                A: "Erciyes Dağı [cite: 25]",
                B: "Ağrı Dağı [cite: 26]",
                C: "Uludağ [cite: 27]",
                D: "Kaçkar Dağı [cite: 28]"
            },
            answer: "B" // [cite: 509]
        },
        {
            question: "6. Türklerin Anadolu'ya giriş kapısı sayılan 1071'deki savaş hangisidir? [cite: 29]",
            options: {
                A: "Malazgirt Savaşı [cite: 30]",
                B: "Preveze Deniz Savaşı [cite: 31]",
                C: "Çanakkale Savaşı [cite: 32]",
                D: "Mohaç Meydan Muharebesi [cite: 33]"
            },
            answer: "A" // [cite: 510]
        },
        {
            question: "7. Türkiye'nin en büyük gölü hangisidir? [cite: 34]",
            options: {
                A: "Tuz Gölü [cite: 35]",
                B: "Beyşehir Gölü [cite: 36]",
                C: "Van Gölü [cite: 37]",
                D: "Eğirdir Gölü [cite: 38]"
            },
            answer: "C" // [cite: 511]
        },
        {
            question: "8. Osmanlı Devleti'nin kurucusu kimdir? [cite: 39]",
            options: {
                A: "Osman Bey [cite: 40]",
                B: "Orhan Bey [cite: 41]",
                C: "Fatih Sultan Mehmet [cite: 42]",
                D: "Kanuni Sultan Süleyman [cite: 43]"
            },
            answer: "A" // [cite: 512]
        },
        {
            question: "9. Cumhuriyet hangi tarihte ilan edilmiştir? [cite: 44]",
            options: {
                A: "23 Nisan 1920 [cite: 45]",
                B: "19 Mayıs 1919 [cite: 46]",
                C: "30 Ağustos 1922 [cite: 47]",
                D: "29 Ekim 1923 [cite: 48]"
            },
            answer: "D" // [cite: 513]
        },
        {
            question: "10. Dünyada kaç kıta vardır? [cite: 49]",
            options: {
                A: "5 [cite: 50]",
                B: "6 [cite: 51]",
                C: "7 [cite: 52]",
                D: "8 [cite: 53]"
            },
            answer: "C" // [cite: 514]
        },
        {
            question: "11. Atatürk'ü 19 Mayıs 1919'da Samsun'a götüren geminin adı nedir? [cite: 54]",
            options: {
                A: "Bandırma [cite: 55]",
                B: "Nusret [cite: 56]",
                C: "Alemdar [cite: 57]",
                D: "Yavuz [cite: 58]"
            },
            answer: "A" // [cite: 515]
        },
        {
            question: "12. Türkiye'nin kaç coğrafi bölgesi vardır? [cite: 59]",
            options: {
                A: "5 [cite: 60]",
                B: "7 [cite: 61]",
                C: "9 [cite: 62]",
                D: "8 [cite: 63]"
            },
            answer: "B" // [cite: 516]
        },
        {
            question: "13. \"Nutuk\" adlı eserin yazarı kimdir? [cite: 64]",
            options: {
                A: "İsmet İnönü [cite: 65]",
                B: "Mustafa Kemal Atatürk [cite: 66]",
                C: "Kazım Karabekir [cite: 67]",
                D: "Halide Edib Adıvar [cite: 68]"
            },
            answer: "B" // [cite: 517]
        },
        {
            question: "14. Tarihte \"Türk\" adıyla kurulan ilk Türk devleti hangisidir? [cite: 69]",
            options: {
                A: "Hunlar [cite: 70]",
                B: "Uygurlar [cite: 71]",
                C: "Göktürkler [cite: 72]",
                D: "Selçuklular [cite: 73]"
            },
            answer: "C" // [cite: 518]
        },
        {
            question: "15. Çanakkale Deniz Zaferi hangi tarihte kutlanır? [cite: 74]",
            options: {
                A: "18 Mart [cite: 75]",
                B: "23 Nisan [cite: 76]",
                C: "19 Mayıs [cite: 77]",
                D: "30 Ağustos [cite: 78]"
            },
            answer: "A" // [cite: 519]
        },
        {
            question: "16. Dünyanın en büyük okyanusu hangisidir? [cite: 79]",
            options: {
                A: "Atlas Okyanusu [cite: 80]",
                B: "Hint Okyanusu [cite: 81]",
                C: "Arktik Okyanusu [cite: 82]",
                D: "Pasifik (Büyük) Okyanus [cite: 83]"
            },
            answer: "D" // [cite: 520]
        },
        {
            question: "17. Türkiye Büyük Millet Meclisi (TBMM) hangi tarihte açılmıştır? [cite: 84]",
            options: {
                A: "29 Ekim 1923 [cite: 85]",
                B: "19 Mayıs 1919 [cite: 86]",
                C: "23 Nisan 1920 [cite: 87]",
                D: "30 Ağustos 1922 [cite: 88]"
            },
            answer: "C" // [cite: 521]
        },
        {
            question: "18. Aşağıdakilerden hangisi Türkiye'nin batıdaki komşularından biridir? [cite: 89]",
            options: {
                A: "İran [cite: 90]",
                B: "Suriye [cite: 91]",
                C: "Yunanistan [cite: 92]",
                D: "Gürcistan [cite: 93]"
            },
            answer: "C" // [cite: 522]
        },
        {
            question: "19. \"Ordular, ilk hedefiniz Akdeniz'dir. İleri!\" emri hangi savaşta verilmiştir? [cite: 94]",
            options: {
                A: "Çanakkale Savaşı [cite: 95]",
                B: "Sakarya Meydan Muharebesi [cite: 96]",
                C: "I. İnönü Savaşı [cite: 97]",
                D: "Büyük Taarruz [cite: 98]"
            },
            answer: "D" // [cite: 523]
        },
        {
            question: "20. Mimar Sinan'ın \"Ustalık eserim\" dediği cami hangisidir? [cite: 99]",
            options: {
                A: "Sultanahmet Camii [cite: 100]",
                B: "Süleymaniye Camii [cite: 101]",
                C: "Selimiye Camii [cite: 102]",
                D: "Şehzade Camii [cite: 103]"
            },
            answer: "C" // [cite: 524]
        },
        {
            question: "21. Manda ve himaye fikri, ilk kez kesin olarak nerede reddedilmiştir? [cite: 104]",
            options: {
                A: "Amasya Genelgesi [cite: 105]",
                B: "Erzurum Kongresi [cite: 106]",
                C: "Sivas Kongresi [cite: 107]",
                D: "Havza Genelgesi [cite: 108]"
            },
            answer: "B" // [cite: 525]
        },
        {
            question: "22. 2015 yılında Nobel Kimya Ödülü'nü kazanan Türk bilim insanı kimdir? [cite: 109]",
            options: {
                A: "Aziz Sancar [cite: 110]",
                B: "Oktay Sinanoğlu [cite: 111]",
                C: "Cahit Arf [cite: 112]",
                D: "Fuat Sezgin [cite: 113]"
            },
            answer: "A" // [cite: 526]
        },
        {
            question: "23. Anadolu Selçuklu Devleti'nin başkenti olarak uzun yıllar hizmet etmiş şehir hangisidir? [cite: 114]",
            options: {
                A: "Sivas [cite: 115]",
                B: "Erzurum [cite: 116]",
                C: "Kayseri [cite: 117]",
                D: "Konya [cite: 118]"
            },
            answer: "D" // [cite: 527]
        },
        {
            question: "24. \"İnce Memed\" adlı dünyaca ünlü roman serisinin yazarı kimdir? [cite: 119]",
            options: {
                A: "Orhan Pamuk [cite: 120]",
                B: "Yaşar Kemal [cite: 121]",
                C: "Sabahattin Ali [cite: 122]",
                D: "Nazım Hikmet [cite: 123]"
            },
            answer: "B" // [cite: 528]
        },
        {
            question: "25. \"Çığlık\" (The Scream) adlı ünlü tablo, hangi ressama aittir? [cite: 124]",
            options: {
                A: "Vincent van Gogh [cite: 125]",
                B: "Pablo Picasso [cite: 126]",
                C: "Edvard Munch [cite: 127]",
                D: "Salvador Dalí [cite: 128]"
            },
            answer: "C" // [cite: 529]
        },
        {
            question: "26. Osmanlı Devleti'nde Batı tarzında askeri ıslahatlar yapan ilk padişah kimdir? [cite: 129]",
            options: {
                A: "III. Selim [cite: 130]",
                B: "II. Mahmut [cite: 131]",
                C: "I. Mahmut [cite: 132]",
                D: "I. Abdülhamid [cite: 133]"
            },
            answer: "A" // [cite: 530]
        },
        {
            question: "27. Piri Reis'in, dünya haritasını da içeren ünlü denizcilik kitabının adı nedir? [cite: 134]",
            options: {
                A: "Kitab-ı Bahriye [cite: 135]",
                B: "Cihannüma [cite: 136]",
                C: "Keşfü'z-Zünun [cite: 137]",
                D: "Divanü Lügati't-Türk [cite: 138]"
            },
            answer: "A" // Yanlış cevap anahtarı düzeltmesi, 27. cevap A olmalı (A=Kitab-ı Bahriye) - Orijinal: C [cite: 531] -> Düzeltildi
        },
        {
            question: "28. Güneş sistemimizdeki en büyük gezegen hangisidir? [cite: 139]",
            options: {
                A: "Mars [cite: 140]",
                B: "Satürn [cite: 141]",
                C: "Jüpiter [cite: 142]",
                D: "Dünya [cite: 143]"
            },
            answer: "C" // [cite: 532]
        },
        {
            question: "29. Maniheizm dinini kabul ederek yerleşik hayata geçen ilk Türk devleti hangisidir? [cite: 144]",
            options: {
                A: "Hunlar [cite: 145]",
                B: "Göktürkler [cite: 146]",
                C: "Hazarlar [cite: 147]",
                D: "Uygurlar [cite: 148]"
            },
            answer: "D" // [cite: 533]
        },
        {
            question: "30. Zeugma Antik Kenti ve dünyaca ünlü mozaikleri hangi ilimizin sınırları içindedir? [cite: 149]",
            options: {
                A: "Şanlıurfa [cite: 150]",
                B: "Adıyaman [cite: 151]",
                C: "Mardin [cite: 152]",
                D: "Gaziantep [cite: 153]"
            },
            answer: "D" // Yanlış cevap anahtarı düzeltmesi, 30. cevap D olmalı (D=Gaziantep) - Orijinal: B [cite: 534] -> Düzeltildi
        },
        {
            question: "31. Atatürk'ün 6 gün süren ve 1919-1927 arasını anlatan ünlü eseri Nutuk, hangi yıl okunmuştur? [cite: 154]",
            options: {
                A: "1923 [cite: 155]",
                B: "1927 [cite: 156]",
                C: "1933 [cite: 157]",
                D: "1938 [cite: 158]"
            },
            answer: "B" // [cite: 535]
        },
        {
            question: "32. \"Vatan Şairi\" olarak bilinen ünlü Tanzimat dönemi yazarımız kimdir? [cite: 159]",
            options: {
                A: "Ziya Paşa [cite: 160]",
                B: "Namık Kemal [cite: 161]",
                C: "İbrahim Şinasi [cite: 162]",
                D: "Ahmet Mithat Efendi [cite: 163]"
            },
            answer: "B" // Yanlış cevap anahtarı düzeltmesi, 32. cevap B olmalı (B=Namık Kemal) - Orijinal: C [cite: 536] -> Düzeltildi
        },
        {
            question: "33. Osmanlı Devleti'nin ilk anayasası olan Kanun-i Esasi hangi yıl ilan edilmiştir? [cite: 164]",
            options: {
                A: "1839 [cite: 165]",
                B: "1856 [cite: 166]",
                C: "1876 [cite: 167]",
                D: "1908 [cite: 168]"
            },
            answer: "C" // [cite: 537]
        },
        {
            question: "34. Dünyanın yedi harikasından biri olan Artemis Tapınağı, günümüzde hangi ilimizin sınırları içerisindedir? [cite: 169]",
            options: {
                A: "Aydın [cite: 170]",
                B: "Muğla [cite: 171]",
                C: "İzmir [cite: 172]",
                D: "Çanakkale [cite: 173]"
            },
            answer: "C" // [cite: 538]
        },
        {
            question: "35. Preveze Deniz Zaferi'nin (1538) komutanı olan ünlü Osmanlı denizcisi kimdir? [cite: 174]",
            options: {
                A: "Turgut Reis [cite: 175]",
                B: "Piri Reis [cite: 176]",
                C: "Barbaros Hayreddin Paşa [cite: 177]",
                D: "Kılıç Ali Paşa [cite: 178]"
            },
            answer: "C" // [cite: 539]
        },
        {
            question: "36. \"Ben size taarruzu değil, ölmeyi emrediyorum!\" sözü, Mustafa Kemal tarafından hangi savaş sırasında söylenmiştir? [cite: 179]",
            options: {
                A: "Sakarya Meydan Muharebesi [cite: 180]",
                B: "Büyük Taarruz [cite: 181]",
                C: "Çanakkale Savaşı [cite: 182]",
                D: "I. İnönü Savaşı [cite: 183]"
            },
            answer: "C" // Yanlış cevap anahtarı düzeltmesi, 36. cevap C olmalı (C=Çanakkale) - Orijinal: D [cite: 540] -> Düzeltildi
        },
        {
            question: "37. Türkiye'nin UNESCO Dünya Mirası Listesi'ne giren ilk kültürel varlığı aşağıdakilerden hangisidir? [cite: 184]",
            options: {
                A: "Pamukkale-Hierapolis [cite: 185]",
                B: "Göreme Milli Parkı (Kapadokya) [cite: 186]",
                C: "İstanbul'un Tarihi Alanları [cite: 187]",
                D: "Divriği Ulu Camii ve Darüşşifası [cite: 188]"
            },
            answer: "D" // [cite: 541]
        },
        {
            question: "38. Sadece kendi sınırlarımız içinde doğup yine kendi sınırlarımız içinde denize dökülen en uzun nehrimiz hangisidir? [cite: 189]",
            options: {
                A: "Fırat [cite: 190]",
                B: "Dicle [cite: 191]",
                C: "Kızılırmak [cite: 192]",
                D: "Yeşilırmak [cite: 193]"
            },
            answer: "C" // [cite: 542]
        },
        {
            question: "39. Lozan Barış Antlaşması'nda Türk heyetine başkanlık eden devlet adamı kimdir? [cite: 194]",
            options: {
                A: "Mustafa Kemal Atatürk [cite: 195]",
                B: "İsmet İnönü [cite: 196]",
                C: "Rauf Orbay [cite: 197]",
                D: "Fevzi Çakmak [cite: 198]"
            },
            answer: "B" // [cite: 543]
        },
        {
            question: "40. 93 Harbi (1877-78 Osmanlı-Rus Savaşı) sırasında Erzurum'daki Aziziye Tabyası'nın savunmasında destanlaşan kadın kahramanımız kimdir? [cite: 199]",
            options: {
                A: "Şerife Bacı [cite: 200]",
                B: "Halide Edib Adıvar [cite: 201]",
                C: "Nene Hatun [cite: 202]",
                D: "Kara Fatma [cite: 203]"
            },
            answer: "C" // [cite: 544]
        },
        {
            question: "41. Nobel Edebiyat Ödülü'nü kazanan ilk ve tek Türk yazarımız kimdir? [cite: 204]",
            options: {
                A: "Yaşar Kemal [cite: 205]",
                B: "Aziz Nesin [cite: 206]",
                C: "Orhan Pamuk [cite: 207]",
                D: "Elif Şafak [cite: 208]"
            },
            answer: "C" // [cite: 545]
        },
        {
            question: "42. Fransa ile İngiltere'yi deniz altından birbirine bağlayan tünelin adı nedir? [cite: 209]",
            options: {
                A: "Gotthard Tüneli [cite: 210]",
                B: "Manş Tüneli [cite: 211]",
                C: "Mont Blanc Tüneli [cite: 212]",
                D: "Cebelitarık Tüneli [cite: 213]"
            },
            answer: "B" // [cite: 546]
        },
        {
            question: "43. Türkiye'nin en fazla ülkeyle sınırı olan ili hangisidir? [cite: 214]",
            options: {
                A: "Edirne [cite: 215]",
                B: "Iğdır [cite: 216]",
                C: "Hakkari [cite: 217]",
                D: "Ağrı [cite: 218]"
            },
            answer: "B" // [cite: 547]
        },
        {
            question: "44. \"Mona Lisa\" tablosu günümüzde hangi müzede sergilenmektedir? [cite: 219]",
            options: {
                A: "British Museum (Londra) [cite: 220]",
                B: "Prado Müzesi (Madrid) [cite: 221]",
                C: "Louvre Müzesi (Paris) [cite: 222]",
                D: "Uffizi Galerisi (Floransa) [cite: 223]"
            },
            answer: "C" // [cite: 548]
        },
        {
            question: "45. İlk Türk denizcisi olarak kabul edilen ve İzmir civarında bir beylik kuran kişi kimdir? [cite: 224]",
            options: {
                A: "Çaka Bey [cite: 225]",
                B: "Umur Bey [cite: 226]",
                C: "Ertuğrul Gazi [cite: 227]",
                D: "Danişmend Gazi [cite: 228]"
            },
            answer: "A" // [cite: 549]
        },
        {
            question: "46. Misak-ı Milli kararları nerede alınmıştır? [cite: 229]",
            options: {
                A: "Sivas Kongresi [cite: 230]",
                B: "Erzurum Kongresi [cite: 231]",
                C: "Amasya Genelgesi [cite: 232]",
                D: "Son Osmanlı Mebusan Meclisi [cite: 233]"
            },
            answer: "D" // [cite: 550]
        },
        {
            question: "47. Onuncu Yıl Nutku, Cumhuriyet'in kaçıncı yılı kutlamalarında okunmuştur ve bu hangi yıla denk gelir? [cite: 234]",
            options: {
                A: "1923 [cite: 235]",
                B: "1930 [cite: 236]",
                C: "1933 [cite: 237]",
                D: "1938 [cite: 238]"
            },
            answer: "C" // [cite: 551]
        },
        {
            question: "48. Türk tarihinde \"Lale Devri\" olarak bilinen dönem hangi padişah zamanında yaşanmıştır? [cite: 239]",
            options: {
                A: "III. Ahmed [cite: 240]",
                B: "I. Mahmud [cite: 241]",
                C: "II. Osman [cite: 242]",
                D: "IV. Murad [cite: 243]"
            },
            answer: "A" // [cite: 552]
        },
        {
            question: "49. \"Kendi Gök Kubbemiz\" ve \"Eski Şiirin Rüzgârıyla\" adlı eserler hangi ünlü şairimize aittir? [cite: 244]",
            options: {
                A: "Cahit Sıtkı Tarancı [cite: 245]",
                B: "Yahya Kemal Beyatlı [cite: 246]",
                C: "Necip Fazıl Kısakürek [cite: 247]",
                D: "Orhan Veli Kanık [cite: 248]"
            },
            answer: "B" // [cite: 553]
        },
        {
            question: "50. \"Tımar\" sistemini Osmanlı Devleti'nde ilk kez uygulayan padişah kimdir? [cite: 249]",
            options: {
                A: "Osman Bey [cite: 250]",
                B: "I. Murad [cite: 251]",
                C: "Fatih Sultan Mehmet [cite: 252]",
                D: "Yavuz Sultan Selim [cite: 253]"
            },
            answer: "B" // [cite: 554]
        },
        {
            question: "51. Osmanlı Devleti'nde ilk matbaayı kuran ve \"Vankulu Lügatı\"nı basan kişi kimdir? [cite: 254]",
            options: {
                A: "Katip Çelebi [cite: 255]",
                B: "Evliya Çelebi [cite: 256]",
                C: "İbrahim Müteferrika [cite: 257]",
                D: "Ali Kuşçu [cite: 258]"
            },
            answer: "C" // [cite: 555]
        },
        {
            question: "52. Osmanlı Devleti'nin Batı'da ilk kez büyük çapta toprak kaybettiği antlaşma hangisidir? [cite: 259]",
            options: {
                A: "Karlofça Antlaşması [cite: 260]",
                B: "Yaş Antlaşması [cite: 261]",
                C: "Bucaş Antlaşması [cite: 262]",
                D: "Küçük Kaynarca Antlaşması [cite: 263]"
            },
            answer: "A" // [cite: 556]
        },
        {
            question: "53. Mısır'ın fethi (Mercidabık ve Ridaniye Savaşları) sonucu \"Halife\" unvanını alan ilk Osmanlı padişahı kimdir? [cite: 264]",
            options: {
                A: "Fatih Sultan Mehmet [cite: 265]",
                B: "II. Bayezid [cite: 266]",
                C: "Yavuz Sultan Selim [cite: 267]",
                D: "Kanuni Sultan Süleyman [cite: 268]"
            },
            answer: "C" // [cite: 557]
        },
        {
            question: "54. Kurulduğu dönemde (1940) Milli Eğitim Bakanı olan ve Köy Enstitüleri'nin kurulmasına öncülük eden devlet adamı kimdir? [cite: 269]",
            options: {
                A: "Hasan Âli Yücel [cite: 270]",
                B: "Reşat Nuri Güntekin [cite: 271]",
                C: "Celal Bayar [cite: 272]",
                D: "Şükrü Saraçoğlu [cite: 273]"
            },
            answer: "A" // [cite: 558]
        },
        {
            question: "55. Kurtuluş Savaşı sırasında Doğu Cephesi komutanı olan ve \"Yetimlerin Babası\" olarak bilinen komutan kimdir? [cite: 274]",
            options: {
                A: "Fevzi Çakmak [cite: 275]",
                B: "Kazım Karabekir [cite: 276]",
                C: "Ali Fuat Cebesoy [cite: 277]",
                D: "Rauf Orbay [cite: 278]"
            },
            answer: "B" // [cite: 559]
        },
        {
            question: "56. Kıbrıs Barış Harekatı hangi yıl gerçekleştirilmiştir? [cite: 279]",
            options: {
                A: "1960 [cite: 280]",
                B: "1971 [cite: 281]",
                C: "1974 [cite: 282]",
                D: "1980 [cite: 283]"
            },
            answer: "C" // [cite: 560]
        },
        {
            question: "57. Hatay Devleti, hangi yıl yapılan bir referandumla Türkiye Cumhuriyeti'ne katılmıştır? [cite: 284]",
            options: {
                A: "1923 [cite: 285]",
                B: "1936 [cite: 286]",
                C: "1939 [cite: 287]",
                D: "1945 [cite: 288]"
            },
            answer: "C" // [cite: 561]
        },
        {
            question: "58. \"Kuyucaklı Yusuf\" ve \"Kürk Mantolu Madonna\" gibi önemli romanların yazarı kimdir? [cite: 289]",
            options: {
                A: "Sabahattin Ali [cite: 290]",
                B: "Peyami Safa [cite: 291]",
                C: "Reşat Nuri Güntekin [cite: 292]",
                D: "Halit Ziya Uşaklıgil [cite: 293]"
            },
            answer: "A" // [cite: 562]
        },
        {
            question: "59. Karagöz ve Hacivat, hangi geleneksel Türk tiyatro türünün baş karakterleridir? [cite: 294]",
            options: {
                A: "Meddah [cite: 295]",
                B: "Orta Oyunu [cite: 296]",
                C: "Gölge Oyunu [cite: 297]",
                D: "Köy Seyirlik Oyunu [cite: 298]"
            },
            answer: "C" // [cite: 563]
        },
        {
            question: "60. \"Memleketimden İnsan Manzaraları\" ve \"Kuvâyi Milliye Destanı\" hangi ünlü şairimize aittir? [cite: 299]",
            options: {
                A: "Attilâ İlhan [cite: 300]",
                B: "Orhan Veli Kanık [cite: 301]",
                C: "Cemal Süreya [cite: 302]",
                D: "Nâzım Hikmet [cite: 303]"
            },
            answer: "D" // [cite: 564]
        },
        {
            question: "61. Bilim, sanat ve edebiyatta \"yeniden doğuş\" anlamına gelen Rönesans, ilk olarak hangi ülkede başlamıştır? [cite: 304]",
            options: {
                A: "Fransa [cite: 305]",
                B: "İtalya [cite: 306]",
                C: "İspanya [cite: 307]",
                D: "Almanya [cite: 308]"
            },
            answer: "B" // [cite: 565]
        },
        {
            question: "62. 1789 yılında \"Eşitlik, Özgürlük, Kardeşlik\" sloganlarıyla başlayan ve mutlak monarşiyi yıkan olay hangisidir? [cite: 309]",
            options: {
                A: "Fransız İhtilali [cite: 310]",
                B: "1848 İhtilalleri [cite: 311]",
                C: "Sanayi Devrimi [cite: 312]",
                D: "Viyana Kongresi [cite: 313]"
            },
            answer: "A" // [cite: 566]
        },
        {
            question: "63. II. Dünya Savaşı'ndan sonra ABD ve Sovyetler Birliği liderliğindeki iki blok arasında yaşanan siyasi ve askeri gerginlik dönemine ne ad verilir? [cite: 314]",
            options: {
                A: "Soğuk Savaş [cite: 315]",
                B: "Detant (Yumuşama) [cite: 316]",
                C: "Restorasyon Dönemi [cite: 317]",
                D: "Keşifler Çağı [cite: 318]"
            },
            answer: "A" // [cite: 567]
        },
        {
            question: "64. Modern romanın ilk örneği sayılan \"Don Kişot\" (Don Quixote) adlı eserin yazarı kimdir? [cite: 319]",
            options: {
                A: "William Shakespeare [cite: 320]",
                B: "Miguel de Cervantes [cite: 321]",
                C: "Victor Hugo [cite: 322]",
                D: "Dostoyevski [cite: 323]"
            },
            answer: "B" // [cite: 568]
        },
        {
            question: "65. Roma'daki Sistina Şapeli'nin tavanına \"Adem'in Yaratılışı\" gibi ünlü freskleri yapan Rönesans sanatçısı kimdir? [cite: 324]",
            options: {
                A: "Leonardo da Vinci [cite: 325]",
                B: "Michelangelo [cite: 326]",
                C: "Rafael [cite: 327]",
                D: "Donatello [cite: 328]"
            },
            answer: "B" // [cite: 569]
        },
        {
            question: "66. \"Tarihin sıfır noktası\" olarak bilinen ve bilinen en eski tapınak kalıntılarını barındıran Göbeklitepe, hangi ilimizdedir? [cite: 329]",
            options: {
                A: "Mardin [cite: 330]",
                B: "Diyarbakır [cite: 331]",
                C: "Adıyaman [cite: 332]",
                D: "Şanlıurfa [cite: 333]"
            },
            answer: "D" // [cite: 570]
        },
        {
            question: "67. Türk tarihinin bilinen ilk yazılı kaynakları olan Orhun Abideleri (Göktürk Yazıtları) hangi alfabe ile yazılmıştır? [cite: 334]",
            options: {
                A: "Uygur Alfabesi [cite: 335]",
                B: "Arap Alfabesi [cite: 336]",
                C: "Göktürk (Runik) Alfabesi [cite: 337]",
                D: "Latin Alfabesi [cite: 338]"
            },
            answer: "C" // [cite: 571]
        },
        {
            question: "68. Dünyanın en yüksek dağı olan Everest Tepesi, hangi sıradağlar üzerinde yer alır? [cite: 339]",
            options: {
                A: "Himalayalar [cite: 340]",
                B: "Alpler [cite: 341]",
                C: "And Dağları [cite: 342]",
                D: "Kayalık Dağlar [cite: 343]"
            },
            answer: "A" // [cite: 572]
        },
        {
            question: "69. Türkiye'nin en büyük hidroelektrik santrali olan ve Fırat Nehri üzerinde bulunan baraj hangisidir? [cite: 344]",
            options: {
                A: "Keban Barajı [cite: 345]",
                B: "Atatürk Barajı [cite: 346]",
                C: "Karakaya Barajı [cite: 347]",
                D: "Ilısu Barajı [cite: 348]"
            },
            answer: "B" // [cite: 573]
        },
        {
            question: "70. Tarihte \"Bereketli Hilal\" olarak adlandırılan, tarımın ilk başladığı verimli topraklar hangi bölgeyi tanımlar? [cite: 349]",
            options: {
                A: "Mezopotamya [cite: 350]",
                B: "İndus Vadisi [cite: 351]",
                C: "Mısır (Nil Deltası) [cite: 352]",
                D: "Orta Asya [cite: 353]"
            },
            answer: "A" // [cite: 574]
        },
        {
            question: "71. Osmanlı Devleti'nde anayasal monarşiye geçişin ilk adımı sayılan ve 1839'da ilan edilen ferman hangisidir? [cite: 354]",
            options: {
                A: "Islahat Fermanı [cite: 355]",
                B: "Tanzimat Fermanı [cite: 356]",
                C: "Sened-i İttifak [cite: 357]",
                D: "Kanun-i Esasi [cite: 358]"
            },
            answer: "B" // [cite: 575]
        },
        {
            question: "72. Osmanlı Devleti'nin Avrupa'daki ilerleyişinin durduğu ve büyük bir bozguna uğradığı 1683'teki kuşatma hangisidir? [cite: 359]",
            options: {
                A: "I. Viyana Kuşatması [cite: 360]",
                B: "II. Viyana Kuşatması [cite: 361]",
                C: "Zigetvar Seferi [cite: 362]",
                D: "Belgrad Kuşatması [cite: 363]"
            },
            answer: "B" // [cite: 576]
        },
        {
            question: "73. Canlıların kalıtsal materyali olan ve \"Deoksiribo Nükleik Asit\" olarak açılan molekülün kısaltması nedir? [cite: 364]",
            options: {
                A: "RNA [cite: 365]",
                B: "ATP [cite: 366]",
                C: "DNA [cite: 367]",
                D: "GDO [cite: 368]"
            },
            answer: "C" // [cite: 577]
        },
        {
            question: "74. Tarihte Musevilik dinini kabul eden tek Türk devleti aşağıdakilerden hangisidir? [cite: 369]",
            options: {
                A: "Avarlar [cite: 370]",
                B: "Peçenekler [cite: 371]",
                C: "Hazarlar [cite: 372]",
                D: "Kıpçaklar [cite: 373]"
            },
            answer: "C" // [cite: 578]
        },
        {
            question: "75. Geceleri yön bulmak için kullanılan ve daima kuzeyi gösteren yıldızın adı nedir? [cite: 374]",
            options: {
                A: "Sirius [cite: 375]",
                B: "Polaris (Kutup Yıldızı) [cite: 376]",
                C: "Çoban Yıldızı (Venüs) [cite: 377]",
                D: "Vega [cite: 378]"
            },
            answer: "B" // [cite: 579]
        },
        {
            question: "76. Türkiye, aşağıdaki uluslararası örgütlerden hangisine diğerlerinden daha sonra üye olmuştur? [cite: 379]",
            options: {
                A: "Birleşmiş Milletler (BM) [cite: 380]",
                B: "NATO [cite: 381]",
                C: "Avrupa Konseyi [cite: 382]",
                D: "İslam İşbirliği Teşkilatı [cite: 383]"
            },
            answer: "D" // [cite: 580]
        },
        {
            question: "77. İngiltere ve Fransa arasında 116 yıl süren (1337-1453) savaşlar serisine ne ad verilir? [cite: 384]",
            options: {
                A: "Yedi Yıl Savaşları [cite: 385]",
                B: "Otuz Yıl Savaşları [cite: 386]",
                C: "Yüzyıl Savaşları [cite: 387]",
                D: "Haçlı Seferleri [cite: 388]"
            },
            answer: "C" // [cite: 581]
        },
        {
            question: "78. Beyaz travertenleriyle ünlü olan ve UNESCO Dünya Mirası Listesi'nde yer alan Pamukkale, hangi ilimizdedir? [cite: 389]",
            options: {
                A: "Aydın [cite: 390]",
                B: "Muğla [cite: 391]",
                C: "Afyonkarahisar [cite: 392]",
                D: "Denizli [cite: 393]"
            },
            answer: "D" // [cite: 582]
        },
        {
            question: "79. Osmanlı Devleti'nde donanma komutanına verilen unvan nedir? [cite: 394]",
            options: {
                A: "Kaptan-ı Derya [cite: 395]",
                B: "Defterdar [cite: 396]",
                C: "Kazasker [cite: 397]",
                D: "Nişancı [cite: 398]"
            },
            answer: "A" // [cite: 583]
        },
        {
            question: "80. \"Gülü ile meşhur\" ilimiz hangisidir? [cite: 399]",
            options: {
                A: "Isparta [cite: 400]",
                B: "Konya [cite: 401]",
                C: "Bursa [cite: 402]",
                D: "Edirne [cite: 403]"
            },
            answer: "A" // [cite: 584]
        },
        {
            question: "81. Sadabad Paktı (1937), Türkiye'nin doğu sınırlarını güvence altına almak için imzalanmıştır. Aşağıdakilerden hangisi bu paktın üyelerinden biri değildir? [cite: 404]",
            options: {
                A: "İran [cite: 405]",
                B: "Irak [cite: 406]",
                C: "Afganistan [cite: 407]",
                D: "Suriye [cite: 408]"
            },
            answer: "D" // [cite: 585]
        },
        {
            question: "82. Divânu Lügati't-Türk adlı eserin yazarı Kaşgarlı Mahmud, bu eseri hangi Türk devletinin hükümdarına sunmuştur? [cite: 409]",
            options: {
                A: "Karahanlılar [cite: 410]",
                B: "Gazneliler [cite: 411]",
                C: "Abbâsîler [cite: 412]",
                D: "Büyük Selçuklular [cite: 413]"
            },
            answer: "C" // [cite: 586]
        },
        {
            question: "83. Fatih Sultan Mehmet'in Venedik'e gönderdiği ve kendi portresini de yaptıran ünlü İtalyan ressam kimdir? [cite: 414]",
            options: {
                A: "Leonardo da Vinci [cite: 415]",
                B: "Gentile Bellini [cite: 416]",
                C: "Tiziano [cite: 417]",
                D: "Rafael [cite: 418]"
            },
            answer: "B" // [cite: 587]
        },
        {
            question: "84. 1917'de Rusya'da gerçekleşen ve Çarlık rejimini yıkan \"Ekim Devrimi\"nin (Bolşevik Devrimi) lideri kimdir? [cite: 419]",
            options: {
                A: "Josef Stalin [cite: 420]",
                B: "Lev Troçki [cite: 421]",
                C: "Vladimir Lenin [cite: 422]",
                D: "Mihail Gorbaçov [cite: 423]"
            },
            answer: "C" // [cite: 588]
        },
        {
            question: "85. \"Devlet Ana\" ve \"Yorgun Savaşçı\" gibi romanlarıyla tanınan, Osmanlı'nın kuruluşunu ve Kurtuluş Savaşı'nı konu edinen yazarımız kimdir? [cite: 424]",
            options: {
                A: "Tarık Buğra [cite: 425]",
                B: "Kemal Tahir [cite: 426]",
                C: "Orhan Kemal [cite: 427]",
                D: "Yaşar Kemal [cite: 428]"
            },
            answer: "B" // [cite: 589]
        },
        {
            question: "86. Osmanlı Devleti'nde, padişahın tuğrasını çekmekle (imzasını atmakla) ve fethedilen toprakların kayıtlarını tutmakla görevli divan üyesi kimdir? [cite: 429]",
            options: {
                A: "Defterdar [cite: 430]",
                B: "Kazasker [cite: 431]",
                C: "Nişancı [cite: 432]",
                D: "Sadrazam [cite: 433]"
            },
            answer: "C" // [cite: 590]
        },
        {
            question: "87. Albert Einstein'ın 1905'te yayımladığı ve E=mc² formülünü içeren, modern fiziğin temelini atan teorisinin adı nedir? [cite: 434]",
            options: {
                A: "Genel Görelilik Teorisi [cite: 435]",
                B: "Özel Görelilik Teorisi [cite: 436]",
                C: "Kuantum Alan Teorisi [cite: 437]",
                D: "Büyük Birleşme Teorisi [cite: 438]"
            },
            answer: "B" // [cite: 591]
        },
        {
            question: "88. Montrö Boğazlar Sözleşmesi'nde (1936) Türkiye'yi temsil eden ve sözleşmenin imzalanmasında kilit rol oynayan dönemin Dışişleri Bakanı kimdir? [cite: 439]",
            options: {
                A: "İsmet İnönü [cite: 440]",
                B: "Şükrü Saracoğlu [cite: 441]",
                C: "Tevfik Rüştü Aras [cite: 442]",
                D: "Celal Bayar [cite: 443]"
            },
            answer: "C" // [cite: 592]
        },
        {
            question: "89. \"Aya Sofya\" adı verilen ve 537 yılında İmparator I. Jüstinyen tarafından İstanbul'da inşa ettirilen yapının mimarları kimlerdir? [cite: 444]",
            options: {
                A: "Mimar Sinan ve Mimar Hayreddin [cite: 445]",
                B: "Sedefkâr Mehmed Ağa ve Dalgıç Ahmed Ağa [cite: 446]",
                C: "Trallesli Anthemius ve Miletli İsidoros [cite: 447]",
                D: "Vitruvius ve Apollodorus [cite: 448]"
            },
            answer: "C" // [cite: 593]
        },
        {
            question: "90. 18. yüzyılda \"Gulliver'in Gezileri\" adlı eseri yazan ve bu eserde siyasi hiciv yapan İrlandalı yazar kimdir? [cite: 449]",
            options: {
                A: "Daniel Defoe [cite: 450]",
                B: "Jonathan Swift [cite: 451]",
                C: "Charles Dickens [cite: 452]",
                D: "Thomas More [cite: 453]"
            },
            answer: "B" // [cite: 594]
        },
        {
            question: "91. Kurtuluş Savaşı sırasında Batı Cephesi'ndeki \"Gediz Muharebeleri\"nin başarısızlıkla sonuçlanması üzerine görevinden alınan komutan kimdir? [cite: 454]",
            options: {
                A: "Ali Fuat Cebesoy [cite: 455]",
                B: "Kazım Karabekir [cite: 456]",
                C: "Refet Bele [cite: 457]",
                D: "İsmet İnönü [cite: 458]"
            },
            answer: "A" // [cite: 595]
        },
        {
            question: "92. İlk Türk İslam alimlerinden olan, \"El-Medinetü'l-Fâzıla\" (Erdemli Şehir) adlı eseriyle tanınan ve Batı'da \"Al-Pharabius\" olarak bilinen filozof kimdir? [cite: 459]",
            options: {
                A: "İbn-i Sina [cite: 460]",
                B: "Farabi [cite: 461]",
                C: "El-Biruni [cite: 462]",
                D: "İbn Rüşd [cite: 463]"
            },
            answer: "B" // [cite: 596]
        },
        {
            question: "93. II. Dünya Savaşı sırasında, 6 Ağustos 1945'te, ABD tarafından atom bombası atılan ilk Japon şehri hangisidir? [cite: 464]",
            options: {
                A: "Tokyo [cite: 465]",
                B: "Nagazaki [cite: 466]",
                C: "Hiroşima [cite: 467]",
                D: "Kyoto [cite: 468]"
            },
            answer: "C" // [cite: 597]
        },
        {
            question: "94. \"Tutunamayanlar\" adlı romanıyla Türk edebiyatında \"postmodernizm\" akımının öncülerinden sayılan yazarımız kimdir? [cite: 469]",
            options: {
                A: "Yusuf Atılgan [cite: 470]",
                B: "Adalet Ağaoğlu [cite: 471]",
                C: "Oğuz Atay [cite: 472]",
                D: "Bilge Karasu [cite: 473]"
            },
            answer: "C" // [cite: 598]
        },
        {
            question: "95. İnsanlık tarihinin en yıkıcı salgını olarak bilinen, 14. yüzyılda Avrupa nüfusunun yaklaşık yarısının ölümüne neden olan veba salgınına ne ad verilir? [cite: 474]",
            options: {
                A: "Kara Veba [cite: 475]",
                B: "İspanyol Gribi [cite: 476]",
                C: "Antonin Salgını [cite: 477]",
                D: "Jüstinyen Vebası [cite: 478]"
            },
            answer: "A" // [cite: 599]
        },
        {
            question: "96. Osmanlı Devleti'nde, gayrimüslim tebaadan alınan ve askerlik hizmetine karşılık tutulan vergi hangisidir? [cite: 479]",
            options: {
                A: "Öşür [cite: 480]",
                B: "Haraç [cite: 481]",
                C: "Avarız [cite: 482]",
                D: "Cizye [cite: 483]"
            },
            answer: "D" // [cite: 600]
        },
        {
            question: "97. 31 Mart Vakası (1909) olarak bilinen, Meşrutiyet karşıtı isyanı bastırmak için Selanik'ten İstanbul'a gelen ordunun adı nedir? [cite: 484]",
            options: {
                A: "Nizam-ı Cedid [cite: 485]",
                B: "Hareket Ordusu [cite: 486]",
                C: "Sekban-ı Cedid [cite: 487]",
                D: "Asâkir-i Mansûre-i Muhammediyye [cite: 488]"
            },
            answer: "B" // [cite: 601]
        },
        {
            question: "98. Arjantin ve Brezilya arasında yer alan, 275'ten fazla şelaleden oluşan ve dünyanın en görkemli doğa harikalarından biri kabul edilen şelalenin adı nedir? [cite: 489]",
            options: {
                A: "Niagara Şelaleleri [cite: 490]",
                B: "Victoria Şelaleleri [cite: 491]",
                C: "Angel Şelalesi [cite: 492]",
                D: "Iguazu Şelaleleri [cite: 493]"
            },
            answer: "D" // [cite: 602]
        },
        {
            question: "99. Milli Mücadele'ye karşı çıkan ve İstanbul Hükümeti tarafından desteklenen isyanlardan hangisi, doğrudan TBMM tarafından kurulan düzenli ordu birlikleri tarafından bastırılmıştır? [cite: 494]",
            options: {
                A: "Anzavur Ayaklanması [cite: 495]",
                B: "Çopur Musa Ayaklanması [cite: 496]",
                C: "Çerkes Ethem Ayaklanması [cite: 497]",
                D: "Delibaş Mehmet Ayaklanması [cite: 498]"
            },
            answer: "C" // [cite: 603]
        },
        {
            question: "100. Pablo Picasso'nun, İspanya İç Savaşı sırasında bir kasabanın bombalanmasını anlattığı, savaş karşıtı en ünlü tablosunun adı nedir? [cite: 499]",
            options: {
                A: "Avignonlu Kızlar [cite: 500]",
                B: "Guernica [cite: 501]",
                C: "Yaşlı Gitarist [cite: 502]",
                D: "Ağlayan Kadın [cite: 503]"
            },
            answer: "B" // [cite: 604]
        }
    ];

    // HTML Elementlerini Seçme
    const questionNav = document.getElementById('question-nav');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const quizContent = document.getElementById('quiz-content');
    const resultsContainer = document.getElementById('results-container');
    const navButtons = document.querySelector('.navigation-buttons');


    // Testin Durumunu Takip Edecek Değişkenler
    let currentQuestionIndex = 0;
    // Kullanıcının verdiği cevapları saklamak için bir dizi (Array) oluşturuyoruz.
    // Başlangıçta hepsi 'null' (cevaplanmamış).
    let userAnswers = new Array(questions.length).fill(null);

    // --- TEMEL FONKSİYONLAR ---

    // 1. Sol Navigasyon Menüsünü Oluşturma
    function populateSideNav() {
        questionNav.innerHTML = ''; // Menüyü temizle
        questions.forEach((_, index) => {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = index + 1;
            link.classList.add('nav-link');
            link.dataset.index = index; // Hangi soruya ait olduğunu belirtmek için

            // Bu soru daha önce cevaplandıysa işaretle
            if (userAnswers[index] !== null) {
                link.classList.add('answered');
            }

            // Tıklanıldığında o soruya git
            link.addEventListener('click', (e) => {
                e.preventDefault();
                loadQuestion(index);
            });

            questionNav.appendChild(link);
        });
    }

    // 2. Belirli Bir Soruyu Ekrana Yükleme
    function loadQuestion(index) {
        currentQuestionIndex = index;
        const question = questions[index];

        // Soru metnini güncelle
        questionText.innerHTML = question.question; // Citeları da göstermesi için innerHTML kullandık

        // Seçenekleri temizle ve yeniden oluştur
        optionsContainer.innerHTML = '';
        Object.keys(question.options).forEach(key => {
            const option = question.options[key];
            
            // Her bir seçenek için bir radio button ve label oluştur
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'option';
            radioInput.id = `option-${key}`;
            radioInput.value = key;

            const label = document.createElement('label');
            label.htmlFor = `option-${key}`;
            label.innerHTML = `${key}) ${option}`; // Citeları da göstermesi için

            optionElement.appendChild(radioInput);
            optionElement.appendChild(label);
            
            // Eğer bu soru daha önce cevaplanmışsa, o seçeneği işaretli göster
            if (userAnswers[index] === key) {
                radioInput.checked = true;
            }

            // Bir seçenek seçildiğinde cevabı kaydet
            radioInput.addEventListener('change', () => {
                handleAnswer(index, key);
            });
            
            // Label'a tıklandığında da radio'nun seçilmesini sağla
            label.addEventListener('click', (e) => {
                 // Label'ın içindeki HTML'den değil, sadece radio'dan tıklama al
                 if(e.target.tagName !== 'INPUT'){
                    radioInput.checked = true;
                    handleAnswer(index, key);
                 }
            });

            optionsContainer.appendChild(optionElement);
        });

        // Butonların görünürlüğünü ayarla
        updateNavigation();
        // Sol menüde hangi soruda olduğumuzu göster
        updateSideNavActiveState();
    }

    // 3. Cevabı Kaydetme ve Navigasyonu Güncelleme
    function handleAnswer(questionIndex, answer) {
        userAnswers[questionIndex] = answer;
        // Sol menüdeki soru numarasını "cevaplandı" olarak işaretle
        const navLink = questionNav.querySelector(`.nav-link[data-index="${questionIndex}"]`);
        if (navLink) {
            navLink.classList.add('answered');
        }
    }

    // 4. İleri/Geri Butonlarını Yönetme
    function updateNavigation() {
        // İlk sorudaysak "Önceki" butonunu gizle
        prevBtn.style.display = (currentQuestionIndex === 0) ? 'none' : 'inline-block';
        
        // Son sorudaysak "Sonraki" butonunu gizle, "Testi Bitir" butonunu göster
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    // 5. Sol Menüde Aktif Soruyu İşaretleme
    function updateSideNavActiveState() {
        // Önce hepsinden 'active' sınıfını kaldır
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Sadece mevcut soruya 'active' sınıfını ekle
        const activeLink = questionNav.querySelector(`.nav-link[data-index="${currentQuestionIndex}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // 6. Sonuçları Hesaplama ve Gösterme
    function showResults() {
        // Test alanını ve sol menüyü gizle
        quizContent.style.display = 'none';
        navButtons.style.display = 'none';
        questionNav.style.display = 'none';

        // Sonuç alanını göster
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = ''; // Temizle

        let correctCount = 0;
        let resultsHtml = '';

        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const correctAnswer = question.answer;
            const options = question.options;

            if (userAnswer === correctAnswer) {
                correctCount++;
                resultsHtml += `
                    <div class="result-item correct">
                        <p>${question.question}</p>
                        <span class="correct-answer">✔️ Sizin Cevabınız: ${options[userAnswer]} (Doğru)</span>
                    </div>
                `;
            } else {
                resultsHtml += `
                    <div class="result-item wrong">
                        <p>${question.question}</p>
                        <span class="user-answer">❌ Sizin Cevabınız: ${userAnswer ? options[userAnswer] : 'Boş Bırakıldı'}</span>
                        <span class="correct-answer">⭐ Doğru Cevap: ${options[correctAnswer]}</span>
                    </div>
                `;
            }
        });

        // Toplam skoru başa ekle
        const summaryHtml = `
            <h2>Test Sonuçları</h2>
            <div class="result-summary">
                Toplam 100 sorudan <strong>${correctCount}</strong> tanesini doğru cevapladınız.
            </div>
        `;

        resultsContainer.innerHTML = summaryHtml + resultsHtml;
    }

    // --- EVENT LISTENERS (OLAY DİNLEYİCİLERİ) ---

    // "Önceki Soru" Butonu
    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            loadQuestion(currentQuestionIndex - 1);
        }
    });

    // "Sonraki Soru" Butonu
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            loadQuestion(currentQuestionIndex + 1);
        }
    });

    // "Testi Bitir" Butonu
    submitBtn.addEventListener('click', () => {
        // Emin misiniz diye sormak iyi bir pratik
        if (confirm("Testi bitirmek istediğinize emin misiniz? Sonuç ekranına geçilecektir.")) {
            showResults();
        }
    });

    // --- TESTİ BAŞLATMA ---
    populateSideNav(); // Sol menüyü oluştur
    loadQuestion(0);   // İlk soruyu yükle
});
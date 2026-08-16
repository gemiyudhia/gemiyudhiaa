export interface TilEntry {
  title: string;
  note: string;
  tag: string;
}

export const tilData: TilEntry[] = [
  {
    title: 'Aku pernah mulai belajar coding hanya dari HP',
    note: 'Sebelum punya laptop, belajar programming dilakukan dengan perangkat yang sangat terbatas. Dari situ aku belajar bahwa memulai tidak selalu harus menunggu kondisi ideal.',
    tag: 'Journey',
  },
  {
    title: 'Laptop lambat ternyata mengajarkan cara kerja yang lebih sabar',
    note: 'Perangkat yang terbatas memang bikin development lebih lambat, tetapi juga membuatku terbiasa mencari solusi yang lebih sederhana dan tidak terlalu bergantung pada tools yang berat.',
    tag: 'Journey',
  },
  {
    title: 'Ternyata aku lebih menikmati backend daripada yang kukira',
    note: 'Awalnya lebih sering tertarik dengan frontend dan UI, tetapi setelah mengerjakan authentication, API, database, dan business logic, aku justru mulai menikmati bagaimana sistem bekerja di balik layar.',
    tag: 'Backend',
  },
  {
    title: 'UI yang bagus bukan cuma soal tampilan',
    note: 'Semakin sering membuat frontend, semakin sadar bahwa spacing, hierarchy, feedback, loading state, error state, dan kemudahan penggunaan sama pentingnya dengan membuat tampilan terlihat bagus.',
    tag: 'Frontend',
  },
  {
    title: 'Frontend dan backend punya cara berpikir yang berbeda',
    note: 'Frontend lebih banyak memikirkan bagaimana user berinteraksi dengan sistem, sedangkan backend lebih banyak memikirkan bagaimana sistem memproses dan menjaga data. Keduanya saling bergantung.',
    tag: 'Full Stack',
  },
  {
    title: 'Database error sering kali bukan masalah database',
    note: 'Ketika aplikasi gagal terhubung ke database, penyebabnya bisa berasal dari connection string, credential, schema, migration, network, atau konfigurasi environment. Debugging harus dimulai dari mencari sumber masalah, bukan langsung menyalahkan databasenya.',
    tag: 'Backend',
  },
  {
    title: 'Environment variable adalah bagian penting dari aplikasi',
    note: 'Secret, database URL, JWT secret, dan konfigurasi environment tidak seharusnya ditanam langsung di source code. Memisahkan konfigurasi dari kode membuat aplikasi lebih aman dan lebih mudah dipindahkan antar-environment.',
    tag: 'Backend',
  },
  {
    title: 'Error message sebenarnya adalah petunjuk',
    note: 'Dulu error terasa seperti sesuatu yang harus dihilangkan secepat mungkin. Sekarang aku mencoba membacanya sebagai informasi: file mana yang bermasalah, operasi apa yang gagal, dan asumsi apa yang ternyata salah.',
    tag: 'Debugging',
  },
  {
    title: 'AI bisa mempercepat coding, tapi tidak menggantikan pemahaman',
    note: 'Menggunakan AI membuat implementasi jauh lebih cepat, tetapi kode yang dihasilkan tetap perlu dipahami. Kalau tidak mengerti alasan di balik kode tersebut, debugging berikutnya justru bisa menjadi lebih sulit.',
    tag: 'AI',
  },
  {
    title: 'Copy-paste kode bukan berarti selesai belajar',
    note: 'Kode bisa langsung berjalan setelah mengikuti contoh, tetapi pemahaman baru benar-benar muncul ketika mencoba mengubahnya, memecahnya, atau memperbaikinya ketika sesuatu tidak sesuai kebutuhan.',
    tag: 'Learning',
  },
  {
    title: 'Tidak semua masalah perlu diselesaikan dengan teknologi baru',
    note: 'Kadang solusi terbaik bukan menambahkan library atau mengubah architecture, tetapi memahami masalah sebenarnya lalu menggunakan tools yang sudah ada dengan lebih baik.',
    tag: 'Engineering',
  },
  {
    title: 'Clean code bukan berarti kode yang paling panjang',
    note: 'Kode yang terlihat kompleks belum tentu lebih baik. Struktur yang jelas, penamaan yang masuk akal, dan pembagian tanggung jawab yang tepat sering kali lebih penting daripada membuat abstraction sebanyak mungkin.',
    tag: 'Engineering',
  },
  {
    title: 'Architecture baru terasa penting ketika project mulai membesar',
    note: 'Pada project kecil, semua kode bisa terasa mudah ditaruh di mana saja. Tetapi ketika fitur bertambah, pemisahan responsibility mulai terasa penting supaya perubahan satu fitur tidak merusak bagian lain.',
    tag: 'Architecture',
  },
  {
    title: 'Git bukan cuma tombol save',
    note: 'Semakin sering bekerja dengan branch dan commit, semakin terasa bahwa Git adalah cara untuk mengatur perjalanan perubahan sebuah project, bukan sekadar tempat menyimpan kode.',
    tag: 'Git',
  },
  {
    title: 'Merge conflict bukan berarti Git rusak',
    note: 'Conflict terjadi karena Git tidak bisa menentukan perubahan mana yang harus dipertahankan. Memahami apa yang sebenarnya berubah di kedua branch membuat conflict terasa jauh lebih mudah diselesaikan.',
    tag: 'Git',
  },
  {
    title: 'Commit kecil lebih mudah dipahami daripada satu commit besar',
    note: 'Commit yang fokus pada satu perubahan membuat history lebih mudah dibaca dan mempermudah menemukan kapan sebuah bug atau perubahan tertentu diperkenalkan.',
    tag: 'Git',
  },
  {
    title: 'Belajar software development ternyata banyak membaca',
    note: 'Menulis kode hanyalah sebagian dari proses. Membaca dokumentasi, error message, source code, API response, dan hasil pencarian sering kali menghabiskan lebih banyak waktu daripada mengetik kode.',
    tag: 'Learning',
  },
  {
    title: 'Google dan dokumentasi adalah bagian dari workflow programmer',
    note: 'Tidak mengetahui sesuatu bukan masalah. Kemampuan pentingnya adalah mengetahui apa yang harus dicari, bagaimana membaca dokumentasi, dan bagaimana memastikan solusi yang ditemukan memang sesuai dengan masalah.',
    tag: 'Learning',
  },
  {
    title: 'Kadang aku baru paham setelah menjelaskan ulang',
    note: 'Menjelaskan sebuah konsep dengan kata-kata sendiri ternyata menjadi cara yang bagus untuk menemukan bagian yang sebenarnya belum dipahami.',
    tag: 'Learning',
  },
  {
    title: 'Belajar terlalu lama juga bisa menurunkan kualitas belajar',
    note: 'Ketika terlalu lama memaksa diri memahami sesuatu, fokus mulai menurun dan masalah yang sederhana terasa jauh lebih sulit. Istirahat terkadang menjadi bagian dari proses menyelesaikan masalah.',
    tag: 'Life',
  },
  {
    title: 'Produktif tidak selalu berarti duduk di depan laptop',
    note: 'Ada hari ketika belajar coding terasa tidak efektif. Memikirkan architecture, membaca dokumentasi, bermain gitar, atau sekadar beristirahat juga bisa menjadi bagian dari menjaga energi untuk proses jangka panjang.',
    tag: 'Life',
  },
  {
    title: 'Gitar mengajarkan bahwa pola lebih kuat daripada hafalan',
    note: 'Daripada menghafal semua chord secara terpisah, memahami pola scale dan hubungan antar-chord membuat pengetahuan lebih mudah digunakan untuk situasi baru.',
    tag: 'Music',
  },
  {
    title: 'Telinga perlu dilatih, bukan hanya jari',
    note: 'Bisa memainkan bentuk chord belum tentu berarti benar-benar memahami musik. Mendengarkan hubungan nada dan mencoba menemukan Do-Re-Mi sendiri membuat latihan gitar terasa lebih bermakna.',
    tag: 'Music',
  },
  {
    title: 'Parfum ternyata juga soal konteks',
    note: 'Aroma yang sama bisa terasa berbeda tergantung kondisi kulit, pakaian, cuaca, dan jarak orang yang mencium. Dari situ belajar bahwa pengalaman terhadap sesuatu tidak selalu bisa dinilai hanya dari satu kondisi.',
    tag: 'Random',
  },
  {
    title: 'Hal sederhana bisa punya banyak detail',
    note: 'Semakin diperhatikan, semakin banyak detail yang ternyata ada dalam sesuatu yang terlihat sederhana. Ini berlaku untuk software, musik, desain, bahkan hal kecil seperti aroma parfum.',
    tag: 'Perspective',
  },
  {
    title: 'Aku lebih suka memahami kenapa daripada sekadar bagaimana',
    note: 'Tutorial bisa menunjukkan bagaimana melakukan sesuatu, tetapi memahami alasan di balik keputusan tersebut membuat pengetahuan lebih mudah diterapkan ketika menghadapi kasus yang berbeda.',
    tag: 'Mindset',
  },
  {
    title: 'Tidak semua tutorial harus diikuti sampai selesai',
    note: 'Kalau tujuan belajar sudah tercapai atau konsepnya sudah dipahami, mencoba menerapkannya sendiri sering kali lebih berguna daripada terus mengikuti tutorial langkah demi langkah.',
    tag: 'Learning',
  },
  {
    title: 'Membangun sesuatu membuatku lebih mudah menemukan minat',
    note: 'Sulit mengetahui bidang mana yang benar-benar disukai hanya dengan membaca teorinya. Setelah mencoba frontend, backend, database, authentication, dan machine learning, preferensi mulai terlihat dari bagian mana yang paling membuat penasaran.',
    tag: 'Journey',
  },
  {
    title:
      'Rasa “aku bodoh” sering muncul ketika sedang belajar sesuatu yang baru',
    note: 'Kesulitan memahami sesuatu tidak otomatis berarti tidak mampu. Kadang otak memang sedang membangun model baru, dan proses itu terasa berantakan sebelum akhirnya mulai masuk akal.',
    tag: 'Mindset',
  },
  {
    title:
      'Kemampuan yang sekarang terasa biasa dulunya juga pernah membingungkan',
    note: 'Hal seperti Git branch, API, authentication, atau database yang sekarang terasa lebih familiar dulunya juga pernah membuat bingung. Mengingat proses itu membantu melihat bahwa kemampuan memang dibangun sedikit demi sedikit.',
    tag: 'Journey',
  },
];

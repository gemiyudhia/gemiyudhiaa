import Footer from '@/components/ui/Footer';

const AboutMePage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        <h1 className="font-mono text-sm uppercase tracking-wider text-graphite mb-6">
          Tentang Saya
        </h1>
        <div className="space-y-4 text-base sm:text-lg text-ink/90 leading-relaxed max-w-xl">
          <p>
            Hai! Aku Gemi, software developer yang suka membangun sistem dan
            memecahkan masalah lewat kode.
          </p>

          <p>
            Aku tertarik dengan software development karena suka melihat
            bagaimana sebuah ide bisa diubah menjadi aplikasi yang benar-benar
            bisa digunakan. Saat ini aku banyak mengeksplorasi pengembangan
            full-stack, terutama JavaScript/TypeScript, Next.js, NestJS,
            database, dan sistem autentikasi. Aku juga semakin menikmati sisi
            backend karena tertarik dengan bagaimana sebuah sistem bekerja di
            balik layar.
          </p>

          <p>
            Aku belajar dengan cara banyak membangun sesuatu. Mulai dari project
            kecil, mencoba teknologi baru, memperbaiki bug, sampai mengerjakan
            project yang lebih kompleks. Buatku, memahami alasan di balik sebuah
            keputusan teknis jauh lebih penting daripada sekadar membuat kode
            yang berjalan. Kamu bisa melihat beberapa project yang pernah
            kubangun di{' '}
            <a href="/work" className="text-moss link-underline pb-0.5">
              halaman work
            </a>
            .
          </p>

          <p>
            Aku juga suka mencatat hal-hal kecil yang kupelajari selama proses
            tersebut. Mulai dari konsep programming, arsitektur aplikasi, sampai
            masalah-masalah yang kutemui ketika membangun project. Beberapa
            catatan itu bisa kamu lihat di{' '}
            <a href="/til" className="text-moss link-underline pb-0.5">
              halaman TIL
            </a>
            .
          </p>

          <p>
            Di luar ngoding, aku suka bermain gitar, mendengarkan musik, dan
            mengeksplorasi hal-hal baru yang membuatku penasaran. Aku percaya
            proses belajar tidak harus selalu sempurna yang penting terus
            mencoba, membangun, dan menjadi sedikit lebih baik dari sebelumnya.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutMePage;

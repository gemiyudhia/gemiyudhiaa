import Footer from '@/components/ui/Footer';

export default function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        <div className="space-y-4 text-base sm:text-lg text-ink/90 leading-relaxed max-w-xl">
          <p>
            Hai! Aku Gemi Yudhia, seorang junior software developer yang senang
            membangun sesuatu dengan kode dan mencari tahu bagaimana sebuah
            sistem bekerja.
          </p>

          <p>
            Awalnya, aku tertarik dengan dunia software development karena
            penasaran bagaimana sebuah ide bisa berubah menjadi aplikasi yang
            bisa digunakan banyak orang. Sejak itu, aku mulai banyak belajar dan
            mencoba berbagai hal, terutama di bidang web development. Belakangan
            ini, aku lebih sering mengeksplorasi full-stack development
            menggunakan JavaScript, TypeScript, Next.js, NestJS, serta berbagai
            teknologi yang berkaitan dengan backend dan database.
          </p>

          <p>
            Buatku, belajar programming bukan cuma soal membuat sesuatu
            berjalan. Aku juga ingin tahu kenapa sesuatu dibuat dengan cara
            tertentu, bagaimana bagian-bagiannya saling terhubung, dan apa yang
            bisa diperbaiki dari sana. Karena itu, sebagian besar waktuku
            dihabiskan untuk mencoba hal baru, membangun project, membaca kode,
            dan sesekali berhadapan dengan bug yang ternyata tidak sesederhana
            kelihatannya.
          </p>

          <p>
            Beberapa project yang pernah kukerjakan bisa kamu temukan di{' '}
            <a className="text-moss link-underline pb-0.5" href="/work">
              halaman work
            </a>
            . Aku juga punya kebiasaan mencatat hal-hal yang kupelajari, baik
            tentang programming, teknologi, maupun pengalaman selama mengerjakan
            project. Catatan-catatan itu bisa kamu baca di{' '}
            <a href="/til" className="text-moss link-underline pb-0.5">
              halaman TIL
            </a>{' '}
            .
          </p>

          <p>
            Di luar dunia programming, aku suka bermain gitar, mendengarkan
            musik, dan mencoba hal-hal baru. Masih banyak yang ingin kupelajari
            dan belum semuanya kupahami, tapi justru itu yang membuat proses ini
            menarik. Aku ingin terus berkembang, satu project dan satu hal baru
            dalam satu waktu.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

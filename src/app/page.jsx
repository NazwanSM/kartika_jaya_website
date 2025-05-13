import PenjelasanPerusahaan from '../component/sections/PenjelasanPerusahaan'
import Sambutan from '../component/sections/Sambutan'
import VisiMisi from '../component/sections/VisiMisi'
import KebijakanPerusahaan from '../component/sections/KebijakanPerusahaan'
import Struktur from '../component/sections/Struktur'
import Proyek from '../component/sections/Proyek'
import LingkunganKerja from '../component/sections/LingkunganKerja'
import HarapanTerimakasih from '../component/sections/HarapanTerimakasih'

export default function Home() {
  return (
    <div className="space-y-20">
      <section id="beranda" className="py-12">
        <PenjelasanPerusahaan />
      </section>

      <section id="tentang" className="py-12">
        <Sambutan />
      </section>

      <section id="visi-misi" className="py-12">
        <VisiMisi />
        <KebijakanPerusahaan />
      </section>

      <section id="struktur" className="py-12">
        <Struktur />
      </section>

      <section id="proyek" className="py-12">
        <Proyek />
      </section>

      <section id="budaya" className="py-12">
        <LingkunganKerja />
      </section>

      <section className="py-12">
        <HarapanTerimakasih />
      </section>
    </div>
  )
}
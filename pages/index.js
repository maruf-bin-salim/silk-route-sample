import CallToActionBlock from '@/components/CallToActionBlock'
import ComapanyBioBlock from '@/components/ComapanyBioBlock'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SliderBlock from '@/components/SliderBlock'
import styles from '@/styles/Main.module.css'


export default function Main() {


  return (
    <div className={styles['page']}>
      <Navbar />
      <SliderBlock />
      <CallToActionBlock />
      <ComapanyBioBlock />
      <Footer />
    </div>
  )
}

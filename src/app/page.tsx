import HeroSection from '@/components/HeroSection'
import PhotoGallery from '@/components/PhotoGallery'
import FeaturedProducts from '@/components/FeaturedProducts'
import BrandStory from '@/components/BrandStory'
import ProductCategories from '@/components/ProductCategories'
import HealthKnowledge from '@/components/HealthKnowledge'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <PhotoGallery />
      <FeaturedProducts />
      <BrandStory />
      <ProductCategories />
      <HealthKnowledge />
      <ContactCTA />
    </div>
  )
}

import Campaigns from "@/components/Campaigns"
import Carousel from "@/components/Carousel"
import About from "@/components/About"
import MenuWrapper from "@/components/product/MenuWrapper"

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
    </div>
  )
}

export default Index
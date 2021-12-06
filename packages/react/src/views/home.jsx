import Link from '@components/link'
import Image from '@components/image'

import image from '@assets/images/image.jpg'

const Home = () => (
  <>
    <h1>🦾 React Boilerplate</h1>
    <p>Highly customizable React boilerplate built with webpack.</p>
    <Link to="/about">About</Link>
    <Image src={image} alt="" />
  </>
)

export default Home

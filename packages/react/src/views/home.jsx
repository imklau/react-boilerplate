import Link from '@components/link'

import image from '@assets/images/image.jpg'

const Home = () => (
  <>
    <Link to="/about">About</Link>
    <h1>React Boilerplate</h1>
    <img src={image} alt="" />
  </>
)

export default Home

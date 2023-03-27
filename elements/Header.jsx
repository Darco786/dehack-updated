import Button from '@/components/Button'
import Image from 'next/image'
import Container from './Container'
import Menu from '../public/icons/Menu.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-6 px-8 md:px-4 fixed w-full top-0 z-50 bg-header">
      <Container className="xl:!px-20">
        <div className=" flex justify-between items-center gap-4">
          <Link href="/">
            <h2 className="text-white font-[900] text-3xl">DeHack</h2>
          </Link>

          <nav className="hidden md:flex gap-8 lg:gap-12 items-center justify-center flex-1 text-[#8D8D8D] text-lg font-[300]">
            {/* <p className={`${router.asPath === '/' ? 'text-white underline underline-offset-4' : ''}`}>Home</p>
            <p className={`${router.asPath === '/about-us' ? 'text-white underline underline-offset-4' : ''}`}>About Us</p>
            <p className={`${router.asPath === '/contact-us' ? 'text-white underline underline-offset-4' : ''}`}>Contact Us</p> */}
          </nav>
          <Button
            className="hidden xl:block"
            text="Join Waitlist"
            link="#join"
          />
          <button className="xl:hidden">
            <Image src={Menu} alt="Nav bar" />
          </button>
        </div>
      </Container>
    </header>
  )
}

export default Header

import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href={'/'} className="relative block items-center h-10">
      <Image src={'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'}
      alt="Airbnb Logo"
      fill
      className="object-contain object-left"
       ></Image>
    </Link>
  )
}

export default Logo

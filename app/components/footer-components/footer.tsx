import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"
import SocialsIcon from "./SocialsIcon"

export default function Footer() {
  return (
    <footer className="my-8 block text-sm text-center">
      connect with me:
      <div className="flex justify-center">
        <SocialsIcon url="https://github.com/weiyoung" icon={<FaGithub />} />
        <SocialsIcon
          url="https://www.linkedin.com/in/weiyoung"
          icon={<FaLinkedin />}
        />
        <SocialsIcon
          url="mailto:weiyoung@alumni.ubc.ca"
          icon={<FaEnvelope />}
        />
        <SocialsIcon
          url="https://www.instagram.com/wei2young/"
          icon={<FaInstagram />}
        />
      </div>
      <span className="block">
        <span className="mr-8">weiyoung © 2024</span>
        <a
          href="https://github.com/weiyoung/website"
          target="_blank"
          className="hover-links"
        >
          source code
        </a>
      </span>
    </footer>
  )
}

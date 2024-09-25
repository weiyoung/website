import Link from "next/link"

export default function SocialsIcon({
  url,
  icon,
}: {
  url: string
  icon: JSX.Element
}) {
  return (
    <Link href={url} target="_blank" className="m-4 text-xl hover-links">
      {icon}
    </Link>
  )
}

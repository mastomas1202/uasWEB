import Image from "next/image"

export default function Logo({ className }: { className?: string }) {
  return <Image src="/logo.svg" alt="Library Logo" width={32} height={32} className={className} />
}


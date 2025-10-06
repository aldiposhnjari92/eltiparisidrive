import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  const flags = [
    { code: 'AL', alt: 'Albanian flag' },
    { code: 'SE', alt: 'Swedish flag' }
  ] as const;

  return (
    <Link 
      href="/" 
      className="group flex items-center gap-2 font-bold text-slate-800 transition-colors hover:text-slate-600"
      aria-label="Go to homepage - Elti Parisi Drive"
    >
      <span className="transition-transform text-lg">
        Elti Parisi Drive
      </span>
      <div className="flex gap-1 p-2">
        {flags.map(({ code, alt }) => (
          <Image
            key={code}
            src={`https://flagsapi.com/${code}/shiny/32.png`}
            alt={alt}
            width={32}
            height={32}
            className="transition-transform rounded-md"
            loading="eager"
            quality={100}
          />
        ))}
      </div>
    </Link>
  )
}

export default Logo
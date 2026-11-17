export default function SectionHeading({ eyebrow, title, children, center = false, light = false }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className={`mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] ${light ? 'text-[#f2cf7a]' : 'text-forest-700'}`}>
        <span className={`h-px w-8 ${light ? 'bg-[#f2cf7a]' : 'bg-gold'}`} /> {eyebrow}
      </p>
      <h2 className={`mb-4 text-3xl font-semibold leading-tight md:text-5xl ${light ? 'text-white' : 'text-forest-900'}`}>{title}</h2>
      {children && <p className={`leading-8 ${light ? 'text-green-100/90' : 'text-muted'}`}>{children}</p>}
    </div>
  )
}

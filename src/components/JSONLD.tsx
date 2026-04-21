import Script from 'next/script'

interface JSONLDProps {
  data: Record<string, unknown>
  id?: string
}

export default function JSONLD({ data, id = 'json-ld' }: JSONLDProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}


export default function SlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


// or Dynamic metadata
export async function generateMetadata({ params }:any) {
    return {
      title: params.slug,
    }
  }
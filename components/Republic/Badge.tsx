import Link from 'next/link'
import tw from 'twin.macro'

export const Badge = ({ path, badge: Badge }: { path: string; badge: any }) => {
  return (
    <Link href={path === 'create-new-republic' ? '#create-new-republic' : `/republic/${path}`}>
      <div tw="m-4 md:m-6 lg:m-8 w-28 md:w-32 lg:w-36 cursor-pointer">
        <Badge />
      </div>
    </Link>
  )
}

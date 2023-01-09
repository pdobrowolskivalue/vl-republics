import Link from 'next/link'
import tw from 'twin.macro'

export const Badge = ({ path, badge: Badge }: { path: string; badge: any }) => {
  return (
    <Link href={path === 'create-new-republic' ? '#create-new-republic' : `/republic/${path}`}>
      <div tw="w-32 sm:w-40 ml-[18px] mr-[18px] cursor-pointer">
        <Badge />
      </div>
    </Link>
  )
}

import 'twin.macro'

export const WhoIsWhoCard = ({ role, name, description }: { role: string; name: string; description: string }) => {
  return (
    <div tw="flex py-6 px-[60px] items-center text-left border-solid border-[1px] border-vlr-accent/20 rounded-lg backdrop-blur-sm">
      <div tw="mr-20 border-solid border-2 border-white/20 w-[88px] h-[88px] text-center" />
      <div tw="mr-20 max-w-[205px] w-[205px]">
        <div tw="text-sm">{role}</div>
        <div tw="text-[22px] leading-[33px] font-medium">{name}</div>
      </div>
      <div tw="max-w-[390px]">{description}</div>
    </div>
  )
}

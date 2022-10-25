import 'twin.macro'

export const WhoIsWhoCard = ({ role, name, description }: { role: string; name: string; description: string }) => {
  return (
    <div tw="flex justify-between py-[24px] px-[60px] items-center text-left border-solid border-[1px] border-[rgba(51, 229, 255, 0.2)] rounded-lg backdrop-blur-sm">
      <div tw="border-solid border-2 border-white/[0.2] w-[88px] h-[88px] text-center" />
      <div>
        <div tw="text-[14px] leading-[21px]">{role}</div>
        <div tw="text-[22px] leading-[33px] font-medium">{name}</div>
      </div>
      <div tw="max-w-[390px]">{description}</div>
    </div>
  )
}

import 'twin.macro'

const Photo = () => {
  return (
    <div tw="overflow-hidden invisible rotate-[120deg] w-[88px] h-[176px] m-[-37px 0 -37px 0]">
      <div tw="overflow-hidden w-full h-full rotate-[-60deg]">
        <div
          tw="w-full h-full bg-no-repeat bg-cover visible rotate-[-60deg] bg-center"
          style={{
            backgroundImage: 'url(http://placekitten.com/240/240)',
          }}
        ></div>
      </div>
    </div>
  )
}

export const WhoIsWhoCard = ({ role, name, description }: { role: string; name: string; description: string }) => {
  return (
    <div tw="flex py-6 px-[60px] items-center text-left border-solid border-[1px] border-vlr-accent/20 rounded-lg backdrop-blur-sm">
      <div tw="mr-20">
        <Photo />
      </div>
      <div tw="mr-20 max-w-[205px] w-[205px]">
        <div tw="text-sm">{role}</div>
        <div tw="text-[22px] leading-[33px] font-medium">{name}</div>
      </div>
      <div tw="max-w-[390px]">{description}</div>
    </div>
  )
}

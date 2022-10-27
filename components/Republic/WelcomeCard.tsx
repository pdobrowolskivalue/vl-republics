import tw from 'twin.macro'

import { RepublicStart } from '@components/big-icons/RepublicStart'
import { RepublicWhoIsWho } from '@components/big-icons/RepublicWhoIsWho'
import { RepublicAboutUs } from '@components/big-icons/RepublicAboutUs'
import { RepublicRulesTips } from '@components/big-icons/RepublicRulesTips'

const Container = tw.div`
  pt-12 pb-8 px-8
  bg-white rounded-md shadow-[0 1px 0 vlr-shadow]
  w-[290px] max-w-[290px]
  flex flex-col
`

const renderIcon = ({ iconUrl }: { iconUrl: string }) => {
  switch (iconUrl) {
    case 'RepublicStart':
      return <RepublicStart />
    case 'RepublicWhoIsWho':
      return <RepublicWhoIsWho />
    case 'RepublicAboutUs':
      return <RepublicAboutUs />
    case 'RepublicRulesTips':
      return <RepublicRulesTips />
  }
}

export const WelcomeCard = ({
  title,
  description,
  iconUrl,
}: {
  title: string
  description: string
  iconUrl: string
}) => {
  return (
    <Container>
      <div tw="mx-auto ">{renderIcon({ iconUrl })}</div>
      <div>
        <div tw="font-medium text-[20px] leading-[36px] text-[#07062A]">{title}</div>
        <div tw="text-[14px] leading-[26px] text-[#373657] text-center">{description}</div>
      </div>
    </Container>
  )
}

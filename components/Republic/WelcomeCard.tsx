import tw from 'twin.macro'

import { RepublicStart } from '@components/big-icons/RepublicStart'
import { RepublicWhoIsWho } from '@components/big-icons/RepublicWhoIsWho'
import { RepublicAboutUs } from '@components/big-icons/RepublicAboutUs'
import { RepublicRulesTips } from '@components/big-icons/RepublicRulesTips'
import { WelcomeCardTypes } from '@type/welcomeCardTypes'

const Container = tw.div`
  p-5 pt-10
  bg-white rounded-md shadow-[0 1px 0 vlr-shadow]
  w-[226px]
  flex flex-col
`

const renderIcon = ({ iconUrl }: { iconUrl: string }) => {
  switch (iconUrl) {
    case WelcomeCardTypes.start:
      return <RepublicStart />
    case WelcomeCardTypes.who_is_who:
      return <RepublicWhoIsWho />
    case WelcomeCardTypes.about_us:
      return <RepublicAboutUs />
    case WelcomeCardTypes.rules_tips:
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
      <div tw="mx-auto h-[122px] mb-7">{renderIcon({ iconUrl })}</div>
      <div>
        <div tw="font-poppins font-medium text-[16px] leading-[28px] text-vlr-dark mb-5 overflow-hidden [display: -webkit-box] [-webkit-box-orient: vertical] [-webkit-line-clamp: 2]">
          {title}
        </div>
        <div tw="leading-[26px] text-vlr-text-shade-of-dark">{description}</div>
      </div>
    </Container>
  )
}

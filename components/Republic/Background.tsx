import Image from 'next/image'

import bc from '@assets/images/republic/republiki_ilustracje_gwiazdy_bc.png'
import se from '@assets/images/republic/who_se.png'
import bc_1 from '@assets/images/republic/home_bc_1.png'
import fe_1 from '@assets/images/republic/republiki_ilustracje_gwiazdy_fe_1.png'

const renderBackground = ({ url }: { url: string }) => {
  switch (url) {
    case 'bc':
      return <Image src={bc} alt="background" layout="fill" objectFit="cover" objectPosition="center" />
    case 'se':
      return <Image src={se} alt="background" layout="fill" objectFit="cover" objectPosition="center" />
    case 'bc_1':
      return <Image src={bc_1} alt="background" layout="fill" objectFit="cover" objectPosition="center" />
    case 'fe_1':
      return <Image src={fe_1} alt="background" layout="fill" objectFit="cover" objectPosition="center" />
  }
}

export const Background = ({ url }: { url: string }) => {
  return <div>{renderBackground({ url })}</div>
}

import Image from 'next/image'

import FrontendMotiveImage from '../../assets/images/frontend-motive.png'

export const FrontendMotive = () => (
  <Image src={FrontendMotiveImage} alt="Frontend Republic" layout="fill" objectFit="contain" />
)

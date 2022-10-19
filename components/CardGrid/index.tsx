import tw from 'twin.macro'

import { gridCards } from '@lib/consts/cards'

const Grid = tw.div`
  flex items-center justify-center w-full flex-col gap-4
  md:(flex-row flex-wrap)
`

const Card = tw.div`
  p-4 py-8 md:p-8 flex flex-col md:flex-row items-center justify-center
  border border-solid border-vlr-mild bg-vlr-backdrop max-w-[584px] md:h-[210px] rounded-2xl
  [> .sign]:(max-w-[120px] m-0 md:mr-12 mb-6)
  [> p]:(m-0 text-center md:text-left)

  transition-colors duration-150

  dark:border-vlr-mild
`

const CardGrid = () => {
  return (
    <Grid>
      {Object.entries(gridCards).map(([key, { icon: Icon, description }]) => (
        <Card key={key}>
          <div className="sign" tw="w-[260px] mr-12">
            <Icon />
          </div>
          <p>{description}</p>
        </Card>
      ))}
    </Grid>
  )
}

export default CardGrid

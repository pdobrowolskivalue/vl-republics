import tw from 'twin.macro'

const Grid = tw.div`
  grid grid-cols-1 xl:grid-cols-2 items-center justify-center w-full gap-4
  md:(flex-row flex-wrap)
`

const Card = tw.div`
  p-5 flex flex-row items-center gap-5
  border border-solid border-vlr-mild bg-vlr-accent/5 max-w-[540px] rounded-2xl
  [> div]:(min-w-[103px] min-h-[120px])
  [> p]:(m-0 text-center md:text-left)

  transition-colors duration-150

  dark:border-vlr-mild
`

type dataType = [key: string, content: { icon: any; description: string }]

const CardGrid = ({ data }: { data: dataType[] }) => {
  return (
    <Grid>
      {data.map(([key, { icon: Icon, description }]) => (
        <Card key={key}>
          <div tw="leading-[21px] flex justify-center items-center">
            <Icon />
          </div>
          <p>{description}</p>
        </Card>
      ))}
    </Grid>
  )
}

export default CardGrid

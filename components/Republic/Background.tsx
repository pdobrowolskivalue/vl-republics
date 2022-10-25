export const Background = ({ url }: { url: string }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '-1',

        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        opacity: '0.6',
      }}
    />
  )
}

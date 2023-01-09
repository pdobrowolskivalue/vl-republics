import tw from 'twin.macro'

export const FormField = ({
  textarea = false,
  name,
  label,
  value,
  handleChange,
}: {
  textarea?: boolean
  name: string
  label: string
  value: string
  handleChange: any
}) => {
  return (
    <div tw="flex flex-col">
      <label htmlFor={name} tw="font-medium  leading-[17px] inline-block mb-3">
        {label}
      </label>
      {!textarea ? (
        <input
          name={name}
          value={value}
          onChange={handleChange}
          tw="border border-vlr-accent/50 rounded bg-vlr-dark p-4"
        />
      ) : (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          rows={6}
          tw="border border-vlr-accent/50 rounded bg-vlr-dark p-4 overflow-hidden resize-none"
        />
      )}
    </div>
  )
}

/**
 * Enumerating potential tag colors here (for the tailwindcss compiler to find):
 *
 * green:   bg-green-300    from-green-400    to-green-300
 * red:     bg-red-300      from-red-400      to-red-300
 * yellow:  bg-yellow-300   from-yellow-400   to-yellow-300
 */

const Tag = ({ color, text }) => (
  <span
    className={`inline-block mr-2 mt-1.5 py-0.5 px-1.5 rounded-md font-normal text-sm select-none whitespace-nowrap cursor-default shadow-sm ${
      color
        ? `bg-gradient-to-br from-${color}-400 to-${color}-300`
        : 'bg-neutral-300'
    }`}
  >
    {text}
  </span>
)
export default Tag

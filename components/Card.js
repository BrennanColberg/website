import Link from '../components/Link'

const Links = ({ links }) =>
  links?.map(({ text, href, as }, i) => (
    <Link
      key={i}
      className="float-right clear-right font-normal font-mono text-sm group -mr-1 select-none ml-2"
      href={href}
      as={as}
    >
      <span className="group-hover:underline">{text}</span>
      <span className="relative -left-0.5 group-hover:left-1 transition-all duration-200">
        {' '}
        →
      </span>
    </Link>
  ))

const Tags = ({ tags }) =>
  tags.map((tag, i) => (
    <span
      key={i}
      // used options (listed for tailwindcss compiler): bg-green-300 bg-red-300 bg-yellow-300 bg-neutral-300
      className={`inline-block mr-2 mt-1.5 py-0.5 px-1.5 rounded-md font-light text-sm select-none whitespace-nowrap cursor-default shadow-sm bg-${
        tag.color || 'neutral'
      }-300`}
    >
      {tag.text}
    </span>
  ))

const Card = ({ title, text, links = [], status, tags = [] }) => (
  <div className="gradient-background rounded-xl shadow-md mt-5 first:mt-0">
    <div className="bg-neutral-100 hover:bg-transparent rounded-xl p-1 transition duration-200">
      <div className="bg-neutral-100 rounded-lg px-3 py-3">
        <Links links={links} />
        <span className="font-bold text-xl">{title}</span>

        {text && (
          <>
            <br />
            <span>{text}</span>
          </>
        )}

        {(tags?.length > 0 || status) && (
          <>
            <br />
            <Tags
              tags={
                status
                  ? [
                      {
                        text: status,
                        color: status.startsWith('finished')
                          ? 'green'
                          : status.startsWith('abandoned')
                          ? 'red'
                          : 'yellow',
                      },
                      ...tags,
                    ]
                  : tags
              }
            />
          </>
        )}
      </div>
    </div>
  </div>
)

export default Card

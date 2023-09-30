import { hasValue, splitList } from '@abw/badger-utils'

export const joinClasses = classes => classes
  .filter( i => hasValue(i) && i )
  .join(' ')
  .replace(/^\s+/, '')
  .replaceAll(/\s+/g, ' ')

export const classes = (options, classes={}, ...more) =>
  joinClasses(
    Object.entries(options).reduce(
      (all, [name, set]) => {
        if (set) {
          all.push(classes[name] || name)
        }
        return all
      },
      [...more]
    )
  )

export const classNames = (options, names='', ...more) =>
  joinClasses([
    ...splitList(names).filter( name => options[name] ),
    ...more
  ])

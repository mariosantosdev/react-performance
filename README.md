# React Performance

## When utilize Memo

The memo is used if you want to render a component only if it's props change.

- When is a PureComponent.
- Re-renders with same props
- When a component is medium or large, it's a good idea to use Memo.

## When utilize useMemo

The useMemo is used to memoize the result of a function.

- Higher calcs
- Referencial igualation

## When utilize useCallback

The useCallback is used to memoize a function.

- When a function is passed on children props, to prevent re-rendering.

## Where format data

The format data is better do togheter with function that return a list of data, it's prevent to re-render the list.

## When utilize Dynamic Import (Code Splitting/Import with Lazy Loading)

Then Dynamic Import is used to import a component dynamically just on necessary.

## React Virtualized

The React Virtualized is used to render a lot of data in browser without to load all data in memory.
It's help the performance of the browser.

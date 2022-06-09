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

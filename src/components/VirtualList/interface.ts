export type RenderFunc<T> = (
  item: T,
  index: number,
  props: { style?: React.CSSProperties }
) => React.ReactNode;

export type GetKey<T> = (item: T) => React.Key;

export interface SharedConfig<T> {
  getKey: (item: T) => React.Key;
}

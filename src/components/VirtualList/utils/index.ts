export default class CacheMap {
  maps: Record<string, number>;
  id: number = 0;

  constructor() {
    this.maps = Object.create(null);
  }

  set(key: React.Key, value: number) {
    this.maps[key as string] = value;
    this.id += 1;
  }

  get(key: React.Key) {
    return this.maps[key as string];
  }
}

import { cp } from "fs";

export type CacheEntry<T> = {
    createdAt: number,
    val: T
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, {
        createdAt: Date.now(),
        val
    });
  }

  get<T>(key: string) {
    if (this.#cache.has(key)) {
        return this.#cache.get(key)?.val
    }
    return;
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }

  #reap() {
    const now = Date.now();
    for (let [key, val] of this.#cache) {
        if (val.createdAt <= now - this.#interval) {
            this.#cache.delete(key);
        }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
        this.#reap()
    }, this.#interval)
  }
}
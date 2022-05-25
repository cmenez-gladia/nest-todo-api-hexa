export interface Mapper<T> {
    toDomain(raw: Record<string, any>): T;
    toPersistence(entity: T): Record<string, any>;
  }
  
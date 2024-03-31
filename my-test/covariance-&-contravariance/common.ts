export interface Fans {
  call(): void;
}

export interface IKun extends Fans {
  dance(): void;
  sing(): void;
  basketball(): void;
}

export interface SuperIKun extends IKun {
  rap(): void;
}

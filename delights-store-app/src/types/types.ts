export type MenuType={
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export type ProductType={
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: {title: string, additionalPrice: string}[];
};

export type OrderType = {
    id: string;
    userEmail: string;
    price: number;

    status: string;
    createdAt: Date;
    intent_id?: String;
  };
type Database = {
  public: {
    Enums: {
      role: 'designer' | 'developer';
    };
  };
};

export type TUser = {
  created_at: string | null;
  email: string;
  user_id: string;
  avatar_url: string | null;
  password: string;
  role: Database['public']['Enums']['role'];
  username: string | null;
};

export type TCoin = {
  created_at: string | null;
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  tokenAmount: string;
  exchangeRate: number;
  valueInVNDC: string;
  dateAcquired?: string | null;
  image: string | null;
};

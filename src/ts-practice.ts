type User = {
  id: number;
  username: string;
  isAdmin: boolean;
  bio?: string;
};

const userWithBio: User = {
  id: 1,
  username: "sora",
  isAdmin: true,
  bio: "I am a software engineer",
};

const userWithoutBio: User = {
  id: 2,
  username: "taro",
  isAdmin: false,
};
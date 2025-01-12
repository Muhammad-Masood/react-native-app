type JobCardType = {
  id: number;
  title: string;
  location: string;
  pay: string;
};

type ReviewType = {
  id: number;
  reviewer: string;
  comment: string;
};

type WorkerCardType = {
  id: number;
  name: string;
  skill: string;
  rating: number;
  bio: string;
  profileImage: string;
  contact: string;
  reviews: ReviewType[];
};

export { JobCardType, WorkerCardType };

// type JobCardType = {
//   id: number;
//   title: string;
//   location: string;
//   pay: string;
// };

type JobDetailsType = {
  id: number;
  title: string;
  description: string;
  postedBy: string;
  location: string;
  postedOn: string;
  budget: string;
  contact: string;
};

type ReviewType = {
  id: number;
  reviewer: string;
  comment: string;
};

type WorkerDetailsType = {
  id: number;
  name: string;
  skill: string;
  rating: number;
  bio: string;
  profileImage: string;
  contact: string;
  reviews: { id: number; reviewer: string; comment: string }[];
};

export { JobDetailsType, WorkerDetailsType };

type JobCardType = {
  id: number;
  title: string;
  location: string;
  pay: string;
};

type WorkerCardType = {
  id: number;
  name: string;
  skill: string;
  rating: number;
};

export {JobCardType, WorkerCardType}
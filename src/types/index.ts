import { Timestamp ,FieldValue} from "firebase/firestore";

export interface User{
    id:string;
    name:string;
    email:string;
    imageUrl:string;
    createdAt:Timestamp|FieldValue;
    UpdateAt:Timestamp|FieldValue;
}

export interface Interview{
    questions: any;
    id:string;
    position:string;
    description:string;
   experience:number;
    userId:string;
    techStack:string;
    question:{question:string; answer:string}[];
    createdAt:Timestamp;
    UpdateAt:Timestamp;
}

export interface UserAnswer {
  id: string;
  mockIdRef: string;
  question: string;
  correct_ans: string;
  user_ans: string;
  feedback: string;
  rating: number;
  userId: string;
  createdAt: Timestamp;
  updateAt: Timestamp;
}
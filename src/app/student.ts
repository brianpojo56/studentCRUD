import { Course } from './course';

export class Student {
  id: string;
  Name: string;
  ChargerID: string;
  Anumber: string;
  Gender: string;
  Level: string;
  Courses: Course[] = [];
};

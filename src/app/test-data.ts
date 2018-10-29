import { University } from './university';
import { Student } from './student';
import { Course } from './course';

export const UNIVERSITY: University = {
	"StudentList": [{
			"Name": "Aron van",
			"ChargerID": "AR0011",
			"Anumber": "25264532",
			"Gender": "male",
			"Level": "Graduate",
			"Courses": [{
					"Name": "Java Programming",
					"CrnNo": "9076",
					"Lecturer": "karan joshi",
					"Code": "CS343"
				},
				{
					"Name": "C Programming",
					"CrnNo": "9077",
					"Lecturer": "Chris feilding",
					"Code": "CS343"
				}
			]
		},

		{
			"Name": "Brad Cooper",
			"ChargerID": "BC0022",
			"Anumber": "25264556",
			"Gender": "male",
			"Level": "Graduate",
			"Courses": [{
					"Name": "Java Programming",
					"CrnNo": "9076",
					"Lecturer": "karan joshi",
					"Code": "CS343"
				},
				{
					"Name": "C Programming",
					"CrnNo": "9077",
					"Lecturer": "Chris feilding",
					"Code": "CS343"
				}
			]
		}
	]
};

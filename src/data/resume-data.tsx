import {
	ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
	name: "Huy Ly",
	initials: "huylg",
	location: "Saigon, Vietnam",
	locationLink: "https://www.google.com/maps/place/saigon",
	about:
		"Detail-oriented Software Engineer dedicated to building high-quality products.",
	summary:
		`As a Software Engineer, I specialize in taking products from idea to feature. I excel in developing mobile products and working closely with designers, product managers, and other software engineers to create high-quality products within reasonable timelines. Currently, I work mostly with Dart and Flutter. I have over 5 years of professional experience in the software development field.`,
	avatarUrl: "https://raw.githubusercontent.com/huylg/cv/master/image/avatar.png",
	personalWebsiteUrl: "https://jarocki.me",
	contact: {
		email: "huyly11111998.hcmus@gmail.com",
		tel: "+84393172020",
		social: [
			{
				name: "GitHub",
				url: "https://github.com/huylg",
				icon: GitHubIcon,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/huy-ly-82b053170/",
				icon: LinkedInIcon,
			}
		],
	},
	education: [
		{
			school: "Ho Chi Minh City University of Science",
			degree: "Bachelor's Degree in Software Engineering",
			start: "2016",
			end: "2020",
		},
	],
	"work": [
		{
			"company": "BE Group",
			"link": "https://be.com.vn",
			"badges": [],
			"title": "Software Engineer",
			"start": "Aug 2023",
			"end": null,
			"description": "Implemented new features: Rail hailing promotion, Challenge, Loyalty, Voucher, Gift, Subscription, and Game with Flutter"
		},
		{
			"company": "Secutix Group",
			"link": "https://www.secutix.com",
			"badges": [],
			"title": "Software Engineer",
			"start": "Nov 2020",
			"end": "Aug 2023",
			"description": "Implemented new features: Mobile ticketing app, Event organizer backoffice, and Internal portal with Flutter"
		},
		{
			"company": "VNG Corporation",
			"link": "https://www.vng.com.vn",
			"badges": ["Intern"],
			"title": "Software Developer Fresher",
			"start": "Jul 2019",
			"end": "Aug 2020",
			"description": "Implemented new features and fixed bugs"
		}
	],
	skills: [
		"Dart",
		"Flutter",
	],
	projects: [
		{
			title: "BE app",
			techStack: [
				"Flutter",
				"Dart",
			],
			description:
				"The Be app offers a range of services including motorbike and car bookings, airline tickets, intercity bus travel, express delivery, and more. To date, it has been trusted and used by 10 million customers.",
			link: {
				href: "https://apps.apple.com/vn/app/be-multi-service-platform/id1440565902",
			},
		},
		{
			title: "Tixngo app",
			techStack: [
				"Flutter",
				"Dart",
			],
			description:
				"TIXNGO has been used to sell millions of tickets around the world, it has helped some of the world’s leading sports events and live performers to tackle fraud and fan exploitation.",
			link: {
				href: "https://apps.apple.com/vn/app/tixngo/id1441629098",
			},
		},
		{
			title: "vCloudCam",
			techStack: [
				"iOS",
				"Swift",
			],
			description:
				"Cloudcam is a product of VNG Cloud, providing online monitoring and storage services on cloud computing technology platform.",
			link: {
				href: "https://apps.apple.com/vn/app/vcloudcam/id1439880879",
			},
		},
	],
} as const;

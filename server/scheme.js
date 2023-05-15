const trips = [
	{
		name: "Путешествие в горы",
		price: "от 80 000 руб",
		link: "/trip/journey-to-the-mountains",
		imgSrc: "choose-your-tour/card tour photo-1.jpg",
		category: "Популярные",
	},
	{
		name: "На поезде через сингапур",
		price: "от 25 000 руб",
		link: "/trip/through-singapore-on-train",
		imgSrc: "choose-your-tour/card tour photo-2.jpg",
		category: "Популярные",
	},
	{
		name: "Вдали от дома",
		price: "от 55 000 руб",
		link: "/trip/away-from-home",
		imgSrc: "choose-your-tour/card tour photo-3.jpg",
		category: "Популярные",
	},
	{
		name: "Неделя выживания в джунглях",
		price: "от 120 000 руб",
		link: "/trip/in-the-jungle",
		imgSrc: "choose-your-tour/card tour photo-4.jpg",
		category: "Популярные",
	},
	{
		name: "Вечеринка на аэростате",
		price: "от 65 000 руб",
		link: "/trip/party-at-aerostat",
		imgSrc: "choose-your-tour/card tour photo-5.jpg",
		category: "Популярные",
	},
	{
		name: "Исследование подводных глубин",
		price: "от 59 000 руб",
		link: "/trip/below-zero",
		imgSrc: "choose-your-tour/card tour photo-6.jpg",
		category: "Популярные",
	},
	{
		name: "В деревне",
		price: "от 15 000 руб",
		link: "/trip/in-the-willage",
		imgSrc: "choose-your-tour/card tour photo-7.avif",
		category: "Авторские",
	},
	{
		name: "Землянка в лесу",
		price: "от 25 000 руб",
		link: "/trip/in-the-forest",
		imgSrc: "choose-your-tour/card tour photo-8.jpg",
		category: "Авторские",
	},
	{
		name: "Прогулка по чернобылю",
		price: "от 95 000 руб",
		link: "/trip/walk-at-chernobyl",
		imgSrc: "choose-your-tour/card tour photo-9.avif",
		category: "Авторские",
	},
	{
		name: "Мыс Лизард",
		price: "от 30 000 руб",
		link: "/trip/hike-at-lizard",
		imgSrc: "choose-your-tour/card tour photo-10.jpg",
		category: "Походы",
	},
	{
		name: "Голубая тропа в Чинкве-Терре",
		price: "от 40 000 руб",
		link: "/trip/blue-pathway",
		imgSrc: "choose-your-tour/card tour photo-11.jpg",
		category: "Походы",
	},
	{
		name: "Утес Прекестулен",
		price: "от 40 000 руб",
		link: "/trip/preikestolen-cliff",
		imgSrc: "choose-your-tour/card tour photo-12.jpg",
		category: "Походы",
	},
	{
		name: "Трекинг вокруг Монблана",
		price: "от 35 000 руб",
		link: "/trip/Trekking-around-Mont-Blanc",
		imgSrc: "choose-your-tour/card tour photo-13.jpg",
		category: "Походы",
	},
	{
		name: "Выходные на реке Шуя в Карелии",
		price: "от 45 000 руб",
		link: "/trip/weekends-in-karelia",
		imgSrc: "choose-your-tour/card tour photo-14.jpeg",
		category: "Сплавы",
	},
	{
		name: "Сплав по рекам Якутии. Синяя и Лена",
		price: "от 55 000 руб",
		link: "/trip/splav-jakutia",
		imgSrc: "choose-your-tour/card tour photo-15.jpg",
		category: "Сплавы",
	},
	{
		name: "СПЛАВ живописная река ЧУСОВАЯ, Пермский край, Урал!",
		price: "от 48 000 руб",
		link: "/trip/ural",
		imgSrc: "choose-your-tour/card tour photo-16.jpg",
		category: "Сплавы",
	},
	{
		name: "Экотур по древнерусским городам",
		price: "от 8 000 руб",
		link: "/trip/ancient-russian-towns",
		imgSrc: "choose-your-tour/card tour photo-17.jpg",
		category: "Велопрогулки",
	},
	{
		name: "Охота на троллей в норвежских горах",
		price: "от 16 000 руб",
		link: "/trip/trolls-in-northern-mountains",
		imgSrc: "choose-your-tour/card tour photo-18.jpg",
		category: "Велопрогулки",
	},
];

const destinations = [
	{
		id: 1,
		destination: "Путешествие в горы",
	},
];

const reviews = [
	{
		tripName: "Вдали от дома",
		username: "Мария",
		userAvatarSrc: "review photo-1.jpg",
		text: [
			"Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.",
		],
	},
	{
		tripName: "Путешествие в горы",
		username: "Павел",
		userAvatarSrc: "review photo-2.jpg",
		text: [
			"Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.",
			"Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.",
		],
	},
];

const photosGallery = [
	{
		src: "1.png",
		name: "photo1",
	},
];

const stories = [
	{
		tripName: "Автостопом в Стамбул",
		text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
		list: ["вкусная еда", "дешевый транспорт", "красивый город."],
		imgSrc: "story photo-1.jpg",
		link: "/trip/ural",
		socialLinks: [
			{
				name: "instagram",
				url: "https://www.instagram.com",
			},
			{
				name: "facebook",
				url: "https://www.facebook.com",
			},
			{
				name: "YouTube",
				url: "https://www.youtube.com",
			},
		],
	},
	{
		tripName: "Автостопом в Стамбул",
		text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
		imgSrc: "story photo-2.jpg",
		link: "/trip/trolls-in-northern-mountains",
		socialLinks: [
			{
				name: "instagram",
				url: "https://www.instagram.com",
			},
			{
				name: "ВКонтакте",
				url: "https://www.vk.com",
			},
		],
	},
	{
		tripName: "Автостопом в Стамбул",
		text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
		imgSrc: "story photo-3.jpg",
		link: "/trip/ancient-russian-towns",
		socialLinks: [
			{
				name: "instagram",
				url: "https://www.instagram.com",
			},
			{
				name: "facebook",
				url: "https://www.facebook.com",
			},
			{
				name: "ВКонтакте",
				url: "https://www.vk.com",
			},
		],
	},
];

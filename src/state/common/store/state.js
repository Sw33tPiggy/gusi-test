export const state = {
	products: {
		products: [
			{
				id: 42355,
				title: "Игрушка Король",
				description:
					"Игрушка Король. Возвраст 5+. Материал плюш. Страна производства - Болгария",
				price: 11990,
			},
			{
				id: 63479,
				title: "Певец Король",
				description:
					"Игрушка Король. Возвраст 5+. Материал плюш. Страна производства - Болгария",
				price: 18990,
			},
			{
				id: 45018,
				title: "Просто Король",
				description:
					"Игрушка Король. Возвраст 5+. Материал плюш. Страна производства - Болгария",
				price: 1400,
			},
		],
	},
	auth: {
		isAuthorized: !!document.cookie
			.split("; ")
			.find((row) => row.startsWith("isAuthorized")),
	},
};

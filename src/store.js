import Vue from 'vue'
import Vuex from 'vuex'

Vue.useAttrs(Vuex)

const store = new Vuex.Store({
	state: {
		posts: [
			{
				id: 1,
				date: "",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "Did you know that Tartu is the culture capital of the world in 2024? #Tartu2024",
				img: "https://www.tartu.ee/sites/default/files/field/image/tartu2024-Maam2rk-meeskonnapilt-kiurkaasik-7.jpg",
				likes: 0,
			},
			{
				id: 2,
				date: "",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "Life in tartu is so boring, no culture here am I right?",
				img: "",
				likes: 0,
			},
			{
				id: 3,
				date: "Oct 02, 2022",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: 'Hey qtpie, it looks like you haven\'t checked out my <a href="#">Onlyfans</a> page yet!',
				img: "",
				likes: 0,
			},
			{
				id: 4,
				date: "Sept 29, 2022",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "Some dank memes for my followers",
				img: "https://preview.redd.it/6d5tngnsv6r91.png?width=640&crop=smart&auto=webp&s=829033a225508c39fe6109ef1c3911fd24dae348",
				likes: 0,
			},
			{
				id: 5,
				date: "Jan 01, 2022",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "If I had a dollar for every bug I solve in a minute I'd earn an extra minimum wage #pleb",
				img: "",
				likes: 0,
			},
			{
				id: 6,
				date: "Nov 19, 2022",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "The sauna is nearly warm, get your behinds to physicum now. #sauna",
				img: "",
				likes: 0,
			},
			{
				id: 7,
				date: "Nov 20, 2022",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "Party tonight in Delta, get ready",
				img: "",
				likes: 0,
			},
			{
				id: 8,
				date: "Nov 20, 2022",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "Is anybody able to help me with my math homework. #send help",
				img: "",
				likes: 0,
			},
			{
				id: 9,
				date: "Nov 21, 2022",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "Honestly i want this semester to already end.",
				img: "",
				likes: 0,
			},
			{
				id: 10,
				date: "Nov 20, 2022",
				profile:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk",
				post: "There is too much month at the end of money. Looking for some work if anyone can hep hmu",
				img: "",
				likes: 0,
			},
		],
	},
});

export default store

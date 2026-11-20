import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
// src/config/menu.ts
var menu = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Sponsors",
		href: "/sponsors"
	},
	{
		label: "About",
		children: [{
			label: "History",
			href: "/history"
		}, {
			label: "Contact",
			href: "/contact"
		}]
	},
	{
		label: "Schedule",
		children: [
			{
				label: "Weekly Activities",
				href: "/weekly"
			},
			{
				label: "Tournaments",
				href: "/tournaments"
			},
			{
				label: "District",
				href: "/district"
			}
		]
	},
	{
		label: "Bowling Basics",
		children: [
			{
				label: "Learn to Play",
				href: "/learn"
			},
			{
				label: "Etiquette",
				href: "/etiquette"
			},
			{
				label: "Rules",
				href: "/rules"
			}
		]
	},
	{
		label: "Membership",
		children: [
			{
				label: "Join",
				href: "/join"
			},
			{
				label: "Executive",
				href: "/executive"
			},
			{
				label: "By-Laws",
				href: "/bylaws"
			}
		]
	},
	{
		label: "Gallery",
		children: [
			{
				label: "2026",
				href: "/gallery2026"
			},
			{
				label: "2025",
				href: "/gallery2025"
			},
			{
				label: "History",
				href: "/galleryHistory"
			}
		]
	}
];
// src/util/toggle.ts
function toggle(value) {
	return !value;
}
// src/components/Header/TopNav/TopNavContext.tsx
var TopNavContext = createContext(null);
// src/components/Header/TopNavContents/TopNavContents.tsx
function TopNavContents({ contents, open }) {
	return /* @__PURE__ */ jsx("div", {
		className: open ? "TopNavContents open" : "TopNavContents",
		children: contents.map((item) => /* @__PURE__ */ jsx(TopNavItem, {
			label: item.label,
			href: item.href,
			contents: item.children
		}, item.label))
	});
}
// src/components/LinkIcon/LinkIcon.tsx
function LinkIcon({ size = 16 }) {
	return /* @__PURE__ */ jsxs("svg", {
		className: "linkIcon",
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), /* @__PURE__ */ jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })]
	});
}
// src/components/Header/TopNavItem/TopNavItem.tsx
function TopNavItem({ label, href, contents = [] }) {
	const topNav = useContext(TopNavContext);
	const open = topNav?.activeMenu === label;
	if (contents.length === 0) return /* @__PURE__ */ jsxs("a", {
		className: "TopNavItem",
		href,
		children: [label, /* @__PURE__ */ jsx(LinkIcon, {})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "MenuList",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: "TopNavItem",
			"aria-expanded": open,
			onClick: () => topNav?.toggleMenu(label),
			children: [label, /* @__PURE__ */ jsx("span", {
				className: open ? "chevron open" : "chevron",
				"aria-hidden": "true",
				children: "▴"
			})]
		}), /* @__PURE__ */ jsx(TopNavContents, {
			contents,
			open
		})]
	});
}
// src/components/Header/TopNavItems/TopNavItems.tsx
function TopNavItems({ isOpen, menuData }) {
	return /* @__PURE__ */ jsx("div", {
		id: "topnav-items",
		className: `TopNav__items ${isOpen ? "TopNav__items--open" : ""}`,
		children: menuData.map((item) => /* @__PURE__ */ jsx(TopNavItem, {
			label: item.label,
			href: item.href,
			contents: item.children
		}, item.label))
	});
}
// src/components/Header/Hamburger/Hamburger.tsx
function Hamburger({ isOpen, onClick, controls }) {
	return /* @__PURE__ */ jsxs("button", {
		className: "Hamburger",
		"aria-label": "Menu",
		"aria-expanded": isOpen,
		"aria-controls": controls,
		onClick,
		children: [
			/* @__PURE__ */ jsx("span", { className: "Hamburger__bar" }),
			/* @__PURE__ */ jsx("span", { className: "Hamburger__bar" }),
			/* @__PURE__ */ jsx("span", { className: "Hamburger__bar" })
		]
	});
}
// src/assets/logo.avif
var logo_default = "/assets/logo-CTMnRrNJ.avif";
// src/components/Header/Logo/Logo.tsx
function Logo() {
	return /* @__PURE__ */ jsx("img", {
		className: "logo",
		src: logo_default,
		alt: "Guelph Lawn Bowling Club Logo"
	});
}
// src/components/Header/TopNav/TopNav.tsx
function TopNav() {
	const [activeMenu, setActiveMenu] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const toggleMenu = (label) => setActiveMenu((prev) => prev === label ? null : label);
	return /* @__PURE__ */ jsx(TopNavContext, {
		value: {
			activeMenu,
			toggleMenu
		},
		children: /* @__PURE__ */ jsxs("nav", {
			className: "TopNav",
			children: [
				/* @__PURE__ */ jsx(Hamburger, {
					isOpen: mobileOpen,
					onClick: () => setMobileOpen(toggle),
					controls: "topnav-items"
				}),
				/* @__PURE__ */ jsx(Logo, {}),
				/* @__PURE__ */ jsxs("div", {
					className: "TopNav__vbox",
					children: [/* @__PURE__ */ jsx("div", {
						className: "TopNav__title",
						children: "Guelph Lawn Bowling Club"
					}), /* @__PURE__ */ jsx(TopNavItems, {
						isOpen: mobileOpen,
						menuData: menu
					})]
				})
			]
		})
	});
}
// src/components/Header/Header.tsx
function Header() {
	return /* @__PURE__ */ jsx("div", {
		className: "Header",
		children: /* @__PURE__ */ jsx(TopNav, {})
	});
}
// src/assets/react.svg
var react_default = "/assets/react-l0KyhJbb.svg";
// src/assets/vite.svg
var vite_default = "/assets/vite-DaPnQ1cT.svg";
// src/components/Footer/Footer.tsx
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsxs("footer", {
		className: "Footer",
		children: [/* @__PURE__ */ jsxs("span", { children: [
			"© ",
			year,
			" Guelph Lawn Bowling Club"
		] }), /* @__PURE__ */ jsxs("span", {
			className: "Footer-built",
			children: [
				"Built with",
				/* @__PURE__ */ jsx("a", {
					href: "https://vite.dev",
					target: "_blank",
					rel: "noreferrer",
					children: /* @__PURE__ */ jsx("img", {
						src: vite_default,
						alt: "Vite"
					})
				}),
				/* @__PURE__ */ jsx("a", {
					href: "https://react.dev",
					target: "_blank",
					rel: "noreferrer",
					children: /* @__PURE__ */ jsx("img", {
						src: react_default,
						alt: "React"
					})
				})
			]
		})]
	});
}
// src/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	Layout: () => Layout,
	default: () => root_default
});
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [
			"                                      ",
			/* @__PURE__ */ jsxs("head", { children: [
				/* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
				"                      ",
				/* @__PURE__ */ jsx("link", {
					rel: "icon",
					type: "image/svg+xml",
					href: "/favicon.svg"
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "viewport",
					content: "width=device-width, initial-scale=1.0"
				}),
				/* @__PURE__ */ jsx("title", { children: "bowling_static" }),
				/* @__PURE__ */ jsx(Meta, {}),
				/* @__PURE__ */ jsx(Links, {})
			] }),
			/* @__PURE__ */ jsxs("body", { children: [
				children,
				"                                    ",
				/* @__PURE__ */ jsx(ScrollRestoration, {}),
				/* @__PURE__ */ jsx(Scripts, {}),
				"                                   "
			] })
		]
	});
}
var root_default = UNSAFE_withComponentProps(function Root() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
});
// src/components/Cards/PictureCard/PictureCard.tsx
function PictureCard({ title, image, content, color }) {
	const className = `Card Card--${color}`;
	const imgsrc = `/${image}`;
	return /* @__PURE__ */ jsx("div", {
		className,
		children: /* @__PURE__ */ jsxs("div", {
			className: "layout--hbox",
			children: [/* @__PURE__ */ jsx("img", {
				className: "Card__image",
				src: imgsrc
			}), /* @__PURE__ */ jsxs("div", {
				className: "layout--vbox",
				children: [/* @__PURE__ */ jsx("p", {
					className: "Card__title",
					children: title
				}), /* @__PURE__ */ jsx("div", {
					className: "Card__content",
					children: content
				})]
			})]
		})
	});
}
// src/components/Cards/TextCard/TextCard.tsx
function TextCard({ title, content, color }) {
	const className = `Card Card--${color}`;
	return /* @__PURE__ */ jsx("div", {
		className,
		children: /* @__PURE__ */ jsxs("div", {
			className: "layout--vbox",
			children: [/* @__PURE__ */ jsx("p", {
				className: "Card__title",
				children: title
			}), content && /* @__PURE__ */ jsx("div", {
				className: "Card__content",
				children: content
			})]
		})
	});
}
// src/components/Cards/CardContainer/CardContainer.tsx
function CardContainer({ content }) {
	return /* @__PURE__ */ jsx("div", {
		className: "CardContainer",
		children: content.map((datum) => datum.image ? /* @__PURE__ */ jsx(PictureCard, { ...datum }, datum.id) : /* @__PURE__ */ jsx(TextCard, { ...datum }, datum.id))
	});
}
// src/content/home.tsx
var content$2 = [{
	id: "welcome",
	title: "Welcome to the Guelph Lawn Bowling Club!",
	color: "blue",
	content: /* @__PURE__ */ jsxs("div", {
		className: "content--left",
		children: [
			"We’re 188 years young and going strong! The Guelph Lawn Bowling Club was established in 1838 and new members are always welcome to join the fun in the heart of the Royal City. We’re the second oldest recreational sport club in Guelph (curling is the oldest).",
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("a", {
				href: "https://www.cbc.ca/news/canada/kitchener-waterloo/guelph-lawn-bowling-club-lawn-bowling-beginner-1.6919931",
				children: "Check out an article about our club from the CBC"
			})
		]
	})
}, {
	id: "reopen",
	title: "We reopen May 2027!",
	color: "green",
	image: "bowls.avif"
}];
// src/pages/Home/Home.tsx
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => Home_default });
var Home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(CardContainer, { content: content$2 });
});
// src/pages/WeeklyEvents/EventCard/EventCard.tsx
function EventCard({ color, weekday, title, time, description }) {
	const className = `EventCard EventCard--${color}`;
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "EventCard-weekday",
				children: weekday
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "EventCard-title",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "EventCard-time",
				children: time
			}),
			/* @__PURE__ */ jsx("div", {
				className: "EventCard-description",
				children: description
			})
		]
	});
}
// src/content/events.tsx
var content$1 = [
	{
		color: "blue",
		weekday: "Monday",
		title: "New Bowlers Friendly",
		time: "7:00pm - 10:00pm",
		description: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { children: "Start your week with a relaxed game! Join us every Monday evening for our Friendly Social Bowl — perfect for new bowlers. No experience needed, and if you're new, your first session is free. Come meet the community and try something new on the green!" }) })
	},
	{
		color: "yellow",
		weekday: "Tuesday",
		title: "4321 Social Bowl - $2",
		time: "7:00pm - 10:00pm",
		description: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("p", { children: "Test your skills in a fast-paced game of 4321! Join us Tuesday nights for light competition and community fun. Just $2 to play—open to all skill levels. Come solo or bring a friend!" }),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("p", { children: "Matches arranged according to attendance." })
		] })
	},
	{
		color: "green",
		weekday: "Wednesday",
		title: "Singles",
		time: "7:00pm - 10:00pm",
		description: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("p", { children: "Come enjoy a friendly game of singles in a welcoming, social atmosphere. This night is all about fun, not competition. Great for bowlers who want to focus on their game at their own pace." }),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("i", { children: "* The first Wednesday of each month the greens are closed for maintenance." }) })
		] })
	},
	{
		color: "pink",
		weekday: "Thursday",
		title: "Motley - $2",
		time: "7:00pm - 10:00pm",
		description: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("p", { children: "Join us for a relaxed evening of short-format lawn bowling! Each game is just 5 ends, keeping things quick and fun with rotating partners and opponents." }),
			/* @__PURE__ */ jsx("p", { children: "Just $2 to play, and prizes every 4 weeks." }),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("p", { children: "Format adjusts based on turnout—perfect for casual players looking for variety and a good time." })
		] })
	},
	{
		color: "orange",
		weekday: "Friday",
		title: "Open Bowling & Special Events",
		time: "Time varies based on event",
		description: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("p", { children: "Drop by and bowl at your own pace! Our Open Bowling sessions are perfect for casual roll-ups or bringing friends to try the game." }),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("p", { children: "Keep an eye out for Special Events—from theme nights to fun challenges—there's always something different happening on the green. All are welcome!" })
		] })
	},
	{
		color: "purple",
		weekday: "Saturday",
		title: "Open Bowling & Tournaments",
		time: "Time varies based on event",
		description: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { children: "Whether you're in the mood for a relaxed roll-up or ready to test your skills, we've got you covered! Open Bowling lets you play at your own pace, while scheduled Tournaments offer a chance for friendly competition. Check the calendar for upcoming dates—everyone's welcome!" }) })
	},
	{
		color: "teal",
		weekday: "Sunday",
		title: "Youth Bowls",
		time: "3:30pm Start",
		description: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", {
			style: { textAlign: "center" },
			children: /* @__PURE__ */ jsx("b", { children: "Begins June 28th" })
		}), /* @__PURE__ */ jsx("p", { children: "A fantastic opportunity for young players to get into lawn bowling! Our Youth Bowling sessions offer hands-on instruction from experienced coaches in a fun and supportive environment. Perfect for beginners—come learn the game and build skills while having a great time on the green!" })] })
	}
];
// src/pages/WeeklyEvents/WeeklyEvents.tsx
var WeeklyEvents_exports = /* @__PURE__ */ __exportAll({ default: () => WeeklyEvents_default });
var WeeklyEvents_default = UNSAFE_withComponentProps(function WeeklyEvents() {
	return /* @__PURE__ */ jsx("div", {
		className: "WeeklyEvents",
		children: content$1.map((event) => /* @__PURE__ */ jsx(EventCard, { ...event }, event.weekday))
	});
});
// src/content/groupEvents.tsx
var content = [
	{
		id: "group-fun",
		title: "Group Fun at the Club",
		color: "green",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", { children: "Consider group lawn bowling for your next corporate team-building event, birthday party, family reunion or social event. Lawn bowling is a fun, light impact sport enjoyed around the world by people from 5 to 105 years of age." }), /* @__PURE__ */ jsx("p", { children: "All you need is a pair of flat-sole shoes. That’s it. It doesn’t get much easier than that." })] })
	},
	{
		id: "groups-receive",
		title: "Groups Receive",
		color: "blue",
		content: /* @__PURE__ */ jsxs("ul", { children: [
			/* @__PURE__ */ jsx("li", { children: "A lawn bowling lesson" }),
			/* @__PURE__ */ jsx("li", { children: "Bowls (balls) to use at the event. We have Junior Balls for young players and special equipment for those with reduced mobility" }),
			/* @__PURE__ */ jsx("li", { children: "Access to our club house for washrooms. Use of the clubhouse with kitchen and meeting space can be arranged" }),
			/* @__PURE__ */ jsx("li", { children: "Use of the facility for approximately two hours weekday afternoons or weekends. Groups of 16 people or more will have exclusive use" })
		] })
	},
	{
		id: "setup",
		title: "We Do the Set-Up",
		color: "yellow",
		image: "clubhouse.avif",
		content: /* @__PURE__ */ jsx(Fragment, { children: "We can accommodate groups of up to 40 people at our facility in the heart of Guelph (114 Gordon Street)." })
	},
	{
		id: "parking",
		title: "Parking",
		color: "white",
		content: /* @__PURE__ */ jsx(Fragment, { children: "Parking is usually available in the lot next to the lawn bowling club at no cost, but it does get busy. If the lot is full, there is street parking in the area." })
	},
	{
		id: "weather",
		title: "Weather",
		color: "teal",
		content: /* @__PURE__ */ jsx(Fragment, { children: "Hopefully it will be blue skies when you bowl with us. If it rains, we’ll do our best to reschedule your event soon after the original date, however, we’re at the mercy of the weather and other events in our calendar." })
	},
	{
		id: "charge",
		title: "Charge",
		color: "orange",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", { children: "We’re a not-for-profit club so your payment is genuinely appreciated." }), /* @__PURE__ */ jsxs("ul", { children: [
			/* @__PURE__ */ jsx("li", { children: "Non-members: $20 per person" }),
			/* @__PURE__ */ jsx("li", { children: "Families and friends of members: $15 per person" }),
			/* @__PURE__ */ jsx("li", { children: "Use of the clubhouse for functions has a separate cost" })
		] })] })
	},
	{
		id: "food",
		title: "Food & Drinks",
		color: "red",
		content: /* @__PURE__ */ jsx(Fragment, { children: "You or your caterer are responsible for food, beverages, and clean up. The club house is not a licensed facility." })
	},
	{
		id: "book",
		title: "Book Your Group Event Today",
		color: "purple",
		content: /* @__PURE__ */ jsx(Fragment, { children: "Do you have an event in mind? Our group event organizer is happy to help. Contact us through " })
	}
];
// src/pages/GroupEvents/GroupEvents.tsx
var GroupEvents_exports = /* @__PURE__ */ __exportAll({ default: () => GroupEvents_default });
var GroupEvents_default = UNSAFE_withComponentProps(function GroupEvents() {
	return /* @__PURE__ */ jsx(CardContainer, { content });
});
// src/pages/NotFound/NotFound.tsx
var NotFound_exports = /* @__PURE__ */ __exportAll({ default: () => NotFound_default });
var NotFound_default = UNSAFE_withComponentProps(function NotFound() {
	return /* @__PURE__ */ jsx("div", {
		className: "NotFound",
		children: "404 Page Not Found"
	});
});
// \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-DQtpshsi.js",
		"imports": ["/assets/jsx-runtime-CAH43xVG.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-BwV6Vhd1.js",
			"imports": ["/assets/jsx-runtime-CAH43xVG.js"],
			"css": ["/assets/root-ik7lBWjc.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Home/Home": {
			"id": "pages/Home/Home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Home-DGq9bSvg.js",
			"imports": ["/assets/jsx-runtime-CAH43xVG.js", "/assets/CardContainer-B4T6xB5M.js"],
			"css": ["/assets/CardContainer-DwnmbZUb.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/WeeklyEvents/WeeklyEvents": {
			"id": "pages/WeeklyEvents/WeeklyEvents",
			"parentId": "root",
			"path": "weekly",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/WeeklyEvents-CcLOqk9Y.js",
			"imports": ["/assets/jsx-runtime-CAH43xVG.js"],
			"css": ["/assets/WeeklyEvents-BhPu7e8J.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/GroupEvents/GroupEvents": {
			"id": "pages/GroupEvents/GroupEvents",
			"parentId": "root",
			"path": "groupEvents",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/GroupEvents-BHYmgfcf.js",
			"imports": ["/assets/jsx-runtime-CAH43xVG.js", "/assets/CardContainer-B4T6xB5M.js"],
			"css": ["/assets/GroupEvents-x1XGuNl0.css", "/assets/CardContainer-DwnmbZUb.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/NotFound/NotFound": {
			"id": "pages/NotFound/NotFound",
			"parentId": "root",
			"path": "*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/NotFound-DuevXLTr.js",
			"imports": ["/assets/jsx-runtime-CAH43xVG.js"],
			"css": ["/assets/GroupEvents-x1XGuNl0.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-8cd40d97.js",
	"version": "8cd40d97",
	"sri": void 0
};
// \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_customRouteDiscovery": false,
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = false;
var unstable_apiOnly = false;
var unstable_apiServerOrigin = void 0;
var isSpaMode = false;
var prerender = [
	"/",
	"/weekly",
	"/groupEvents"
];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"pages/Home/Home": {
		id: "pages/Home/Home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: Home_exports
	},
	"pages/WeeklyEvents/WeeklyEvents": {
		id: "pages/WeeklyEvents/WeeklyEvents",
		parentId: "root",
		path: "weekly",
		index: void 0,
		caseSensitive: void 0,
		module: WeeklyEvents_exports
	},
	"pages/GroupEvents/GroupEvents": {
		id: "pages/GroupEvents/GroupEvents",
		parentId: "root",
		path: "groupEvents",
		index: void 0,
		caseSensitive: void 0,
		module: GroupEvents_exports
	},
	"pages/NotFound/NotFound": {
		id: "pages/NotFound/NotFound",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: NotFound_exports
	}
};
var allowedActionOrigins = false;
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr, unstable_apiOnly, unstable_apiServerOrigin };

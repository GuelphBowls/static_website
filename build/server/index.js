import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
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
			},
			{
				label: "Group Events",
				href: "/group"
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
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
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
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function Root() {
	return /* @__PURE__ */ jsxs("div", {
		id: "root",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
});
// src/components/Cards/CardDataTypes.ts
var bem = (base, mods = []) => {
	const classes = [base];
	for (const mod of mods) {
		if (!mod) continue;
		for (const part of mod.split(" ")) if (part) classes.push(`${base}--${part}`);
	}
	return classes.join(" ");
};
// src/components/Cards/CardColorContext/CardColorContext.tsx
var CardColorContext = createContext(void 0);
var useCardColor = () => useContext(CardColorContext);
// src/components/Cards/Card/Card.tsx
function Card({ color = "blue", children }) {
	const className = bem("Card", [color]);
	return /* @__PURE__ */ jsx(CardColorContext, {
		value: color,
		children: /* @__PURE__ */ jsx("div", {
			className,
			children: /* @__PURE__ */ jsx("div", {
				className: "layout--vbox",
				children
			})
		})
	});
}
// src/components/Cards/CardTitle/CardTitle.tsx
function CardTitle({ children, styles }) {
	const className = bem("CardTitle", [useCardColor(), styles]);
	return /* @__PURE__ */ jsx("div", {
		className,
		children
	});
}
// src/components/Cards/CardContent/CardContent.tsx
function CardContent({ styles, children }) {
	const className = bem("CardContent", [styles]);
	return /* @__PURE__ */ jsx("div", {
		className,
		children
	});
}
// src/components/Cards/CardContainer/CardContainer.tsx
function CardContainer({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "CardContainer",
		children
	});
}
// src/assets/bowls.avif
var bowls_default = "/assets/bowls-BCArHJBW.avif";
// src/pages/Home/Home.tsx
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => Home_default });
var Home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx("div", {
		className: "Home",
		children: /* @__PURE__ */ jsxs(CardContainer, { children: [/* @__PURE__ */ jsxs(Card, {
			color: "blue",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Welcome to the Guelph Lawn Bowling Club!"
			}), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", {
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
			}) })]
		}), /* @__PURE__ */ jsxs(Card, {
			color: "green",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "We reopen May 2027!"
			}), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("img", {
				src: bowls_default,
				alt: "Lawn bowls on the green"
			}) })]
		})] })
	});
});
// src/pages/WeeklyEvents/WeeklyEvents.tsx
var WeeklyEvents_exports = /* @__PURE__ */ __exportAll({ default: () => WeeklyEvents_default });
var WeeklyEvents_default = UNSAFE_withComponentProps(function WeeklyEvents() {
	return /* @__PURE__ */ jsxs(CardContainer, { children: [
		/* @__PURE__ */ jsxs(Card, {
			color: "blue",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Monday"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "New Bowlers Friendly"
				}),
				/* @__PURE__ */ jsx(CardTitle, { children: "7:00pm - 10:00pm" }),
				/* @__PURE__ */ jsx(CardContent, {
					styles: "left",
					children: /* @__PURE__ */ jsx("p", { children: "Start your week with a relaxed game! Join us every Monday evening for our Friendly Social Bowl — perfect for new bowlers. No experience needed, and if you're new, your first session is free. Come meet the community and try something new on the green!" })
				})
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "yellow",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Tuesday"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "4321 Social Bowl - $2"
				}),
				/* @__PURE__ */ jsx(CardTitle, { children: "7:00pm - 10:00pm" }),
				/* @__PURE__ */ jsxs(CardContent, {
					styles: "left",
					children: [
						/* @__PURE__ */ jsx("p", { children: "Test your skills in a fast-paced game of 4321! Join us Tuesday nights for light competition and community fun. Just $2 to play—open to all skill levels. Come solo or bring a friend!" }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("p", { children: "Matches arranged according to attendance." })
					]
				})
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "green",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Wednesday"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "Singles"
				}),
				/* @__PURE__ */ jsx(CardTitle, { children: "7:00pm - 10:00pm" }),
				/* @__PURE__ */ jsxs(CardContent, {
					styles: "left",
					children: [
						/* @__PURE__ */ jsx("p", { children: "Come enjoy a friendly game of singles in a welcoming, social atmosphere. This night is all about fun, not competition. Great for bowlers who want to focus on their game at their own pace." }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("i", { children: "* The first Wednesday of each month the greens are closed for maintenance." }) })
					]
				})
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "pink",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Thursday"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "Motley - $2"
				}),
				/* @__PURE__ */ jsx(CardTitle, { children: "7:00pm - 10:00pm" }),
				/* @__PURE__ */ jsxs(CardContent, {
					styles: "left",
					children: [
						/* @__PURE__ */ jsx("p", { children: "Join us for a relaxed evening of short-format lawn bowling! Each game is just 5 ends, keeping things quick and fun with rotating partners and opponents." }),
						/* @__PURE__ */ jsx("p", { children: "Just $2 to play, and prizes every 4 weeks." }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("p", { children: "Format adjusts based on turnout—perfect for casual players looking for variety and a good time." })
					]
				})
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "orange",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Friday"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "Open Bowling & Special Events"
				}),
				/* @__PURE__ */ jsx(CardTitle, { children: "Time varies based on event" }),
				/* @__PURE__ */ jsxs(CardContent, {
					styles: "left",
					children: [
						/* @__PURE__ */ jsx("p", { children: "Drop by and bowl at your own pace! Our Open Bowling sessions are perfect for casual roll-ups or bringing friends to try the game." }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("p", { children: "Keep an eye out for Special Events—from theme nights to fun challenges—there's always something different happening on the green. All are welcome!" })
					]
				})
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "purple",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Saturday"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "Open Bowling & Tournaments"
				}),
				/* @__PURE__ */ jsx(CardTitle, { children: "Time varies based on event" }),
				/* @__PURE__ */ jsx(CardContent, {
					styles: "left",
					children: /* @__PURE__ */ jsx("p", { children: "Whether you're in the mood for a relaxed roll-up or ready to test your skills, we've got you covered! Open Bowling lets you play at your own pace, while scheduled Tournaments offer a chance for friendly competition. Check the calendar for upcoming dates—everyone's welcome!" })
				})
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "teal",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Sunday"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "Youth Bowls"
				}),
				/* @__PURE__ */ jsx(CardTitle, { children: "3:30pm Start" }),
				/* @__PURE__ */ jsxs(CardContent, {
					styles: "left",
					children: [/* @__PURE__ */ jsx("p", {
						style: { textAlign: "center" },
						children: /* @__PURE__ */ jsx("b", { children: "Begins June 28th" })
					}), /* @__PURE__ */ jsx("p", { children: "A fantastic opportunity for young players to get into lawn bowling! Our Youth Bowling sessions offer hands-on instruction from experienced coaches in a fun and supportive environment. Perfect for beginners—come learn the game and build skills while having a great time on the green!" })]
				})
			]
		})
	] });
});
// src/assets/clubhouse.avif
var clubhouse_default = "/assets/clubhouse-YM4VzkQZ.avif";
// src/pages/GroupEvents/GroupEvents.tsx
var GroupEvents_exports = /* @__PURE__ */ __exportAll({ default: () => GroupEvents_default });
var GroupEvents_default = UNSAFE_withComponentProps(function GroupEvents() {
	return /* @__PURE__ */ jsxs(CardContainer, { children: [
		/* @__PURE__ */ jsxs(Card, {
			color: "green",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Group Fun at the Club"
			}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("p", { children: "Consider group lawn bowling for your next corporate team-building event, birthday party, family reunion or social event. Lawn bowling is a fun, light impact sport enjoyed around the world by people from 5 to 105 years of age." }), /* @__PURE__ */ jsx("p", { children: "All you need is a pair of flat-sole shoes. That’s it. It doesn’t get much easier than that." })] })]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "blue",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Groups Receive"
			}), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: "A lawn bowling lesson" }),
				/* @__PURE__ */ jsx("li", { children: "Bowls (balls) to use at the event. We have Junior Balls for young players and special equipment for those with reduced mobility" }),
				/* @__PURE__ */ jsx("li", { children: "Access to our club house for washrooms. Use of the clubhouse with kitchen and meeting space can be arranged" }),
				/* @__PURE__ */ jsx("li", { children: "Use of the facility for approximately two hours weekday afternoons or weekends. Groups of 16 people or more will have exclusive use" })
			] }) })]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "yellow",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "We Do the Set-Up"
			}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("img", {
				src: clubhouse_default,
				alt: "Guelph Lawn Bowling Club clubhouse"
			}), /* @__PURE__ */ jsx("p", { children: "We can accommodate groups of up to 40 people at our facility in the heart of Guelph (114 Gordon Street)." })] })]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "white",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Parking"
			}), /* @__PURE__ */ jsx(CardContent, { children: "Parking is usually available in the lot next to the lawn bowling club at no cost, but it does get busy. If the lot is full, there is street parking in the area." })]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "teal",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Weather"
			}), /* @__PURE__ */ jsx(CardContent, { children: "Hopefully it will be blue skies when you bowl with us. If it rains, we’ll do our best to reschedule your event soon after the original date, however, we’re at the mercy of the weather and other events in our calendar." })]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "orange",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Charge"
			}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("p", { children: "We’re a not-for-profit club so your payment is genuinely appreciated." }), /* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: "Non-members: $20 per person" }),
				/* @__PURE__ */ jsx("li", { children: "Families and friends of members: $15 per person" }),
				/* @__PURE__ */ jsx("li", { children: "Use of the clubhouse for functions has a separate cost" })
			] })] })]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "red",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Food & Drinks"
			}), /* @__PURE__ */ jsx(CardContent, { children: "You or your caterer are responsible for food, beverages, and clean up. The club house is not a licensed facility." })]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "purple",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Book Your Group Event Today"
			}), /* @__PURE__ */ jsx(CardContent, { children: "Do you have an event in mind? Our group event organizer is happy to help. Contact us through" })]
		})
	] });
});
// src/pages/Sponsors/Sponsors.tsx
var Sponsors_exports = /* @__PURE__ */ __exportAll({ default: () => Sponsors_default });
var Sponsors_default = UNSAFE_withComponentProps(function GroupEvents() {
	return /* @__PURE__ */ jsxs(CardContainer, { children: [
		/* @__PURE__ */ jsxs(Card, {
			color: "blue",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Thanks for Supporting the Guelph Lawn Bowling Club"
			}), /* @__PURE__ */ jsx(CardContent, {
				styles: "center",
				children: /* @__PURE__ */ jsx(Card, {
					color: "white",
					children: /* @__PURE__ */ jsxs(CardContent, {
						styles: "center",
						children: [/* @__PURE__ */ jsx("h2", { children: "2026 Sponsors" }), /* @__PURE__ */ jsxs("ul", {
							className: "Align-left",
							children: [
								/* @__PURE__ */ jsx("li", {
									className: "Align-left",
									children: "Brothers Brewing"
								}),
								/* @__PURE__ */ jsx("li", { children: "Royal City Brewery" }),
								/* @__PURE__ */ jsx("li", { children: "Wellington Brewery" }),
								/* @__PURE__ */ jsx("li", { children: "Kawartha Dairy" }),
								/* @__PURE__ */ jsx("li", { children: "Schlegel Villages" })
							]
						})]
					})
				})
			})]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "yellow",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Helping Us Helps You"
			}), /* @__PURE__ */ jsxs(CardContent, {
				styles: "left",
				children: [
					/* @__PURE__ */ jsx("p", { children: "Donate to the Guelph Lawn Bowling Club and receive a receipt you can use as a business expense. Become a major sponsor and have a tournament named after you or your business." }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: "The Guelph Lawn Bowling Club is a not-for-profit organization offering Guelph a recreational activity that can be enjoyed by a diverse group of residents. This recreational sport club exists thanks to its volunteers, member fees, the City of Guelph, and local business donations." })
				]
			})]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "green",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Become a Sponsor"
			}), /* @__PURE__ */ jsxs(CardContent, {
				styles: "left",
				children: [
					/* @__PURE__ */ jsx("p", { children: "We have affordable sponsorship categories that give you local publicity. Show your community spirit. Since 1838 we’ve been a part of our community. Sponsorship helps us to continue providing a sport enjoyed by all ages and abilities. Please support local lawn bowling." }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("a", {
						href: "https://www.guelphlawnbowling.com/contact",
						children: "Contact us for more information."
					})
				]
			})]
		})
	] });
});
// src/assets/history.avif
var history_default = "/assets/history-Kf70rbuK.avif";
// src/pages/History/History.tsx
var History_exports = /* @__PURE__ */ __exportAll({ default: () => History_default });
var History_default = UNSAFE_withComponentProps(function History() {
	return /* @__PURE__ */ jsxs("section", {
		className: "History",
		children: [
			/* @__PURE__ */ jsx("h1", { children: "Guelph Lawn Bowling History" }),
			/* @__PURE__ */ jsxs("div", {
				className: "History__body",
				children: [/* @__PURE__ */ jsxs("figure", { children: [/* @__PURE__ */ jsx("img", {
					src: history_default,
					alt: "Bowlers watching play on the green, 1975"
				}), /* @__PURE__ */ jsxs("figcaption", { children: [
					"Photograph appears courtesy of the",
					/* @__PURE__ */ jsx("br", {}),
					"Guelph Public Library Archives,",
					/* @__PURE__ */ jsx("br", {}),
					"Season Under Way, 1975 (F45-0-15-0-0-70)"
				] })] }), /* @__PURE__ */ jsxs("div", {
					className: "History__text",
					children: [
						/* @__PURE__ */ jsx("p", { children: "The Victoria Bowling Club was founded in 1838 and rented greens from the Victoria Curling Club which was founded the same year. The Club was originally located on the green behind Knox Church, which is now the Baker Street parking lot. The lawn bowling and curling clubs shared the same club house. There were also some private greens located at the court house, the Ontario Agricultural College, Homewood and the Ontario reformatory." }),
						/* @__PURE__ */ jsx("p", { children: "Lawn bowling was a popular summer sport and many of Guelph’s prominent citizens were members of the club, including the Honourable Hugh Guthrie, Joseph Downey, D.E. Macdonald, H.C. Scholfield and Mayor George Sleeman." }),
						/* @__PURE__ */ jsx("p", { children: "In 1906, Guelph hosted a complement of British lawn bowlers for a tournament followed by a banquet at the Ontario Agricultural College. In 1919 the Guelph club initiated an annual Dominion Day Tournament. The inaugural tournament featured 64 teams of four (256 bowlers) from across Ontario to compete. The tournament awarded three trophies sponsored by three local industrialists, George Wallace, F.E. Partridge and Wilfrid Cooke." }),
						/* @__PURE__ */ jsx("p", { children: "In 1949 the Victoria Lawn Bowling Club went through some significant changes. The Victoria Curling Club needed the land the bowlers rented from them so the lawn bowlers needed a new home. The city volunteered to lease a portion of Royal City Park for a nominal sum and the bowlers built new greens with 16 rinks. The club also changed its name to the Guelph Lawn Bowling Club. A new clubhouse was desperately needed and Alderman Chris Robinson managed to secure an abandoned office building on Wellington Street then had it moved close to the club’s site. In 1987 the building was renovated and enlarged." }),
						/* @__PURE__ */ jsx("p", { children: "The Guelph Lawn Bowling Club was incorporated in 2001 as a non-profit organization." })
					]
				})]
			}),
			/* @__PURE__ */ jsx("footer", { children: "© 2025 by Guelph Lawn Bowling Club." })
		]
	});
});
// src/pages/Contact/EmbeddedMap/EmbeddedMap.tsx
function EmbeddedMap({ src, title = "Map", height = 400 }) {
	return /* @__PURE__ */ jsx("iframe", {
		src,
		title,
		width: "100%",
		height,
		style: { border: 0 },
		loading: "lazy",
		allowFullScreen: true,
		referrerPolicy: "no-referrer-when-downgrade"
	});
}
// src/assets/facebook.avif
var facebook_default = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAACbgAAAdwAAgAAAAEAAAG1AAAAuQAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAFoAAABaAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIAAoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAACnW1kYXQSAAoKAAAAAzWbJtfJUDKoARAAjYA44kEg3TTDPVZiVBNd/5v/////mFeBP09PT/D99zXPvOI5gom6HA9eldAMnBUbXru0P1usunIoGYdrGTiuFrzntqk3x+ujLg/NOnUrx5dAiIvrcJ80J3PIftqrtBX7Yi0EfOhPmsQsoDmb//mHdK88pRsg8zZsZNsLnFRc42f2J/jw/bql4QKkD1oE+xFKm0w/81r9wAJ2gm6u40Gn9NmEU2MObhIACgoAAAADNZsm18hCMssDEACIAAYYYYkEEsG1PE5b7a1jza14T0hSmVSXNff5G/3GjFoZ07Sqzs9z+2l1/Ci1fC09OPIEKODiJ16wUJ4GKMcGhcD4zRjlTKQpTgsPf/0NmgNKsRoEPcMeRaj9Qw1S2SDXGRTgRz9A45DUCQV5IWegr0kePupSmgomuqiQ2hESy1brOhMJfLeBnmYzEZP+1+N537np4qecTbZFf3OGLCyvi0tWWvqEHW86lbAwXfybToa72dJmTEJr5I1vbxulZd7K3CKbn65wR3Bf/ZQH/qXFhXRwefRnbpyJphzFpcIb+i3YTHaA7zEdRzwFbZuivGi/Sbi+JLrNAEBtdV9sqDOA4JHovYE5AwikPA4CHJMIXQh/3nTS0Fabo0MNG9FQF2TAFbxdcOzAvYrY9ZlYpnSY23xHmOrf4uIWGs7qV3//85doiNeEVRVFKm4l7hgCtd55HtJeuih49fZHG8MLFmiBGMGliixtXVjzX1YsUBP1qKYe1oCb4zHupdVQq/GgOL1YZ1yXjbOXc3hDQQktLR696rRZQz3W4CMli2F9okUTMZP3N0kCyQM7XYy20JHnXzfdOFQ3gEiuHSiwr8lCy1gXDt7CTGaiPtCY";
// src/assets/instagram.avif
var instagram_default = "data:image/avif;base64,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";
// src/components/SocialLink/SocialLink.tsx
function SocialLink({ href, logo, alt }) {
	return /* @__PURE__ */ jsx("a", {
		className: "SocialLink",
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		children: /* @__PURE__ */ jsx("img", {
			src: logo,
			alt
		})
	});
}
// src/pages/Contact/Contact.tsx
var Contact_exports = /* @__PURE__ */ __exportAll({ default: () => Contact_default });
var Contact_default = UNSAFE_withComponentProps(function Contact() {
	return /* @__PURE__ */ jsx("div", {
		className: "Contact",
		children: /* @__PURE__ */ jsxs(CardContainer, { children: [/* @__PURE__ */ jsxs(Card, {
			color: "blue",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Visit Us"
				}),
				/* @__PURE__ */ jsx(CardContent, {
					styles: "left",
					children: "The Guelph Lawn Bowling Club is located in the heart of downtown Guelph. The clubhouse is not staffed, please contact us to set up a meeting. 114 Gordon Street Guelph, ON N1H 4H6"
				}),
				/* @__PURE__ */ jsx(EmbeddedMap, { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.1704417525593!2d-80.2423260458823!3d43.53978323729701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9adb529d25f9%3A0xf97cf8d6db849d0!2sGuelph%20Lawn%20Bowling%20Club!5e1!3m2!1sen!2sca!4v1795273413870!5m2!1sen!2sca" })
			]
		}), /* @__PURE__ */ jsxs(Card, {
			color: "green",
			children: [/* @__PURE__ */ jsx(CardTitle, {
				styles: "bold large",
				children: "Contact Us"
			}), /* @__PURE__ */ jsxs(CardContent, {
				styles: "left",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "Align--center",
						children: /* @__PURE__ */ jsx("a", {
							href: "mailto:GuelphLBCEvents@gmail.com?subject=Contact Us",
							target: "_self",
							children: "GuelphLBCEvents@gmail.com"
						})
					}),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: "We are a volunteer organization run by a dedicated group of volunteers members. We do not have regular office hours. However, we will make every effort to reply to your inquiry within 72 hours. We look forward to connecting with you soon." }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Follow us on Instagram and Facebook!",
						/* @__PURE__ */ jsx(SocialLink, {
							href: "https://www.facebook.com/Guelph-Lawn-Bowling-Club-540343166145366/",
							logo: facebook_default,
							alt: "Guelph Lawn Bowling Club on Facebook"
						}),
						/* @__PURE__ */ jsx(SocialLink, {
							href: "https://www.instagram.com/lawnbowlingguelph/",
							logo: instagram_default,
							alt: "Guelph Lawn Bowling Club on Instagram"
						})
					] })
				]
			})]
		})] })
	});
});
// src/pages/Tournaments/Tournaments.tsx
var Tournaments_exports = /* @__PURE__ */ __exportAll({ default: () => Tournaments_default });
var Tournaments_default = UNSAFE_withComponentProps(function Tournaments() {
	return /* @__PURE__ */ jsxs(CardContainer, { children: [
		/* @__PURE__ */ jsxs(Card, {
			color: "blue",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Canada Day"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "July 1st, 2027"
				}),
				/* @__PURE__ */ jsx(CardContent, { children: "Time TBD" }),
				/* @__PURE__ */ jsx(CardContent, { children: "Details to come." })
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "yellow",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Civic Holiday"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "August 2nd, 2027"
				}),
				/* @__PURE__ */ jsx(CardContent, { children: "Time TBD" }),
				/* @__PURE__ */ jsx(CardContent, { children: "Details to come." })
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "green",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Rose Bowl"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "Date TBD"
				}),
				/* @__PURE__ */ jsx(CardContent, { children: "Time TBD" }),
				/* @__PURE__ */ jsx(CardContent, { children: "Details to come." })
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "red",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Labour Day"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "September 6th, 2027"
				}),
				/* @__PURE__ */ jsx(CardContent, { children: "Time TBD" }),
				/* @__PURE__ */ jsx(CardContent, { children: "Details to come." })
			]
		}),
		/* @__PURE__ */ jsxs(Card, {
			color: "blue",
			children: [
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Club Championship & Fall Meeting"
				}),
				/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold",
					children: "Date TBD"
				}),
				/* @__PURE__ */ jsx(CardContent, { children: "Time TBD" }),
				/* @__PURE__ */ jsx(CardContent, { children: "Potluck. Details to come." })
			]
		})
	] });
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
		"module": "/assets/entry.client-DpEJk38i.js",
		"imports": ["/assets/jsx-runtime-BKd12lFt.js"],
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
			"module": "/assets/root-Bt55McBA.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js"],
			"css": ["/assets/root-CFaDE_T-.css"],
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
			"module": "/assets/Home-DJYUuzfK.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-uBknCf-f.js"],
			"css": ["/assets/Cards-CsmwuFKx.css"],
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
			"module": "/assets/WeeklyEvents-CtvJ1bAD.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-uBknCf-f.js"],
			"css": ["/assets/Cards-CsmwuFKx.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/GroupEvents/GroupEvents": {
			"id": "pages/GroupEvents/GroupEvents",
			"parentId": "root",
			"path": "group",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/GroupEvents-B3OEh2mE.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-uBknCf-f.js"],
			"css": ["/assets/Cards-CsmwuFKx.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Sponsors/Sponsors": {
			"id": "pages/Sponsors/Sponsors",
			"parentId": "root",
			"path": "sponsors",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Sponsors-BrfTy6k5.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-uBknCf-f.js"],
			"css": ["/assets/Sponsors-BL82C8a3.css", "/assets/Cards-CsmwuFKx.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/History/History": {
			"id": "pages/History/History",
			"parentId": "root",
			"path": "history",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/History-UtAvz1AS.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js"],
			"css": ["/assets/History-CMF_aFSy.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Contact/Contact": {
			"id": "pages/Contact/Contact",
			"parentId": "root",
			"path": "contact",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Contact-DkiwyFt3.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-uBknCf-f.js"],
			"css": ["/assets/Contact-Bdc5Dhvt.css", "/assets/Cards-CsmwuFKx.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Tournaments/Tournaments": {
			"id": "pages/Tournaments/Tournaments",
			"parentId": "root",
			"path": "tournaments",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Tournaments-B3_Ib0fZ.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-uBknCf-f.js"],
			"css": ["/assets/Cards-CsmwuFKx.css"],
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
			"module": "/assets/NotFound-B9l8d0cy.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js"],
			"css": ["/assets/NotFound-x1XGuNl0.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-5fd1c491.js",
	"version": "5fd1c491",
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
	"/group",
	"/sponsors",
	"/history",
	"/contact",
	"/tournaments"
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
		path: "group",
		index: void 0,
		caseSensitive: void 0,
		module: GroupEvents_exports
	},
	"pages/Sponsors/Sponsors": {
		id: "pages/Sponsors/Sponsors",
		parentId: "root",
		path: "sponsors",
		index: void 0,
		caseSensitive: void 0,
		module: Sponsors_exports
	},
	"pages/History/History": {
		id: "pages/History/History",
		parentId: "root",
		path: "history",
		index: void 0,
		caseSensitive: void 0,
		module: History_exports
	},
	"pages/Contact/Contact": {
		id: "pages/Contact/Contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: Contact_exports
	},
	"pages/Tournaments/Tournaments": {
		id: "pages/Tournaments/Tournaments",
		parentId: "root",
		path: "tournaments",
		index: void 0,
		caseSensitive: void 0,
		module: Tournaments_exports
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

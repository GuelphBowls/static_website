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
		contents: [{
			label: "History",
			href: "/history"
		}, {
			label: "Contact",
			href: "/contact"
		}]
	},
	{
		label: "Schedule",
		contents: [
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
		disabled: true,
		contents: [
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
		contents: [
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
		disabled: true,
		contents: [
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
			contents: item.contents,
			disabled: item.disabled
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
function TopNavItem({ label, href, contents = [], disabled = false }) {
	const topNav = useContext(TopNavContext);
	const open = !disabled && topNav?.activeMenu === label;
	if (contents.length === 0) return /* @__PURE__ */ jsxs("a", {
		className: "TopNavItem",
		href: disabled ? void 0 : href,
		"aria-disabled": disabled || void 0,
		children: [label, /* @__PURE__ */ jsx(LinkIcon, {})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "MenuList",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: "TopNavItem",
			disabled,
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
			contents: item.contents,
			disabled: item.disabled
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
// src/assets/bowls.avif
var bowls_default = "/assets/bowls-BCArHJBW.avif";
// src/util/bem.ts
function bem(base, mods = []) {
	const classes = [base];
	for (const mod of mods) {
		if (!mod) continue;
		for (const part of mod.split(" ")) if (part) classes.push(`${base}--${part}`);
	}
	return classes.join(" ");
}
// src/components/Cards/CardColorContext/CardColorContext.tsx
var CardColorContext = createContext(void 0);
var useCardColor = () => useContext(CardColorContext);
// src/components/Cards/Card/Card.tsx
function Card({ color = "blue", styles, children }) {
	const className = bem("Card", [color, styles]);
	return /* @__PURE__ */ jsx(CardColorContext, {
		value: color,
		children: /* @__PURE__ */ jsx("div", {
			className,
			children: /* @__PURE__ */ jsx("div", {
				className: "Layout--vbox",
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
			}), /* @__PURE__ */ jsxs(CardContent, {
				styles: "left",
				children: [
					"We’re 188 years young and going strong! The Guelph Lawn Bowling Club was established in 1838 and new members are always welcome to join the fun in the heart of the Royal City. We’re the second oldest recreational sport club in Guelph (curling is the oldest).",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("a", {
						href: "https://www.cbc.ca/news/canada/kitchener-waterloo/guelph-lawn-bowling-club-lawn-bowling-beginner-1.6919931",
						children: "Check out an article about our club from the CBC"
					})
				]
			})]
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
var Sponsors_default = UNSAFE_withComponentProps(function Sponsors() {
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
							className: "Align--left",
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
						href: "/contact",
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
// src/pages/District/District.tsx
var District_exports = /* @__PURE__ */ __exportAll({ default: () => District_default });
var District_default = UNSAFE_withComponentProps(function District() {
	return /* @__PURE__ */ jsx(CardContainer, { children: /* @__PURE__ */ jsxs(Card, {
		color: "blue",
		children: [/* @__PURE__ */ jsx(CardTitle, {
			styles: "bold large",
			children: "District Events"
		}), /* @__PURE__ */ jsx(CardContent, {
			styles: "center",
			children: "Stay tuned for the 2027 District 7 schedule."
		})]
	}) });
});
// src/pages/Executive/Executive.tsx
var Executive_exports = /* @__PURE__ */ __exportAll({ default: () => Executive_default });
var Executive_default = UNSAFE_withComponentProps(function Executive() {
	return /* @__PURE__ */ jsx(CardContainer, { children: /* @__PURE__ */ jsxs(Card, {
		color: "blue",
		children: [/* @__PURE__ */ jsx(CardTitle, {
			styles: "bold large",
			children: "2026/2027 Executive"
		}), /* @__PURE__ */ jsx(CardContent, {
			styles: "center",
			children: /* @__PURE__ */ jsxs(CardContainer, { children: [
				/* @__PURE__ */ jsxs(Card, {
					color: "blue",
					styles: "fit frost",
					children: [/* @__PURE__ */ jsx(CardTitle, {
						styles: "bold",
						children: "President"
					}), /* @__PURE__ */ jsxs(CardContent, {
						styles: "center",
						children: [/* @__PURE__ */ jsx("p", { children: "Blake Skinner" }), /* @__PURE__ */ jsx("p", { children: "GuelphLBC@gmail.com" })]
					})]
				}),
				/* @__PURE__ */ jsxs(Card, {
					color: "blue",
					styles: "fit frost",
					children: [/* @__PURE__ */ jsx(CardTitle, {
						styles: "bold",
						children: "Vice President"
					}), /* @__PURE__ */ jsxs(CardContent, {
						styles: "center",
						children: [/* @__PURE__ */ jsx("p", { children: "Emily Gibson" }), /* @__PURE__ */ jsx("p", { children: "glbcvp@gmail.com" })]
					})]
				}),
				/* @__PURE__ */ jsxs(Card, {
					color: "blue",
					styles: "fit frost",
					children: [/* @__PURE__ */ jsx(CardTitle, {
						styles: "bold",
						children: "Secretary"
					}), /* @__PURE__ */ jsxs(CardContent, {
						styles: "center",
						children: [/* @__PURE__ */ jsx("p", { children: "Blake Grills" }), /* @__PURE__ */ jsx("p", { children: "GuelphLBCsecretary@gmail.com " })]
					})]
				}),
				/* @__PURE__ */ jsxs(Card, {
					color: "blue",
					styles: "fit frost",
					children: [/* @__PURE__ */ jsx(CardTitle, {
						styles: "bold",
						children: "Membership Secretary"
					}), /* @__PURE__ */ jsx(CardContent, {
						styles: "center",
						children: /* @__PURE__ */ jsx("p", { children: "Barbara Chillingsworth" })
					})]
				}),
				/* @__PURE__ */ jsxs(Card, {
					color: "blue",
					styles: "fit frost",
					children: [/* @__PURE__ */ jsx(CardTitle, {
						styles: "bold",
						children: "Directors"
					}), /* @__PURE__ */ jsxs(CardContent, {
						styles: "center",
						children: [
							/* @__PURE__ */ jsx("p", { children: "Ed Armstrong" }),
							/* @__PURE__ */ jsx("p", { children: "Jamie Ford" }),
							/* @__PURE__ */ jsx("p", { children: "Kaeli Sweigard" })
						]
					})]
				})
			] })
		})]
	}) });
});
// src/pages/ByLaws/ByLaws.tsx
var ByLaws_exports = /* @__PURE__ */ __exportAll({ default: () => ByLaws_default });
var ByLaws_default = UNSAFE_withComponentProps(function ByLaws() {
	return /* @__PURE__ */ jsxs("article", {
		className: "ByLaws",
		children: [
			/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", { children: "By-Laws" }), /* @__PURE__ */ jsx("p", {
				className: "ByLaws__meta",
				children: "Approved May 13th, 2023"
			})] }),
			/* @__PURE__ */ jsxs("section", {
				className: "ByLaws__mission",
				children: [
					/* @__PURE__ */ jsx("h2", { children: "Mission statement" }),
					/* @__PURE__ */ jsx("p", { children: "To administer, co-ordinate, encourage, establish, operate and promote the operation of the Guelph Lawn Bowling Club Inc. for the purpose of fostering goodwill and sportsmanship amongst its members." }),
					/* @__PURE__ */ jsx("p", { children: "To provide the opportunity for bowlers of all ages in Guelph and surrounding districts to participate at their level of ability and interest." })
				]
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "ByLaws__toc",
				"aria-label": "By-law contents",
				children: [
					/* @__PURE__ */ jsx("h2", { children: "Contents" }),
					/* @__PURE__ */ jsx("h3", { children: "By-Law 1" }),
					/* @__PURE__ */ jsxs("ol", { children: [
						/* @__PURE__ */ jsx("li", {
							value: 1,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-1",
								children: "Name"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 2,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-2",
								children: "Head Office"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 3,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-3",
								children: "Purpose"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 4,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-4",
								children: "Affiliation"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 5,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-5",
								children: "Membership"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 6,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-6",
								children: "Harassment/Abuse"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 7,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-7",
								children: "Revocation of Membership"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 8,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-8",
								children: "Alcoholic Beverages"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 9,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-9",
								children: "Board of Directors"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 10,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-10",
								children: "Board Meetings"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 11,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-11",
								children: "Duties of Office Holders"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 12,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-12",
								children: "Authority"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 13,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-13",
								children: "Signing Officers"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 14,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-14",
								children: "Remuneration of Officers, Directors, and Chairpersons"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 15,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-15",
								children: "Committees"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 16,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-16",
								children: "General Meeting"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 17,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-17",
								children: "Extraordinary Expense"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 18,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-18",
								children: "Amendments"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 19,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-19",
								children: "Fiscal Year"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 20,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-20",
								children: "Reserve Fund"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 21,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-21",
								children: "Protection of Members, Officers, and Directors"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							value: 22,
							children: /* @__PURE__ */ jsx("a", {
								href: "#bylaw-1-article-22",
								children: "Interpretation"
							})
						})
					] }),
					/* @__PURE__ */ jsx("h3", { children: "By-Law 2" }),
					/* @__PURE__ */ jsx("ol", { children: /* @__PURE__ */ jsx("li", {
						value: 1,
						children: /* @__PURE__ */ jsx("a", {
							href: "#bylaw-2-article-1",
							children: "Banking Resolution"
						})
					}) })
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "ByLaws__bylaw",
				children: [
					/* @__PURE__ */ jsx("h2", { children: "By-Law 1" }),
					/* @__PURE__ */ jsx("p", {
						className: "ByLaws__intro",
						children: "Letters Patent incorporating Guelph Lawn Bowling Club granted on Sept. 10, 2001. These by-laws relate generally to the transaction of the business and affairs of Guelph Lawn Bowling Club Inc."
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-1",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 1: Name" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "1.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Be it enacted and is hereby enacted as a by-law of Guelph Lawn Bowling Club Inc. hereinafter called the “Club”." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-2",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 2: Head Office" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "2.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Head Office of the Club shall be in the City of Guelph, in the County of Wellington, the Province of Ontario, and at such a place therein as the directors of the Club may from time to time decide. Currently at the Club House at 114 Gordon St., Guelph." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-3",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 3: Purpose" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "3.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "To promote recreation, fellowship, enjoyment, and competitive sportsmanship through the sport of lawn bowling and any other compatible recreational sport as authorized by the general membership." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-4",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 4: Affiliation" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "4.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "This Club shall be affiliated with the Ontario Lawn Bowls Association (OLBA)." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-5",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 5: Membership" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "5.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "A member is a person who has paid their membership dues in full." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "5.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The amount of the membership dues will be set by The Board when City of Guelph and OLBA fees are known." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "5.3"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Fees shall be paid to the Treasurer of the Club." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "5.4"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Membership Cycle runs from the date on which a member’s application for membership is accepted until June First of the following calendar year." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-6",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 6: Harassment/Abuse" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "6.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Club promotes an abuse-free, trusting environment in accordance with the OLBA’s Code of Conduct and its Harassment Policy for the general membership." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-7",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 7: Revocation of Membership" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "7.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Any member whose conduct on the Club premises, or elsewhere, which is considered by the Directors to be unbecoming of the character of the Club, or who willfully commits a breach or violation of any of the Club’s by-laws, or regulations will receive a disciplinary warning letter from The Board." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "7.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Any member, after receiving a disciplinary warning letter, may have their membership revoked by a two-thirds (⅔) vote of The Board if the member’s conduct on the Club premises or elsewhere continues to be unbecoming of the Club or character of the Club." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "7.3"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Such member(s) may make a written application for reinstatement to The Board and may be reinstated by the disciplinary Committee of The Board." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-8",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 8: Alcoholic Beverages" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "8.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Alcoholic beverages must not be brought into the Club by members or guests in compliance with the Ontario Liquor Control Act and regulations and the license Agreement with the City of Guelph, and members must adhere to such laws. If the Club incurs any penalty or liability by reason of a breach of these provisions by a member or member’s guest, such member shall indemnify the Club." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-9",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 9: Board of Directors" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The affairs of the Club shall be managed by a Board of Directors consisting of the following officers: President, Vice-President, and Treasurer, and a Secretary and up to three directors. The Board has the power to add members as required." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "All Directors shall be elected annually for a one (1) year term from the date of the Annual General. Each Director may stand for re-election if so nominated." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.3"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Past President is a non-voting, ex-officio member of The Board." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.4"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Vice-President shall assume and act in the role as President until a new President is elected if the elected President is unable to act for whatever reason. The Board has the authority to fill any vacancy that may occur. The members filling vacant positions must be elected, if nominated, at the next Annual General Meeting." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.5"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Past President of the Club, or another person or persons not on The Board appointed by The Board, becomes the Nominating Committee. The Nominating Committee shall prepare a slate of nominees for the election of Directors to The Board, having first secured consent of each nominee, and present the slate at the Annual General Meeting. Individual members may self–nominate. Additional nominations may be proposed by any member provided they have the consent of the nominee. The election of The Board of Directors shall be chaired by the Nominating Committee." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.6"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "All members eligible to vote are eligible to run to be a Board member and are eligible to hold any position on The Board." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.7"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Individuals elected to The Board are not elected to a specific role." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.8"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "At the first meeting after the election of The Board, directors elected to The Board shall elect the following officers: President, Vice-President, and Treasurer as well as the Secretary." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.9"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "All records of the Club, including the bookkeeping records, tournament books, minute book are the property of the Club and shall be handed over by the outgoing officers to their successors within thirty (30) calendar days of the conclusion of their role. ." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "9.10"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board shall approve annual financial statements that relate to the time period that began immediately after the end of the last completed financial year and ended not more than six months before the annual general meeting." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-10",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 10: Board Meetings" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "10.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Regular or special meetings of the Directors may be held at the call of the President or by the Vice-President or by any three members of The Board, by giving at least two days’ notice." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "10.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Fifty percent (50%) plus one (1). members of The Board of Directors shall constitute a Quorum. The Past President is not counted in the determination of quorum." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "10.3"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "There shall be a minimum of eight (8) meetings of The Board of Directors during the year." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "10.4"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board of Directors shall plan policy but not take action on major matters without the approval of a majority of the members present at a general meeting." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "10.5"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Questions arising at any meeting of The Board shall be decided by a majority of votes. For greater clarity, the president can only cast one vote." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "10.6"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "A Board member may, if all the directors of the corporation consent, participate in a meeting of the directors or of a committee of directors by telephonic or electronic means that permits all participants to communicate adequately with each other during the meeting. A director so participating in a meeting is deemed for the purposes of this Act to be present at the meeting." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-11",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 11: Duties of Office Holders" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "11.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The President shall preside at all Board meetings of the Club, sign all instruments that require presidential signature, perform all duties incident to the presidential office, and have such other powers and duties as may from time to time be assigned. The President shall exercise the general supervision and control of all affairs of the Club and be an ex-officio member of all committees. The President does not have a vote at committee meetings and is not included in any determination of quorum of the committee." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "11.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Vice-President shall sign such contract, document or instrument in writing as require their signature and shall have and perform all powers incident to their office and such powers and duties as may from time to time be assigned to them by The Board of Directors or a general meeting of members. The Vice-President, in the absence or of the inability or refusal of the President to act on instructing of The Board of Directors and/or a general meeting of members, shall be vested with all the powers and shall perform the duties of the President." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "11.3"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "In that both the President and the Vice-President are absent or unable to perform their duties, the other Directors shall appoint one or more of their members to perform the duties of President or Vice-President." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "11.4"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Secretary shall: (a) conduct the Club’s correspondence; (b) retrieve and distribute correspondence received at the Club’s mailing address; (c) record the proceedings, deliberations and decisions at the Annual General Meeting and other meetings of the members and meetings of The Board of Directors." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "11.5"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "When warranted, an Assistant Secretary may be appointed and shall: (a) assist the Secretary in their duties;" }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "11.6"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Treasurer shall: (a) be responsible for the care and custody of the financial assets of the Club as directed by The Board; (b) receive and disperse all funds; (c) keep records of the Club’s financial transactions; (d) provide an accurate account of all monies received and expended as requested by The Board; (e) present a financial statement the Club’s finances at the Annual General Meeting; (f) maintain an inventory of the physical assets of the Club." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "11.7"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board has the discretion to request an audit or other financial review deemed appropriate." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "11.8"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "It is the duty of each Director to represent The Board’s policies, views, and programs in their dealings with the members of the Club." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-12",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 12: Authority" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "12.1"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "The Board of Directors shall manage all property and business affairs of the Club, set the annual membership fee, and have power:" }), /* @__PURE__ */ jsxs("ol", {
								type: "a",
								children: [
									/* @__PURE__ */ jsx("li", { children: "To appoint and remove any employee of the Club, prescribe duties, fix compensation, and require security for the faithful discharge of duties, if deemed advisable." }),
									/* @__PURE__ */ jsx("li", { children: "To enact rules, policies, procedures, and guidelines for the management and operation of the Club." }),
									/* @__PURE__ */ jsx("li", { children: "To do all such things as will be for the benefit of the Club in conformity with the By-Laws and License Agreement with the City of Guelph and the OLBA." }),
									/* @__PURE__ */ jsx("li", { children: "To refuse or rescind membership in the Club for just cause." })
								]
							})] })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-13",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 13: Signing Officers" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "13.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Any two of President, Vice-President, Secretary, Treasurer shall sign all deeds, documents and contracts and other instruments requiring execution by the Club. For expenditures over Two Thousand Dollars ($2 000.00), the signature of at least one of the President or Vice-President is required. For Expenditures over Ten Thousand Dollars ($10 000.00) the signature of both the President and Vice President are required. Expenditures in excess of Ten Thousand Dollars ($10 000.00) require the passing of a motion at a meeting of The Board of Directors." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "13.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Any license agreement, deeds, contracts, or other multi-year agreements between the Club and any other entity must be signed by the President and Vice-President." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "13.3"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board may also direct, by special resolution, the signing of any such document or instrument by another member of The Board in the event that the President, Vice-President, Secretary, and/or Treasurer are unable to sign the document." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "13.4"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Club shall prepare and retain records including, the articles and bylaws, and any amendments; the minutes of any meetings of members and member committees, minutes of Board meetings and any Board committee meeting, resolutions, a register of officers, directors and members, and adequate financial records on a quarterly basis that enable directors to ascertain the financial position of the club with reasonable accuracy. Other documents as defined in the Not-For Profit Corporations Act must also be retained." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "13.5"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Financial records must be retained for six (6) years at the head office or other place approved by The Board." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-14",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 14: Remuneration of Officers, Directors, and Chairpersons" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "14.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "All officers, directors, and chairpersons, shall serve without any remuneration and no officer, director or chairperson shall directly or indirectly receive any profit from the position. Any officer, director or chairperson may be reimbursed for reasonable expenses incurred in the performance of the person’s duties if a detailed vendor receipt is submitted." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-15",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 15: Committees" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "15.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board of Directors may appoint any committee they deem necessary and may appoint any additional committees they deem necessary." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "15.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Members of the Club who are not on The Board are eligible to serve on committees." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "15.3"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Non-members of the Club having specific expertise may be appointed as ex-officio members of any committee from time to time." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-16",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 16: General Meeting" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "16.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Annual General Meeting of the members of the Club shall be held at a time and on a day as directed by The Board of Directors but not later than the 30th day of October. The meeting shall receive reports of the executive, elect officers and directors as required and elect or appoint such others as are necessary for the proper conduct of the Club’s affairs, and transact all business that may properly come before the meeting. Any reports." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "16.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Spring General Meeting of the members of the Club shall be held at a time and place on a day after the Spring meeting of the OLBA in every year as directed by The Board of Directors but not later than May 31st. The meeting shall receive reports of The Board for the events scheduled for the current year and transact all business that may properly come before the meeting." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "16.3"
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Special general meetings of the members may be called:" }), /* @__PURE__ */ jsxs("ol", {
									type: "a",
									children: [
										/* @__PURE__ */ jsx("li", { children: "by the President or Vice President" }),
										/* @__PURE__ */ jsx("li", { children: "by resolution of The Board" }),
										/* @__PURE__ */ jsx("li", { children: "on written request to the Board by at least 25 per cent of active, full members of the Club." }),
										/* @__PURE__ */ jsx("li", { children: "The request or resolution shall specify the nature of the business to be brought before the Special General Meeting and no other business than that stated in the notice of meeting shall be transacted. Day, time, and place of all special general meetings shall be decided by the Board but must occur within Forty-Five (45) calendar days of receiving the request or resolution." })
									]
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "16.4"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Notice of the date, time, and place for holding general meetings of members including annual and special meetings shall be given by The Board at least ten days prior to each member by mail or phone or e-mail and by posting on the Club bulletin Board, Social Media Account(s), and Website." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "16.5"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "At all Annual General and Special meetings of the Club, the presence of 15 per cent of full members in good standing shall constitute a quorum." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "16.6"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "All members in good standing that are 18 or older on the date of the vote have the right to vote. At a spring general meeting, anyone who was a member for the previous year’s lawn bowling season or who has paid their membership fees for the current year. Is eligible to vote. For a fall general meeting, anyone who is a member for the current season is eligible to vote." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "16.7"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The omission to give notice or non-receipt of notice, by any member(s) shall not invalidate any resolution/motion passed or procedure taken." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-17",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 17: Extraordinary Expense" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "17.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Each and every proposed addition, renovation, or major repair to Club property or equipment, but excluding normal operating expenses within the approved Annual Budget, which individually amount to Ten Thousand Dollars ($10 000.00) or more in the fiscal year, shall require the approval of the majority of the members present at a General Meeting before the property or equipment is acquired or before the work is undertaken." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-18",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 18: Amendments" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "18.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board can recommend at any time an amendment or suspension of any Article of the By-Laws, which must be approved at a General Meeting of the members." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-19",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 19: Fiscal Year" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "19.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The fiscal year of the Club shall terminate on the 30 day of April each year or on such other date, as the Directors shall, by resolution, from time to time determine." }) })]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-20",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 20: Reserve Fund" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "20.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board may from time to time set aside sums as they deem fit to meet contingencies for repairing, improving and maintaining any of the property of the Club, replacing wasting assets, and for such other purposes as The Board shall, in their absolute discretion, think conducive to the interests of the Club, and may invest the several sums so set aside for such investments and dispose of all or any part thereof for the benefit of the Club, and may divide the reserve fund into such special funds as they may deem advisable in the business of the Club without being bound to keep same separate from other assets." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "20.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board may also carry forward to the accounts of the succeeding year or years any net income or balance of net income which they shall not have reserved." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-21",
						className: "ByLaws__article",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "Article 21: Protection of Members, Officers, and Directors" }),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "21.1"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Members shall not, as such, be held answerable to or accountable for any act, default, obligation, or liability of the Club, or for any engagement, claim, payment, loss, injury, transaction, matter or thing relating to or connected with the Club." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "21.2"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Officers and Directors, for the time being, of the Club shall not be under any duty or responsibility in respect of any contract, act or transaction entered in the name or on behalf of the Club, except such as shall have been submitted to and authorized or approved by The Board." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "21.3"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "No Officer or Director of the Club shall be liable for the acts, receipts, neglects or default of any Officer or Director or employee, or for any loss, damage or expense happening to the Club through the insufficiency of title to any property acquired by the Club, or for or on behalf of the Club or for the insufficiency or deficiency of any security in or upon which any of the money of or belonging to the Club shall be placed out of or invested on behalf of the Club, or for the loss or damage from bankruptcy, insolvency to tortious act of any person, firm or corporation with whom or which any monies, securities or effects shall be lodged or deposited or for any loss, damage or misfortune whatever may happen in office or trust or in relation thereto, unless the same shall happen by or through their own wrongful and willful act or through their own willful neglect or default." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "21.4"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Every Officer or Director of the Club and their heirs, executors and administrators, and estate and effects, respectively, shall, from time to time and at all times, be indemnified and save harmless, out of the funds of the Club, from and against: (i) all costs, charges and expenses whatsoever which the Officer or Director sustains or incurs in or about any actions, suit or proceedings which is brought, commenced or prosecuted against them in respect of any act, deed, matter or thing whatsoever made, done or permitted by them in or about the execution of the duties of their office, and (ii) all other costs, charges and expenses which he sustains or incurs in or about or in relation to the affairs thereof, except costs, charges or expenses occasioned be their own willful neglect or default." }) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ByLaws__clause",
								children: [/* @__PURE__ */ jsx("span", {
									className: "ByLaws__number",
									children: "21.5"
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "If any Officer or Director of the Club shall be employed by or shall perform services for the Club otherwise than as an Officer or Director or shall be a member of a firm or shareholder, Director or Officer of a company which is employed by or performs services for the Club, this shall not disentitle such Officer or Director or such firm or company, as the case may be, from receiving proper remuneration for such services." }) })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "bylaw-1-article-22",
						className: "ByLaws__article",
						children: [/* @__PURE__ */ jsx("h3", { children: "Article 22: Interpretation" }), /* @__PURE__ */ jsxs("div", {
							className: "ByLaws__clause",
							children: [/* @__PURE__ */ jsx("span", {
								className: "ByLaws__number",
								children: "22.1"
							}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "In this By-law and all other By-Laws of the Club, words importing the singular number only shall include the plural and vice versa; words importing the masculine gender shall include all genders, “Board” shall mean Board of Directors of the Club; Articles of Incorporation” shall include Supplementary Letters of Incorporation, the Not-for-Profit Corporations Act; as amended from time to time or any act that may hereafter be substituted therefore." }) })]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "ByLaws__bylaw",
				children: [/* @__PURE__ */ jsx("h2", { children: "By-Law 2" }), /* @__PURE__ */ jsxs("section", {
					id: "bylaw-2-article-1",
					className: "ByLaws__article",
					children: [/* @__PURE__ */ jsx("h3", { children: "Article 1: Banking Resolution" }), /* @__PURE__ */ jsxs("div", {
						className: "ByLaws__clause",
						children: [/* @__PURE__ */ jsx("span", {
							className: "ByLaws__number",
							children: "1.1"
						}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "The Board has the responsibility for determining the official depository or depositories for the Club’s funds." }) })]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "ByLaws__footer",
				children: "Guelph Lawn Bowling Club Inc., 114 Gordon St., Guelph, ON N1H 4H6"
			})
		]
	});
});
// src/assets/membership_form.pdf
var membership_form_default = "/assets/membership_form-DQTI5u46.pdf";
// src/assets/waiver_adult.pdf
var waiver_adult_default = "/assets/waiver_adult-DNa_42TR.pdf";
// src/pages/Join/Join.tsx
var Join_exports = /* @__PURE__ */ __exportAll({ default: () => Join_default });
var Join_default = UNSAFE_withComponentProps(function Join() {
	return /* @__PURE__ */ jsx("div", {
		className: "Join",
		children: /* @__PURE__ */ jsxs(CardContainer, { children: [
			/* @__PURE__ */ jsxs(Card, {
				color: "blue",
				children: [/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "2026 Season Fees"
				}), /* @__PURE__ */ jsxs(CardContent, {
					styles: "center",
					children: ["(2027 fees TBA)", /* @__PURE__ */ jsxs(CardContainer, { children: [
						/* @__PURE__ */ jsxs(Card, {
							color: "blue",
							styles: "frost",
							children: [/* @__PURE__ */ jsx(CardTitle, {
								styles: "bold large",
								children: "Adult"
							}), /* @__PURE__ */ jsxs(CardContent, { children: [
								/* @__PURE__ */ jsx("p", {
									className: "Join__price",
									children: "$190"
								}),
								/* @__PURE__ */ jsx("p", { children: "Includes OLBA & District 7 fee" }),
								/* @__PURE__ */ jsx("p", {
									className: "Join__note",
									children: "Children and grandchildren (age 5–17) of adult members are automatically included as members!"
								})
							] })]
						}),
						/* @__PURE__ */ jsxs(Card, {
							color: "blue",
							styles: "frost",
							children: [/* @__PURE__ */ jsx(CardTitle, {
								styles: "bold large",
								children: "Young Adult (18–25)"
							}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("p", {
								className: "Join__price",
								children: "$100"
							}), /* @__PURE__ */ jsx("p", { children: "Includes OLBA & District 7 fee" })] })]
						}),
						/* @__PURE__ */ jsxs(Card, {
							color: "blue",
							styles: "frost",
							children: [/* @__PURE__ */ jsx(CardTitle, {
								styles: "bold large",
								children: "Pay to Play"
							}), /* @__PURE__ */ jsxs(CardContent, { children: [
								/* @__PURE__ */ jsx("p", {
									className: "Join__price",
									children: "$10"
								}),
								/* @__PURE__ */ jsx("p", { children: "Applies to future membership" }),
								/* @__PURE__ */ jsx("p", {
									className: "Join__note",
									children: "Max 5 plays per season"
								})
							] })]
						}),
						/* @__PURE__ */ jsxs(Card, {
							color: "blue",
							styles: "frost",
							children: [/* @__PURE__ */ jsx(CardTitle, {
								styles: "bold large",
								children: "Private Event"
							}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("p", {
								className: "Join__price",
								children: "$20 per person"
							}), /* @__PURE__ */ jsx("p", {
								className: "Join__note",
								children: "Event must be scheduled in advance"
							})] })]
						}),
						/* @__PURE__ */ jsxs(Card, {
							color: "blue",
							styles: "frost",
							children: [/* @__PURE__ */ jsx(CardTitle, {
								styles: "bold large",
								children: "Learn to Bowl"
							}), /* @__PURE__ */ jsxs(CardContent, { children: [
								/* @__PURE__ */ jsx("p", {
									className: "Join__price",
									children: "$10"
								}),
								/* @__PURE__ */ jsx("p", { children: "Applies to future membership" }),
								/* @__PURE__ */ jsx("p", {
									className: "Join__note",
									children: "Max 3 plays per season"
								})
							] })]
						}),
						/* @__PURE__ */ jsxs(Card, {
							color: "blue",
							styles: "frost",
							children: [/* @__PURE__ */ jsx(CardTitle, {
								styles: "bold large",
								children: "Open Bowl Mondays"
							}), /* @__PURE__ */ jsxs(CardContent, { children: [
								/* @__PURE__ */ jsx("p", {
									className: "Join__price",
									children: "Free"
								}),
								/* @__PURE__ */ jsx("p", { children: "Play with a supervising member" }),
								/* @__PURE__ */ jsx("p", {
									className: "Join__note",
									children: "Max 3 plays per season"
								})
							] })]
						})
					] })]
				})]
			}),
			/* @__PURE__ */ jsxs(Card, {
				color: "blue",
				children: [/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "Joining is Easy"
				}), /* @__PURE__ */ jsxs(CardContent, {
					styles: "left",
					children: [
						/* @__PURE__ */ jsx("p", { children: "New and returning members can bring their payment and completed membership form to the club house during the season. Don’t forget to read and fill out the insurance waiver. We will gladly receive your forms and payment via email or in person at the club." }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("a", {
							className: "center",
							href: "mailto:guelphlbcsecretary@gmail.com",
							children: "guelphlbcsecretary@gmail.com"
						}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("p", { children: "If you’re a returning member who has already completed an insurance waiver, you only need to submit the membership form." }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("a", {
							className: "center",
							href: membership_form_default,
							target: "_blank",
							rel: "noreferrer",
							children: "2026 Membership Form"
						}),
						/* @__PURE__ */ jsx("a", {
							className: "center",
							href: waiver_adult_default,
							target: "_blank",
							rel: "noreferrer",
							children: "Adult Insurance Waiver"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs(Card, {
				color: "blue",
				children: [/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "New Members"
				}), /* @__PURE__ */ jsxs(CardContent, {
					styles: "left",
					children: [
						/* @__PURE__ */ jsxs("p", { children: [
							"Feel free to drop by for Open Bowl Mondays at 7pm (just ask for Blake) or book an appointment by emailing ",
							/* @__PURE__ */ jsx("a", {
								href: "mailto:guelphlbcevents@gmail.com",
								children: "guelphlbcevents@gmail.com"
							}),
							"."
						] }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("p", { children: "So, what are you waiting for? If you haven’t already joined, give it a try. You’re welcome to come out a time or two to try lawn bowling. Your best bet is to visit us on an open bowling night. We’ve got lots of enthusiastic members who will be happy to introduce you to the game." })
					]
				})]
			}),
			/* @__PURE__ */ jsxs(Card, {
				color: "blue",
				children: [/* @__PURE__ */ jsx(CardTitle, {
					styles: "bold large",
					children: "No Equipment Needed"
				}), /* @__PURE__ */ jsxs(CardContent, {
					styles: "left",
					children: [
						/* @__PURE__ */ jsx("p", { children: "All you have to do is come out and play. We have a supply of lawn bowls for members and guests to use. It’s that easy! Just don’t forget sunscreen, a hat, and something non-alcoholic to keep hydrated." }),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("p", { children: "We do, however, ask bowlers to wear flat, soft-sole shoes to play. We prefer club members wear shoes that are worn for lawn bowling only as opposed to street shoes." })
					]
				})]
			})
		] })
	});
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
			"module": "/assets/root-Cr6LNJxh.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js"],
			"css": ["/assets/root-Ct3kQyGY.css"],
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
			"module": "/assets/Home-d6hY7PNt.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Cards-BLheqFGF.css"],
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
			"module": "/assets/WeeklyEvents-jmz35Zf3.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Cards-BLheqFGF.css"],
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
			"module": "/assets/GroupEvents-B3PDuRZh.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Cards-BLheqFGF.css"],
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
			"module": "/assets/Sponsors-BpUTzxBn.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Cards-BLheqFGF.css"],
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
			"module": "/assets/Contact-D8vzv5ah.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Contact-Bdc5Dhvt.css", "/assets/Cards-BLheqFGF.css"],
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
			"module": "/assets/Tournaments-D_83IACQ.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Cards-BLheqFGF.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/District/District": {
			"id": "pages/District/District",
			"parentId": "root",
			"path": "district",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/District-B1PKiwlZ.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Cards-BLheqFGF.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Executive/Executive": {
			"id": "pages/Executive/Executive",
			"parentId": "root",
			"path": "executive",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Executive-dIBDLsUD.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Cards-BLheqFGF.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/ByLaws/ByLaws": {
			"id": "pages/ByLaws/ByLaws",
			"parentId": "root",
			"path": "bylaws",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/ByLaws-CoQx2v4p.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js"],
			"css": ["/assets/ByLaws-D4c4OSF6.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Join/Join": {
			"id": "pages/Join/Join",
			"parentId": "root",
			"path": "join",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Join-Bn3o-9Ad.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js", "/assets/Cards-CCudXcij.js"],
			"css": ["/assets/Join-Chw22d65.css", "/assets/Cards-BLheqFGF.css"],
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
			"module": "/assets/NotFound-B9fy4R_k.js",
			"imports": ["/assets/jsx-runtime-BKd12lFt.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-cdf553da.js",
	"version": "cdf553da",
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
	"/tournaments",
	"/district",
	"/executive",
	"/bylaws",
	"/join"
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
	"pages/District/District": {
		id: "pages/District/District",
		parentId: "root",
		path: "district",
		index: void 0,
		caseSensitive: void 0,
		module: District_exports
	},
	"pages/Executive/Executive": {
		id: "pages/Executive/Executive",
		parentId: "root",
		path: "executive",
		index: void 0,
		caseSensitive: void 0,
		module: Executive_exports
	},
	"pages/ByLaws/ByLaws": {
		id: "pages/ByLaws/ByLaws",
		parentId: "root",
		path: "bylaws",
		index: void 0,
		caseSensitive: void 0,
		module: ByLaws_exports
	},
	"pages/Join/Join": {
		id: "pages/Join/Join",
		parentId: "root",
		path: "join",
		index: void 0,
		caseSensitive: void 0,
		module: Join_exports
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

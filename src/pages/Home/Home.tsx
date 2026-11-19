// filename: pages/Home/Home.tsx

import CardContainer from "@/components/Cards/CardContainer";
import { homeData } from "@/config/homeData";

export default function Home() {
	return <CardContainer data={homeData}/>
}
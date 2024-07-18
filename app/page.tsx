import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProject from '@/components/RecentProject'
import { FloatingNav } from '@/components/ui/FloatingNav'
import WorkApproach from '@/components/WorkApproach'
import { navItems } from '@/data'
import Image from 'next/image'
import { title } from 'process'

export default function Home() {
	return (
		<main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProject />
				<Clients />
				<Experience />
				<WorkApproach />
				<Footer />
			</div>
		</main>
	)
}

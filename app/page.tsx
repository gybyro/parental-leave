import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import illustration from "@/public/LE - Baby - L.svg"

import ApplicationLayout from "@/app/application/layout"
import { Button } from "@/app/components/ui/Button"
import { StepNavigation } from "@/app/components/StepNavigation"



export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center">

			<Image
			className="contentContainer"
			src={illustration}
			alt="having a baby illustration"
			priority
			/>

			<h1>start filing for Parental Leave Today!</h1>
			<br />
			<br />
			<br />
			
			<Button variant='primary'>Start Filing</Button>

			<br />

			<Link href="/application/employment">
				<Button variant='primary'>Start Filing</Button>
			</Link>

		</div>
	);
}

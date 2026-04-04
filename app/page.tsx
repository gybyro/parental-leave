import Link from 'next/link';

import ApplicationLayout from "@/app/application/layout";
import { Button } from './components/ui/Button';
import { StepNavigation } from './components/StepNavigation';



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">

      <h1>start filing for Parental Leave Today!</h1>
      <br/>

      <Button variant='primary'>Start Filing</Button>
      <Link href="/application">Start Filing</Link>


      
    </div>
  );
}

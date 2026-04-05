import Link from 'next/link'
import { Button } from "@/app/components/ui/Button"

const NotFound = () => {
  return (
    <div className='py-28 bg-[var(--blue100)]'>
    <div className='contentContainer flex flex-col items-center'>

        <p className='eyebrow pb-4'>404</p>

        <h1 className='pb-6'>Þetta efni fannst því miður ekki</h1>

        <div className='text-left min-w-'>
            <p className='default'>Vefslóðin gæti verið röng, búið að færa efnið eða það ekki lengur í birtingu.</p>
            <p className='default'>Hvað er til ráða?</p>
            <ul>
                <li>Athugaðu hvort slóðin sé rétt skrifuð.</li>
                <li>Notaðu leitina á <Link href="/">forsíðu island.is</Link></li>
            </ul>
            <p className='default'>Ef þú telur að efnið eigi að vera aðgengilegt sendu okkur þá ábendingu í gegnum formið.</p>
        </div>
        <br />
      <Link href="/">
      
        <Button variant='primary'>
            Return Home
        </Button>
        </Link>
    </div></div>
    )
}
export default NotFound;
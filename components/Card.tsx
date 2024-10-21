import Image from './Image'
import Link from './Link'
import Gamepad from './icons/Gamepad'
import Github from './icons/Github'
import Steam from './icons/Steam'
import Unity from './icons/Unity'
import Button from './Button'
import Itchio from './icons/Itchio'
import Unreal from './icons/Unreal'
import { IProject } from '@/data/project'
import Notion from './icons/Notion'

const Card = ({
  title,
  description,
  imgSrc,
  blog,
  github,
  demo,
  steam,
  unity,
  unreal,
  itchio,
  notion,
}: IProject) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (blog ? (
          <Link href={blog} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {blog ? (
            <Link href={blog} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {blog && (
          <Link
            href={blog}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
        <div className="mt-auto inline-flex gap-2">
          {steam && (
            <Button href={steam} target="_blank">
              <Steam />
              Steam
            </Button>
          )}

          {unity && (
            <Button href={unity} color="primary" target="_blank">
              <Unity />
              Download
            </Button>
          )}

          {unreal && (
            <Button href={unreal} color="primary" target="_blank">
              <Unreal />
              Download
            </Button>
          )}

          {demo && (
            <Button href={demo} target="_blank">
              <Gamepad />
              Demo
            </Button>
          )}

          {github && (
            <Button color="secondary" href={github} target="_blank">
              <Github />
              Source
            </Button>
          )}

          {itchio && (
            <Button color="secondary" href={itchio} target="_blank">
              <Itchio />
              Play Now!
            </Button>
          )}

          {notion && (
            <Button color="secondary" href={notion} target="_blank">
              <Notion />
              Documentation
            </Button>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card

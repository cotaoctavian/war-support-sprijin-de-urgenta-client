import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import Image from '@/components/Image'
import LanguageSelector from '@/components/Header/LanguageSelector'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '@/store/types/state.type'
import { deauthenticate } from '@/store/reducers/auth'

const PARTNERSHIPS = [
  {
    id: 1,
    src: '/gov_ro.svg',
    alt: 'Romanian GOV Logo',
    url: 'https://gov.ro/',
  },
  {
    id: 2,
    src: '/dsu_logo.svg',
    alt: 'DSU Logo',
    url: 'http://www.dsu.mai.gov.ro/',
  },
]

const flexItemsCenter: string = clsx('flex items-center')
const smallBoldTextWithGrayAndMarginAside: string = clsx(
  'text-sm font-bold text-gray-500  mx-4'
)

const Header = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: State) => state.auth.userPk)
  const isLoadingUser = useSelector((state: State) => state.auth.loading)
  const handleLogout = () => {
    dispatch(deauthenticate())
  }

  return (
    <div className="w-full mx-auto">
      <div className="bg-gray-50">
        <div
          className={`${flexItemsCenter} 
          ${clsx('py-3 px-2', 'container mx-auto')}`}
        >
          <div className="max-w-[90px]">
            <Image src="/code_logo.svg" alt="Code 4 Romania logo" />
          </div>
          <div className="flex flex-col ml-6 text-sm font-medium text-gray-700 md:flex-row md:gap-1">
            <span>{`${t('solution.by')} `}</span>
            <a
              href="https://www.code4.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline whitespace-nowrap"
            >
              {t('findout.more')}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-50">
        <div className="container px-2 mx-auto ">
          <div
            className={`${flexItemsCenter} ${clsx('justify-between', 'py-4')}`}
          >
            <div className={`${flexItemsCenter}`}>
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/logo.svg"
                    alt="Sprijin de urgență"
                    className="h-[42px]"
                  />
                </a>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              {!isLoadingUser && (
                <div>
                  {isLoggedIn ? (
                    <div className="cursor-pointer" onClick={handleLogout}>
                      Logout
                    </div>
                  ) : (
                    <Link href="http://sprijin-de-urgenta-api.heroesof.tech:8070/ro/admin/login/?next=/ro/admin/">Login</Link>
                  )}
                </div>
              )}
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${flexItemsCenter} w-full max-w-[1350px] mx-auto justify-end py-3 pr-4`}
      >
        <span className={smallBoldTextWithGrayAndMarginAside}>
          {t('partenership.with')}
        </span>
        <div className="flex items-center gap-2">
          {PARTNERSHIPS.map(({ id, src, alt, url }) => (
            <a key={id} href={url} rel="noreferrer" target="_blank">
              <Image src={src} alt={alt} className="h-[38px]" />
            </a>
          ))}
        </div>
        <span className={`${smallBoldTextWithGrayAndMarginAside} lowercase`}>
          {t('created.by')}
        </span>
        <a href="https://www.code4.ro/" rel="noreferrer" target="_blank">
          <Image
            src="/code4romania.svg"
            alt="Code 4 Romania logo"
            className="h-[34px]"
          />
        </a>
      </div>
    </div>
  )
}

export default Header

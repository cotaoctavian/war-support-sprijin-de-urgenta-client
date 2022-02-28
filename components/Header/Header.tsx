import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation('common');
  return (
    <div>
      <div className="bg-gray-50">
        <div className="container flex items-center py-3">
          <svg
            className="h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 121.9"
          >
            <path d="M48.8,2.5,31.5,5.1,0,61l31.5,55.8,17.3,2.6L15.2,61ZM93,2.5l17.3,2.6L141.8,61l-31.5,55.8L93,119.4,126.6,61Z"></path>
            <path d="M48.8,2.5,70.9,0V61H15.2Z" fill="#f3f3f3"></path>
            <path d="M48.8,119.4l22.1,2.5V61H15.2Z" fill="#d9d9d9"></path>
            <path d="M93,119.4l-22.1,2.5V61h55.7Z" fill="#bcbcbc"></path>
            <path d="M93,2.5,70.9,0V61h55.7Z" fill="#e9e9e9"></path>
            <path d="M200.2,51.1a51.4,51.4,0,0,1-11.6,1.4,23.1,23.1,0,0,1-8.3-1.2,10.4,10.4,0,0,1-4.9-4.1,19.3,19.3,0,0,1-2.5-6.6,62.2,62.2,0,0,1-.6-9.5c0-8,1.1-13.6,3.4-16.7s6.4-4.8,12.4-4.8a53.8,53.8,0,0,1,12.2,1.7L200,18a70.4,70.4,0,0,0-10-.9c-2.7,0-4.6.4-5.7,1.1s-2,2-2.5,4-.9,5.4-.9,10.2.6,8.1,1.7,10,3.4,2.7,6.7,2.7a67.5,67.5,0,0,0,10.7-.8Zm7.2-26.3q3.3-4.2,10.8-4.2T229,24.8q3.3,4.2,3.3,11.7c0,10.7-4.7,16-14.1,16s-14-5.3-14-16c0-5,1.1-8.9,3.2-11.7Zm6.4,18.6c.8,1.5,2.3,2.2,4.4,2.2s3.7-.7,4.5-2.2a15,15,0,0,0,1.3-6.9,14.3,14.3,0,0,0-1.3-6.8c-.8-1.4-2.3-2.2-4.5-2.2a4.7,4.7,0,0,0-4.4,2.2c-.9,1.4-1.3,3.7-1.3,6.8S212.9,41.9,213.8,43.4ZM264.1,9.1V51.8H256V50.5a16.8,16.8,0,0,1-7.4,2c-4.4,0-7.5-1.2-9.2-3.8s-2.6-6.6-2.6-12.2,1-9.5,3.1-12.1,5.2-3.8,9.5-3.8a33.6,33.6,0,0,1,5.4.6l1.2.3V9.1Zm-9,35.4.9-.2v-16a35.7,35.7,0,0,0-6-.6c-3.3,0-4.9,2.9-4.9,8.8,0,3.1.3,5.4,1.1,6.7a3.6,3.6,0,0,0,3.6,2A20.4,20.4,0,0,0,255.1,44.5Zm24.8-.4a6.1,6.1,0,0,0,4.1,1.3c3.8,0,7.1-.2,10.1-.4l1.7-.2v6a50.9,50.9,0,0,1-12.6,1.8c-4.6,0-8-1.3-10-3.7s-3.1-6.4-3.1-11.9c0-10.9,4.4-16.4,13.4-16.4s13.3,4.6,13.3,13.8l-.6,5.7H278.4a4.9,4.9,0,0,0,1.5,4Zm9-10.3q0-3.6-1.2-5.1c-.7-.9-2.1-1.4-4-1.4s-3.3.5-4.1,1.5-1.2,2.7-1.3,5Zm36.9-5.5V51.8h-8.2V28.3h-3.2v-7h3.2V20c0-4.4.7-7.4,2-9.1s3.6-2.5,7-2.5a34.5,34.5,0,0,1,5.6.6l1.3.2v6.7l-4.5-.2a2.9,2.9,0,0,0-2.5,1,7.1,7.1,0,0,0-.6,3.4v1.2h7.4v7Zm13.6-3.5c2.1-2.8,5.7-4.2,10.7-4.2s8.7,1.4,10.8,4.2,3.3,6.7,3.3,11.7c0,10.7-4.7,16-14.1,16s-14-5.3-14-16q0-7.5,3.3-11.7Zm6.3,18.6c.8,1.5,2.3,2.2,4.4,2.2s3.7-.7,4.5-2.2,1.3-3.8,1.3-6.9-.4-5.4-1.3-6.8-2.3-2.1-4.5-2.1-3.6.7-4.4,2.1-1.3,3.7-1.3,6.8S344.8,41.9,345.7,43.4Zm24.4,8.4V21.3h8.1v3.3a29.4,29.4,0,0,1,9.8-4v8.2a79.4,79.4,0,0,0-8.5,2.2l-1.2.4V51.8ZM182.3,98.9v13.9h-8.4V71.3H190c9.8,0,14.6,4.6,14.6,13.7,0,5.4-2,9.4-6.1,11.9l5.9,15.9h-9.2l-4.8-13.9Zm12.3-9A7.7,7.7,0,0,0,196,85a7,7,0,0,0-1.5-4.7,5.5,5.5,0,0,0-4.5-1.8h-7.7V91.7h7.8a5.5,5.5,0,0,0,4.5-1.8Zm17.5-4.2c2.2-2.7,5.8-4.1,10.8-4.1s8.7,1.4,10.8,4.1,3.2,6.7,3.2,11.8c0,10.7-4.6,16-14,16s-14-5.3-14-16c0-5.1,1.1-9,3.2-11.8Zm6.3,18.7a5,5,0,0,0,4.5,2.2c2.2,0,3.7-.8,4.5-2.2a15,15,0,0,0,1.3-6.9,14.7,14.7,0,0,0-1.3-6.9q-1.2-2.1-4.5-2.1a4.9,4.9,0,0,0-4.5,2.1c-.8,1.5-1.2,3.7-1.2,6.9S217.6,102.9,218.4,104.4Zm32.7,8.4h-8.2V82.3H251V84a15.2,15.2,0,0,1,7.2-2.4c3.3,0,5.8.9,7.6,2.8a23.2,23.2,0,0,1,10.3-2.8c4,0,6.8,1.1,8.4,3.5s2.3,6,2.3,11.2v16.5h-8.2V96.5a14.6,14.6,0,0,0-.8-5.8,3.4,3.4,0,0,0-3.4-1.8,19.9,19.9,0,0,0-4.8.8l-.9.3c.2,3.1.3,5.4.3,7v15.8h-8.2V97.1a19.1,19.1,0,0,0-.8-6.4c-.5-1.2-1.7-1.8-3.5-1.8a15.5,15.5,0,0,0-4.7.8l-.7.3v22.8Zm66.3-21v12.7a4.1,4.1,0,0,0,.5,2,1.8,1.8,0,0,0,1.5.8l-.2,6.2a22.3,22.3,0,0,1-5-.4,12.2,12.2,0,0,1-3.7-1.7,21.1,21.1,0,0,1-9,2.1c-6.3,0-9.5-3.3-9.5-10q0-4.9,2.7-6.9c1.7-1.4,4.4-2.2,8-2.4l6.5-.5V91.8a3.5,3.5,0,0,0-.8-2.6,4.3,4.3,0,0,0-2.8-.7l-11.4.5-.3-5.7a47,47,0,0,1,12.4-1.8c4,0,6.8.9,8.5,2.5s2.6,4.2,2.6,7.8Zm-13.7,8.1c-2.3.2-3.4,1.4-3.4,3.6s1,3.4,3,3.4a19.2,19.2,0,0,0,5-.8l.9-.2V99.4Zm29.7,12.9h-8.2V82.3h8.1V84a15.5,15.5,0,0,1,7.6-2.4q6.2,0,8.4,3.6c1.6,2.4,2.4,6.1,2.4,11v16.6h-8.2V96.5a14.3,14.3,0,0,0-.9-5.8c-.6-1.2-1.9-1.8-3.7-1.8a12.7,12.7,0,0,0-4.8.8l-.7.3Zm25.5-34.4V70.1h8.2v8.3Zm0,34.4V82.3h8.2v30.5Zm39.1-21v12.7a4.1,4.1,0,0,0,.5,2,1.8,1.8,0,0,0,1.5.8l-.2,6.2a22.3,22.3,0,0,1-5-.4,12.7,12.7,0,0,1-3.8-1.7,20.4,20.4,0,0,1-8.9,2.1c-6.3,0-9.5-3.3-9.5-10,0-3.3.9-5.6,2.6-6.9s4.5-2.2,8.1-2.4l6.5-.5V91.8a3.5,3.5,0,0,0-.8-2.6,4.3,4.3,0,0,0-2.8-.7l-11.4.5-.3-5.7a47,47,0,0,1,12.4-1.8c4,0,6.8.9,8.5,2.5s2.6,4.2,2.6,7.8Zm-13.7,8.1c-2.3.2-3.4,1.4-3.4,3.6s1,3.4,2.9,3.4a19.2,19.2,0,0,0,5.1-.8l.9-.2V99.4Z"></path>
          </svg>
          <div className="ml-6 text-sm font-medium text-gray-700">
            <span>{t('solution.by')}</span>
            <a
              href="https://www.code4.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline whitespace-nowrap"
            >
              {` ${t('findout.more')}`}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

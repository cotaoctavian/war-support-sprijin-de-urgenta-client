import Button from '@/components/Button'
import { TransportServicesRequest } from 'api/types'
import clsx from 'clsx'
import { TransportGoodsForm } from 'forms'
import { TransportPersonsForm } from 'forms/TransportPersonsForm'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Dialog from '../Dialog'

export const SignUpServicesForm = () => {
  const { t } = useTranslation()

  const [showDialog, setShowDialog] = useState(false)
  const [showForm, setShowForm] = useState<
    'transportGoods' | 'transportPersons'
  >()

  const onTransportGoodsSubmit = (data: TransportServicesRequest) => {
    console.log(data)
    handleDialogDismiss()
  }

  const onTransporPersonsSubmit = (data: TransportServicesRequest) => {
    console.log(data)
    handleDialogDismiss()
  }

  const handleDialogDismiss = () => {
    setShowDialog(false)
    setShowForm(undefined)
  }

  return (
    <main
      className={clsx(
        'container grid place-items-start',
        'bg-blue-50 rounded',
        'px-8 py-7'
      )}
    >
      <section className={clsx('w-full md:w-1/2')}>
        <div className="flex items-center gap-4 mb-8 w-full">
          <h3 className="min-w-fit flex-1 mb-4 text-lg font-semibold">{t('services.transport-goods')}</h3>
          <Button
            text={t('add')}
            size="small"
            className='flex-1'
            variant="tertiary"
            onClick={() => {
              setShowForm('transportGoods')
              setShowDialog(true)
            }}
          />
        </div>
        <div className="flex items-center gap-4 mb-8 w-full">
          <h3 className="min-w-fit flex-1 mb-4 text-lg font-semibold">{t('services.transport-people')}</h3>
          <Button
            text={t('add')}
            className='flex-1'
            size="small"
            variant="tertiary"
            onClick={() => {
              setShowForm('transportPersons')
              setShowDialog(true)
            }}
          />
        </div>
      </section>
      {/* TODO: The content of the dialog should be dynamically set based on the type of service selected via button  */}
      <Dialog
        isOpen={showDialog}
        onDismiss={handleDialogDismiss}
      >
        {showForm === 'transportGoods' && (
          <>
            <Dialog.Header
              title={t('services.transport-goods')}
              onDismiss={handleDialogDismiss}
            />
            <TransportGoodsForm onSubmit={onTransportGoodsSubmit} />
          </>
        )}
        {showForm === 'transportPersons' && (
          <>
            <Dialog.Header
              title={t('services.transport-people')}
              onDismiss={handleDialogDismiss}
            />
            <TransportPersonsForm onSubmit={onTransporPersonsSubmit} />
          </>
        )}
      </Dialog>
    </main>
  )
}
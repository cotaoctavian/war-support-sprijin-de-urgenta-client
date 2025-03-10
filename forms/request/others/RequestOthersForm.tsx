import { DonateOtherRequest } from 'api'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { MultiSelectOption } from '../../../components/Form/types'
import Input from '@/components/Form/Input'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import Button from '@/components/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { SchemaOf } from 'yup'
import * as yup from 'yup'
import { OtherResourceForm } from '@/components/OtherResourcesForm/OtherResourcesForm'
import Dropdown from '@/components/Form/Dropdown'

interface IProps {
  counties: MultiSelectOption[]
  category: number
  onSubmit: (values: any) => void
}

type Form = {
  name: string
  description?: string
  available_until?: Date
  county_coverage: string[]
  town: string
}

export const RequestOthersForm: FC<IProps> = ({
  counties,
  category,
  onSubmit,
}) => {
  const { t } = useTranslation()

  const otherResourcesSchema: SchemaOf<OtherResourceForm> = yup.object().shape({
    name: yup.string().typeError(t('error.must.be.string')).required(),
    category: yup.number().typeError(t('error.must.be.number')),
    description: yup.string().typeError(t('error.must.be.string')),
    available_until: yup.string().typeError(t('error.must.be.string')),
    county_coverage: yup
      .array()
      .min(1, t('error.county.minOne'))
      .of(yup.string().required()),
    town: yup.string().typeError(t('error.must.be.string')),
  })
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otherResourcesSchema),
  })

  const onFormSubmit = (values: any) => {
    const donateOtherRequest: DonateOtherRequest = { ...values, category }
    onSubmit(donateOtherRequest)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Input
        label={t('signup.other.name')}
        {...register('name')}
        errors={errors['name']}
      />
      <div className={'flex flex-col space-x-4'}>
        <Dropdown
          {...register('county_coverage')}
          className={clsx('w-1/2 mb-4')}
          errors={errors['county_coverage']}
          label={t('signup.other.county_coverage')}
        >
          {counties.length > 0 &&
            counties.map(({ value, label }) => (
              <option key={`${value}_${label}`} value={value}>
                {label}
              </option>
            ))}
        </Dropdown>
        <Input
          className={'w-1/2'}
          label={t('signup.other.town')}
          errors={errors['town']}
          {...register('town')}
        />
      </div>
      <Button type="submit" text={t('add')} variant="tertiary" size="small" />
    </form>
  )
}

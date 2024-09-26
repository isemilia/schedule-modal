import { FormProvider, useForm } from 'react-hook-form'

import { StyledForm, StyledFormContent, StyledFormRow } from './assets/styles'
import Select from '../select'
import Counter from '../counter'
import PeriodOutput from '../period-output'
import MultiChoiceGroup from '../multi-choice-group'
import AlertBox from '../alert-box'
import { formatDate, getNextMonday, minutesToTime } from '../../shared/utils.js'
import { useEffect } from 'react'

const ScheduleForm = () => {
  const today = new Date().getTime()

  const methods = useForm({
    defaultValues: {
      minutesPerClass: 45,
      totalHours: 0,
      datePeriod: {
        start: today,
        end: today,
      },
      days: [],
      breakDuration: 0,
      hoursPerDay: 0,
      timePeriod: {
        start: 420, // minutes from midnight
        end: 420 + 45,
      },
      teacher: undefined,
      classroom: undefined,
    },
  })

  const timePeriod = methods.watch('timePeriod')
  const minutesPerClass = methods.watch('minutesPerClass')
  const hoursPerDay = methods.watch('hoursPerDay')
  const breakDuration = methods.watch('breakDuration')

  const totalHours = methods.watch('totalHours')
  const days = methods.watch('days')
  const datePeriod = methods.watch('datePeriod')

  useEffect(() => {
    const totalBreaks = breakDuration * (hoursPerDay - 1)
    const minutesPerDay = minutesPerClass * hoursPerDay

    methods.setValue('timePeriod', {
      ...timePeriod,
      end: timePeriod.start + minutesPerDay + totalBreaks,
    })
  }, [minutesPerClass, hoursPerDay, breakDuration])

  useEffect(() => {
    const totalDays = Math.ceil(totalHours / hoursPerDay) || 0

    const nextMonday = getNextMonday()

    if (totalDays && days.length) {
      const totalWeeks = totalDays / days.length

      const lastSelectedWeekDay = Math.max(...days)

      const endDate = new Date(
        nextMonday.setDate(nextMonday.getDate() + totalWeeks * 7 - (7 - lastSelectedWeekDay)),
      )

      methods.setValue('datePeriod', {
        start: getNextMonday().getTime(),
        end: endDate.getTime(),
      })
    } else {
      const nextMonday = getNextMonday()
      methods.setValue('datePeriod', {
        start: nextMonday.getTime(),
        end: nextMonday.getTime(),
      })
    }
  }, [totalHours, hoursPerDay, days])

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <StyledForm>
        <StyledFormContent>
          <StyledFormRow $columns={3}>
            <Select
              options={[
                { value: 45, label: 'Академические (45 мин)' },
                { value: 60, label: 'Астрономические (60 мин)' },
              ]}
              defaultValue={45}
              onChange={(e) => {
                const value = e.target.value.value
                methods.setValue('minutesPerClass', value)
              }}
            />
            <Counter
              label={'Всего часов'}
              defaultValue={1}
              onChange={(e) => {
                methods.setValue('totalHours', e.target.value)
              }}
            />
            <PeriodOutput
              startLabel={formatDate(datePeriod.start)}
              endLabel={formatDate(datePeriod.end)}
            />
          </StyledFormRow>
          <StyledFormRow>
            <MultiChoiceGroup
              buttons={[
                {
                  label: 'Пн/Ср/Пт',
                  name: '3',
                  onClick: ({ changeValue }) => {
                    changeValue([0, 2, 4])
                  },
                },
                {
                  label: 'Вт/Чт',
                  name: '2',
                  onClick: ({ changeValue }) => {
                    changeValue([1, 3])
                  },
                },
              ]}
              options={[
                { value: 0, label: 'Пн' },
                { value: 1, label: 'Вт' },
                { value: 2, label: 'Ср' },
                { value: 3, label: 'Чт' },
                { value: 4, label: 'Пт' },
                { value: 5, label: 'Сб' },
                { value: 6, label: 'Вс' },
              ]}
              onChange={(e) => {
                methods.setValue('days', e.target.value)
              }}
            />
          </StyledFormRow>
          <StyledFormRow $columns={3}>
            <Select
              options={[
                { value: 0, label: 'Без перерыва' },
                { value: 5, label: '5 мин' },
                { value: 10, label: '10 мин' },
                { value: 15, label: '15 мин' },
                { value: 20, label: '20 мин' },
                { value: 30, label: '30 мин' },
                { value: 40, label: '40 мин' },
                { value: 45, label: '45 мин' },
                { value: 50, label: '50 мин' },
                { value: 60, label: '60 мин' },
              ]}
              defaultValue={0}
              onChange={(e) => {
                methods.setValue('breakDuration', e.target.value.value)
              }}
            />
            <Counter
              label={'Часов в день'}
              defaultValue={1}
              onChange={(e) => {
                methods.setValue('hoursPerDay', e.target.value)
              }}
            />
            <PeriodOutput
              startLabel={minutesToTime(timePeriod.start)}
              endLabel={minutesToTime(timePeriod.end)}
            />
          </StyledFormRow>
          <StyledFormRow $columns={3}>
            <div style={{ gridColumn: '1/3' }}>
              <Select
                placeholder={'Выберите преподавателя на это время'}
                options={[
                  { value: 0, label: 'Преподаватель 1' },
                  { value: 1, label: 'Преподаватель 2' },
                ]}
                onChange={(e) => {
                  methods.setValue('teacher', e.target.value.value)
                }}
              />
            </div>
            <Select
              placeholder={'Аудитория'}
              options={[
                { value: 0, label: 'Аудитория 1' },
                { value: 1, label: 'Аудитория 2' },
              ]}
              onChange={(e) => {
                methods.setValue('classroom', e.target.value.value)
              }}
            />
          </StyledFormRow>
          <AlertBox>
            Выбор <strong>преподавателя</strong> и <strong>аудитории</strong> не обязателен
          </AlertBox>
        </StyledFormContent>
        <button onClick={methods.handleSubmit(handleSubmit)}>submit</button>
      </StyledForm>
    </FormProvider>
  )
}

export default ScheduleForm

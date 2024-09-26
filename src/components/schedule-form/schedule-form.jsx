import { FormProvider, useForm } from 'react-hook-form'

import { StyledForm, StyledFormContent, StyledFormRow } from './assets/styles'
import Select from '../select/index.js'
import Counter from '../counter/index.js'
import PeriodOutput from '../period-output/index.js'
import MultiChoiceGroup from '../multi-choice-group/index.js'

const ScheduleForm = () => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <StyledForm>
        <StyledFormContent>
          <StyledFormRow $columns={3}>
            <Select
              options={[
                { value: 45, label: 'Академические' },
                { value: 60, label: 'Астрономические' },
              ]}
              defaultValue={45}
            />
            <Counter />
            <PeriodOutput startLabel={'28.02.2001'} endLabel={'12.07.2004'} />
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
            />
          </StyledFormRow>
        </StyledFormContent>
      </StyledForm>
    </FormProvider>
  )
}

export default ScheduleForm

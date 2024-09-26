import { FormProvider, useForm } from 'react-hook-form'

import { StyledForm, StyledFormContent, StyledFormRow } from './assets/styles'
import Select from '../select/index.js'
import Counter from '../counter/index.js'
import PeriodOutput from '../period-output/index.js'

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
        </StyledFormContent>
      </StyledForm>
    </FormProvider>
  )
}

export default ScheduleForm

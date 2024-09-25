import { FormProvider, useForm } from 'react-hook-form'

import { StyledForm, StyledFormContent, StyledFormRow } from './assets/styles'
import Select from '../select/index.js'
import Counter from '../counter/index.js'

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
          </StyledFormRow>
        </StyledFormContent>
      </StyledForm>
    </FormProvider>
  )
}

export default ScheduleForm

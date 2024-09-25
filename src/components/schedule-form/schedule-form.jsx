import { FormProvider, useForm } from 'react-hook-form'

import { StyledForm, StyledFormContent, StyledFormRow } from './assets/styles'
import Select from '../select/index.js'

const ScheduleForm = () => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <StyledForm>
        <StyledFormContent>
          <StyledFormRow>
            <Select
              options={[
                { value: 45, label: 'Академические' },
                { value: 60, label: 'Астрономические' },
              ]}
              defaultValue={45}
            />
          </StyledFormRow>
        </StyledFormContent>
      </StyledForm>
    </FormProvider>
  )
}

export default ScheduleForm

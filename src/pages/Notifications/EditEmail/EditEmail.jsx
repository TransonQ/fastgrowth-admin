import { Page } from '@shopify/polaris'
import { useNavigate, useParams } from 'react-router-dom'

export const EditEmail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log('id: ', id)
  return (
    <Page
      title="Successful Referral Email"
      breadcrumbs={[
        {
          content: 'back',
          onAction() {
            navigate(-1)
          },
        },
      ]}
    >
      EditEmail
    </Page>
  )
}

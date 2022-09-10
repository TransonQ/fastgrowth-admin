import { Page } from '@shopify/polaris'
import { useNavigate, useParams } from 'react-router-dom'

export const EditRewards = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log('id: ', id)

  return (
    <Page
      title="Rewards for advocates"
      breadcrumbs={[
        {
          content: 'back',
          onAction() {
            navigate(-1)
          },
        },
      ]}
    >
      EditRewards
    </Page>
  )
}

import {
  Button,
  ButtonGroup,
  Card,
  Layout,
  Page,
  Stack
} from '@shopify/polaris'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const Notifications = () => {
  const navigate = useNavigate()
  const linkToID = useCallback(
    (id) => () => navigate(`/notifications/email/${id}`)
  )
  return (
    <Page title="Notifications">
      <Layout>
        <Layout.AnnotatedSection title="Referrals">
          <Card title="Invitee Email" sectioned>
            <Stack vertical>
              <p>
                This email is sent when a friend is referred and receives their
                reward.
              </p>
              <Stack distribution="trailing">
                <ButtonGroup>
                  <Button plain onClick={linkToID(123)}>
                    Edit
                  </Button>
                  <Button>Disabled</Button>
                </ButtonGroup>
              </Stack>
            </Stack>
          </Card>
          <Card title="Successful Referral Email" sectioned>
            <Stack vertical>
              <p>Sent to the customers who referred others to purchase</p>
              <Stack distribution="trailing">
                <ButtonGroup>
                  <Button plain onClick={linkToID(123)}>
                    Edit
                  </Button>
                  <Button primary>Activate</Button>
                </ButtonGroup>
              </Stack>
            </Stack>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  )
}

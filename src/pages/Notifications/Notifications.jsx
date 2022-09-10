import {
  Button,
  ButtonGroup,
  Card,
  Layout,
  Page,
  Stack
} from '@shopify/polaris'

export const Notifications = () => {
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
                  <Button plain>Edit</Button>
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
                  <Button plain>Edit</Button>
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

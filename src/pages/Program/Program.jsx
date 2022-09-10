import {
  Card,
  Layout,
  Page,
  SettingToggle,
  TextField,
  TextStyle
} from '@shopify/polaris'
import { useToggle } from 'ahooks'
import { useCallback, useState } from 'react'

export const Program = () => {
  const [active, { toggle }] = useToggle()
  const [statusLoading, setStatusLoading] = useState(false)
  const contentStatus = active ? 'Deactivate' : 'Activate'
  const textStatus = active ? 'activated' : 'deactivated'

  const [rewardDelay, setRewardDelay] = useState('')
  const [purchases, setPurchases] = useState('1')

  const handleSwitch = useCallback(async () => {
    try {
      setStatusLoading(true)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      toggle()
    } catch (error) {
    } finally {
      setStatusLoading(false)
    }
  }, [])

  return (
    <Page title="Referrals Program">
      <Layout>
        <Layout.AnnotatedSection title="Program status">
          <SettingToggle
            action={{
              content: contentStatus,
              onAction: handleSwitch,
              loading: statusLoading,
            }}
            enabled={active}
          >
            Your program is currently
            <TextStyle variation="strong"> {textStatus}</TextStyle>.
          </SettingToggle>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection title="Referral Rewards">
          <Card title="Rewards for advocates">
            <Card.Section
              title={<TextStyle>15% discount</TextStyle>}
              actions={[{ content: 'Edit' }]}
            />
          </Card>
          <Card title="Rewards for referred friends">
            <Card.Section
              title={<TextStyle>15% discount</TextStyle>}
              actions={[{ content: 'Edit' }]}
            />
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection title="Rewards Settings">
          <Card sectioned>
            <TextField
              type="number"
              min={0}
              label="Reward Delay"
              value={rewardDelay}
              onChange={setRewardDelay}
              autoComplete="off"
              helpText="If a friend cancels the order during this period then the referrer will not receive the reward."
            />
            <TextField
              disabled
              type="number"
              min={0}
              label="Number of purchases"
              value={purchases}
              onChange={setPurchases}
              autoComplete="off"
              helpText="Customers purchase products for the first time in the store."
            />
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  )
}

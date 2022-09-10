import {
  Badge,
  CalloutCard,
  Card,
  Grid,
  IndexTable,
  Layout,
  Page
} from '@shopify/polaris'

export const Home = () => {
  const customers = [
    {
      id: '3411',
      url: 'customers/341',
      name: 'Mae Jemison',
      location: 'Decatur, USA',
      orders: 20,
      amountSpent: '$2,400',
    },
    {
      id: '2561',
      url: 'customers/256',
      name: 'Ellen Ochoa',
      location: 'Los Angeles, USA',
      orders: 30,
      amountSpent: '$140',
    },
  ]
  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  }

  const rowMarkup = customers.map(
    ({ id, name, location, orders, amountSpent }, index) => (
      <IndexTable.Row id={id} key={id} position={index}>
        <IndexTable.Cell>manc@fstln.io</IndexTable.Cell>
        <IndexTable.Cell>man@fstln.io</IndexTable.Cell>
        <IndexTable.Cell>
          <Badge status="success">Sent</Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>123141</IndexTable.Cell>
        <IndexTable.Cell>2022-09-01 9:12 am</IndexTable.Cell>
      </IndexTable.Row>
    )
  )

  return (
    <Page title="Overview">
      <Layout>
        <Layout.Section>
          <CalloutCard
            title="Use referral programs to get more customers"
            illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
            primaryAction={{
              content: 'Get start',
              // url: 'https://www.shopify.com',
            }}
          >
            <p>
              Grow your customer base and reward existing customers for
              referring their friends.
            </p>
          </CalloutCard>
        </Layout.Section>

        <Layout.Section>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 3, sm: 1, md: 1, lg: 3, xl: 3 }}>
              <Card title="Orders" sectioned>
                <p>4</p>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 3, sm: 1, md: 1, lg: 3, xl: 3 }}>
              <Card title="Orders" sectioned>
                <p>4</p>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 3, sm: 1, md: 1, lg: 3, xl: 3 }}>
              <Card title="Orders" sectioned>
                <p>4</p>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 3, sm: 1, md: 1, lg: 3, xl: 3 }}>
              <Card title="Orders" sectioned>
                <p>4</p>
              </Card>
            </Grid.Cell>
          </Grid>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <IndexTable
              resourceName={resourceName}
              itemCount={customers.length}
              headings={[
                { title: 'Advocate' },
                { title: 'Friend' },
                { title: 'Status' },
                { title: 'Status', hidden: false },
                { title: 'Date', hidden: false },
              ]}
              selectable={false}
            >
              {rowMarkup}
            </IndexTable>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

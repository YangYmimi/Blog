import { Row, Col, Card, Divider, Icon, Timeline } from 'antd';

function AboutMe() {
  return (
    <Row>
      <Col
        span={12}
        style={{
          backgroundColor: '#FFF',
          borderRadius: '2px',
        }}
      >
        <Card bordered={false}>
          <div style={{}}>
            <div
              style={{
                fontSize: '20px',
                fontWeight: 500,
                marginBottom: '24px',
              }}
            >
              杨政
            </div>
            <div>
              <p>
                <Icon
                  type="profile"
                  style={{
                    marginRight: '10px',
                  }}
                />
                <span>
                  <a href="http://www.vocust.com/home">Vocust</a> - 前端工程师
                </span>
              </p>
              <p>
                <Icon
                  type="environment"
                  style={{
                    marginRight: '10px',
                  }}
                />
                <span>上海市长宁区</span>
              </p>
            </div>
            <Divider />
            <div>
              <Timeline>
                <Timeline.Item
                  dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
                  color="red"
                >
                  <span style={{ marginRight: '10px' }}>2015 - 2017</span>
                  <span>Augmentum</span>
                </Timeline.Item>
                <Timeline.Item
                  dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
                  color="red"
                >
                  <span style={{ marginRight: '10px' }}>2017 - 2018</span>
                  <span>PwC</span>
                </Timeline.Item>
                <Timeline.Item
                  dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
                  color="red"
                >
                  <span style={{ marginRight: '10px' }}>2018 - 2020</span>
                  <span>UPLTV</span>
                </Timeline.Item>
                <Timeline.Item
                  dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
                  color="green"
                >
                  <span style={{ marginRight: '10px' }}>2020 - 至今</span>
                  <span>Vocust</span>
                </Timeline.Item>
              </Timeline>
            </div>
            <Divider />
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default AboutMe;

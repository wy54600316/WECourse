import React from 'react';
import {
  Container,
  Divider,
  Table,
  UCheck,
  ButtonToolbar,
  Button,
  ModalTrigger,
  Modal,
  Pagination,
} from 'amazeui-react';

var data = [
    {"isCk":false,"id":"24213414","title":"江湖民谣双专场","category":"小型现场","loc":"北京","begin":"2015-05-06 21:00:00"},
    {"isCk":true,"id":"24213108","title":"读火乐队 江湖专场演出","category":"小型现场","loc":"北京","begin":"2015-05-01 14:00:00"},
    {"isCk":true,"id":"24213010","title":"音乐学习公开课活动","category":"小型现场","loc":"北京","begin":"2015-04-28 10:00:00"},
    {"isCk":true,"id":"24211259","title":"邓丽君金曲盛燕专场演唱会","category":"演唱会","loc":"北京","begin":"2015-05-22 19:30:00"},
    {"isCk":true,"id":"24211196","title":"伍佰2015北京演唱会","category":"演唱会","loc":"北京","begin":"2015-06-20 19:30:00"}
];

var modal = (
    <Modal type="prompt" title="添加成员">
        来来来，吐槽点啥吧
        <input type="text" className="am-modal-prompt-input"/>
    </Modal>
);

const ButtonPanel = React.createClass({
    onConfirm: function(d){
        console.log(d);
    },
    onCancel: function(){
        console.log('Canceled...11');
    },
    render: function(){
        return (
            <ButtonToolbar>
                <Button amSize="xs">批量导入</Button>
                <Button amSize="xs">一键同步</Button>
                <ModalTrigger
                    modal={modal}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}>
                    <Button amSize="xs">添加成员</Button>
                </ModalTrigger>
            </ButtonToolbar>
        );
    }
});

const EventRow = React.createClass({
  render: function() {
    var event = this.props.event;
    var className = event.highlight ? 'am-active' :
      event.disabled ? 'am-disabled' : '';

    return (
      <tr className={className}>
        <td><UCheck defaultChecked /></td>
        <td>{event.title}</td>
        <td>{event.category}</td>
        <td>{event.loc}</td>
        <td>{event.begin}</td>
      </tr>
    );
  }
});
const EventsTable = React.createClass({
  render: function() {
    return (
      <Table {...this.props}>
        <thead>
            <tr>
                <th><UCheck defaultChecked /></th>
                <th>姓名</th>
                <th>类型</th>
                <th>地点</th>
                <th>开始时间</th>
            </tr>
        </thead>
        <tbody>
            {this.props.events.map(function(event) {
                return (<EventRow key={event.id} event={event} />);
            })}
        </tbody>
      </Table>
    );
  }
});

const UserMng = React.createClass({
    render() {
        return (
            <Container className="am-padding-vertical-lg user-wrap">
                <ButtonPanel />
                <Divider />
                <EventsTable events={data} hover striped />
                <Pagination right>
                    <Pagination.Item disabled href="#">&laquo;</Pagination.Item>
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item href="http://www.amazeui.org">2</Pagination.Item>
                    <Pagination.Item href="#">3</Pagination.Item>
                    <Pagination.Item href="#">4</Pagination.Item>
                    <Pagination.Item href="#">5</Pagination.Item>
                    <Pagination.Item href="#">&raquo;</Pagination.Item>
                </Pagination>
            </Container>
        );
    },
});

export default UserMng;

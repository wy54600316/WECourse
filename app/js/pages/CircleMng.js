import React from 'react';
import {
  Container,
  Tabs,
  Table,
  UCheck,
  ButtonToolbar,
  Button,
  ModalTrigger,
  Modal,
  Icon,
} from 'amazeui-react';

const CircleMng = React.createClass({
  render() {
    return (
      <Container className="am-padding-vertical-lg circle-wrap">
        <Tabs>
            <Tabs.Item eventKey="1" title="社群">
                <ButtonPanel />
                <EventsTable hover striped />
            </Tabs.Item>
            <Tabs.Item eventKey="2" title="帖子">
              走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
            </Tabs.Item>
            <Tabs.Item eventKey="3" title="板块">
              我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
            </Tabs.Item>
            <Tabs.Item eventKey="4" title="积分">
              我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
            </Tabs.Item>
        </Tabs>
      </Container>
    );
  },
});

var addModal = (
    <Modal type="prompt" title="新建社群">
        <input type="text" className="am-modal-prompt-input"/>
    </Modal>
);
var delModal = <Modal type="confirm" title="删除确认">确定要删除这条记录吗？</Modal>;
var updateModal = (
    <Modal type="prompt" title="修改社群">
        <input type="text" className="am-modal-prompt-input"/>
    </Modal>
);
const ButtonPanel = React.createClass({
    onConfirm: function(d){
        console.log(d);
    },
    onCancel: function(){
        console.log('Canceled...');
    },
    render: function(){
        return (
            <ButtonToolbar>
                <ModalTrigger
                    modal={addModal}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}>
                    <Button amSize="xs" amStyle="success"><Icon icon="plus" /> 新建社群</Button>
                </ModalTrigger>
            </ButtonToolbar>
        );
    }
});

const EventRow = React.createClass({
    onConfirm: function(d){
        console.log(d);
    },
    onCancel: function(){
        console.log('Canceled...');
    },
    render: function() {
        var obj = this.props.obj;

        return (
            <tr>
                {/*<td><UCheck defaultChecked /></td>*/}
                <td>{obj.name}</td>
                <td>{obj.createdTime}</td>
                <td>{obj.updatedTime}</td>
                <td>{obj.description}</td>
                <td>
                    <ModalTrigger
                        modal={updateModal}
                        onCancel={this.onCancel}
                        onConfirm={this.onConfirm}>
                        <Button amSize="xs" amStyle="link">修改</Button>
                    </ModalTrigger>
                    <ModalTrigger
                        modal={delModal}
                        onCancel={this.onCancel}
                        onConfirm={this.onConfirm}>
                        <Button amSize="xs" amStyle="link">删除</Button>
                    </ModalTrigger>
                </td>
            </tr>
        );
    }
});
const EventsTable = React.createClass({
    getInitialState: function() {
        return {
            dataList: []
        };
    },
    loadData: function(){
        $.ajax({
            url: 'http://localhost:6953/api/CommunityGroup',
            dataType: 'json',
            cache: false,
            data: {
                pageSize: 10
            },
            success: function(res) {
                if(res.totalItemCount > 0){
                    this.setState({
                        dataList: res.pageOfItems
                    });
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.loadData();
    },
    render: function() {
        return (
            <Table {...this.props}>
                <thead>
                    <tr>
                        {/*<th><UCheck defaultChecked /></th>*/}
                        <th width="250">名称</th>
                        <th width="150">创建时间</th>
                        <th width="150">最后更新</th>
                        <th width="150">描述</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dataList.map(function(obj) {
                        return (<EventRow key={obj.id} obj={obj} />);
                    })}
                </tbody>
            </Table>
        );
    }
});

export default CircleMng;

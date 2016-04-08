import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
} from 'react-router';

import {
  Topbar,
  Nav,
  Grid,
  Col,
} from 'amazeui-react';

import RouteLink from './components/RouteLink';
import SiteFooter from './components/SiteFooter';

const App = React.createClass({
  render() {
    return (
      <div className="ask-page">
        <Topbar
          className="ask-header"
          brand=" "
          brandLink="http://www.mokylin.com"
          inverse
        >
        {/*<CollapsibleNav>
            <Nav topbar>
                <RouteLink to="page1">页面 1</RouteLink>
                <RouteLink to="page2">页面 2</RouteLink>
            </Nav>
        </CollapsibleNav>*/}
        </Topbar>
        <main className="ask-main">
            <Grid className="doc-g">
                <Col sm={2}>
                    <Nav>
                        <RouteLink to="UserMng">成员管理</RouteLink>
                        <RouteLink to="DefinedMenu">自定义菜单</RouteLink>
                        <RouteLink to="ArticleMng">文章管理</RouteLink>
                        <RouteLink to="ClassifyMng">分类管理</RouteLink>
                        <RouteLink to="CircleMng">圈管理</RouteLink>
                        <RouteLink to="MessageMng">消息管理</RouteLink>
                    </Nav>
                </Col>
                <Col sm={10}>
                    {this.props.children}
                </Col>
            </Grid>
        </main>
        <SiteFooter />
      </div>
    );
  },
});

// Pages
import Index from './pages/Index';
import UserMng from './pages/UserMng';
import DefinedMenu from './pages/DefinedMenu';
import ArticleMng from './pages/ArticleMng';
import ClassifyMng from './pages/ClassifyMng';
import CircleMng from './pages/CircleMng';
import MessageMng from './pages/MessageMng';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="userMng" component={UserMng} />
      <Route path="definedMenu" component={DefinedMenu} />
      <Route path="articleMng" component={ArticleMng} />
      <Route path="classifyMng" component={ClassifyMng} />
      <Route path="circleMng" component={CircleMng} />
      <Route path="messageMng" component={MessageMng} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});

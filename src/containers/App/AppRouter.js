import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../dashboard')),
  },
  {
    path: 'blankPage',
    component: asyncComponent(() => import('../blankPage')),
  },
  {
    path: '404',
    component: asyncComponent(() => import('../Page/404.js')),
  },
  {
    path: '500',
    component: asyncComponent(() => import('../Page/500.js')),
  },
  {
    path: 'allFormComponent',
    component: asyncComponent(() => import('../Forms/allComponents/')),
  },
  {
    path: 'InputField',
    component: asyncComponent(() => import('../Forms/Input')),
  },
  {
    path: 'editor',
    component: asyncComponent(() => import('../Forms/editor/')),
  },
  {
    path: 'stepperForms',
    component: asyncComponent(() => import('../Forms/StepperForms/')),
  },
  {
    path: 'FormsWithValidation',
    component: asyncComponent(() => import('../Forms/FormsWithValidation')),
  },
  {
    path: 'progress',
    component: asyncComponent(() => import('../Forms/Progress')),
  },
  {
    path: 'button',
    component: asyncComponent(() => import('../Forms/Button')),
  },
  {
    path: 'tab',
    component: asyncComponent(() => import('../Forms/Tab')),
  },
  {
    path: 'autocomplete',
    component: asyncComponent(() => import('../Forms/AutoComplete')),
  },
  {
    path: 'checkbox',
    component: asyncComponent(() => import('../Forms/Checkbox')),
  },
  {
    path: 'radiobox',
    component: asyncComponent(() => import('../Forms/Radiobox/')),
  },
  {
    path: 'selectbox',
    component: asyncComponent(() => import('../Forms/Select/')),
  },
  {
    path: 'transfer',
    component: asyncComponent(() => import('../Forms/Transfer/')),
  },
  {
    path: 'authCheck',
    component: asyncComponent(() => import('../AuthCheck')),
  },
  {
    path: 'table_ant',
    component: asyncComponent(() => import('../Tables/antTables')),
  },
  {
    path: 'dropdown',
    component: asyncComponent(() => import('../Uielements/Dropdown/dropdown')),
  },
  {
    path: 'op_badge',
    component: asyncComponent(() => import('../Uielements/Badge')),
  },
  {
    path: 'op_card',
    component: asyncComponent(() => import('../Uielements/Card')),
  },
  {
    path: 'op_carousel',
    component: asyncComponent(() => import('../Uielements/Carousel')),
  },
  {
    path: 'op_collapse',
    component: asyncComponent(() => import('../Uielements/Collapse')),
  },
  {
    path: 'op_tooltip',
    component: asyncComponent(() => import('../Uielements/Tooltip/')),
  },
  {
    path: 'rating',
    component: asyncComponent(() => import('../Uielements/rating/')),
  },
  {
    path: 'tree',
    component: asyncComponent(() => import('../Uielements/Tree/')),
  },
  {
    path: 'op_tag',
    component: asyncComponent(() => import('../Uielements/Tag')),
  },
  {
    path: 'op_timeline',
    component: asyncComponent(() => import('../Uielements/Timeline')),
  },
  {
    path: 'op_popover',
    component: asyncComponent(() => import('../Uielements/Popover')),
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;

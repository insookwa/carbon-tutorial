import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';

import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="C">
          COLABO
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem element={Link} to="/repos">
            SOLUTIONS
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            PRICING & PLANS
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            CONTACT SALES
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/repos">
                SOLUTIONS
              </HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/repos">
                PRICING & PLANS
              </HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/repos">
                CONTACT SALES
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderMenuItem element={Link} to="/repos">
            JOIN A MEETING
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            HOST A MEETING
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            SIGN IN
          </HeaderMenuItem>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;

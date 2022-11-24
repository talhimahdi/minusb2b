import React from "react";
import AccountNavigation from "../../components/AccountNavigation";
import Addresses from "./addresses";

import { Tab } from "@headlessui/react";

function Account() {
  return (
    <>
      <Tab.Group vertical>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div>Account</div>
      <div className="grid grid-flow-col grid-cols-3 gap-3 max-w-sm  mx-5 md:mx-auto md:max-w-7xl my-5 py-5">
        <div className="col-span-1 bg-slate-50">
          <AccountNavigation />
        </div>
        <div className="col-span-2 bg-slate-50 p-5">
          <Addresses />
        </div>
      </div>
    </>
  );
}

export default Account;

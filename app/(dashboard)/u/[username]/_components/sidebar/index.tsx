import { Wrapper } from "./Wrapper";
import { Toggle } from "./Toggle";
import { Navigation } from "./Navigation";

export const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};
